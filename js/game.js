// ============================================================
// CONFIG — paste your free Mapillary client token here.
// Sign up: https://www.mapillary.com/developer/auth
// Leave empty string to use only KartaView + Panoramax fallbacks.
// ============================================================
const MAPILLARY_API_KEY = 'MLY|26917164881281764|140bbd3fee2a4d4df13e921012fce412';

const TOTAL_ROUNDS = 5;

// Varied global mix of lat/lng seed points. A nearby street-level
// image is fetched from each source; the actual image coordinates
// (not the seed) are used for scoring.
const LOCATIONS = [
    // Japan
    { lat: 35.6762, lng: 139.6503, name: 'Tokyo' },
    { lat: 35.0116, lng: 135.7681, name: 'Kyoto' },
    { lat: 34.6937, lng: 135.5023, name: 'Osaka' },
    // Europe
    { lat: 48.8566, lng: 2.3522,   name: 'Paris' },
    { lat: 41.9028, lng: 12.4964,  name: 'Rome' },
    { lat: 52.5200, lng: 13.4050,  name: 'Berlin' },
    { lat: 52.3676, lng: 4.9041,   name: 'Amsterdam' },
    { lat: 51.5074, lng: -0.1278,  name: 'London' },
    { lat: 41.3851, lng: 2.1734,   name: 'Barcelona' },
    { lat: 50.0755, lng: 14.4378,  name: 'Prague' },
    { lat: 59.9139, lng: 10.7522,  name: 'Oslo' },
    { lat: 37.9838, lng: 23.7275,  name: 'Athens' },
    // South-east Asia
    { lat: 13.7563, lng: 100.5018, name: 'Bangkok' },
    { lat: 1.3521,  lng: 103.8198, name: 'Singapore' },
    { lat: -8.4095, lng: 115.1889, name: 'Bali' },
    { lat: 10.8231, lng: 106.6297, name: 'Ho Chi Minh City' },
    { lat: 3.1390,  lng: 101.6869, name: 'Kuala Lumpur' },
    { lat: 14.5995, lng: 120.9842, name: 'Manila' },
    // South America
    { lat: -22.9068, lng: -43.1729, name: 'Rio de Janeiro' },
    { lat: -34.6037, lng: -58.3816, name: 'Buenos Aires' },
    { lat: -12.0464, lng: -77.0428, name: 'Lima' },
    { lat: -23.5505, lng: -46.6333, name: 'São Paulo' },
    { lat: -33.4489, lng: -70.6693, name: 'Santiago' },
    // Africa
    { lat: -33.9249, lng: 18.4241,  name: 'Cape Town' },
    { lat: -1.2921,  lng: 36.8219,  name: 'Nairobi' },
    { lat: 30.0444,  lng: 31.2357,  name: 'Cairo' },
    { lat: -26.2041, lng: 28.0473,  name: 'Johannesburg' },
    // North America
    { lat: 40.7128,  lng: -74.0060, name: 'New York' },
    { lat: 37.7749,  lng: -122.4194, name: 'San Francisco' },
    { lat: 25.7617,  lng: -80.1918, name: 'Miami' },
    { lat: 19.4326,  lng: -99.1332, name: 'Mexico City' },
    { lat: 49.2827,  lng: -123.1207, name: 'Vancouver' },
    // Australia / NZ
    { lat: -33.8688, lng: 151.2093, name: 'Sydney' },
    { lat: -37.8136, lng: 144.9631, name: 'Melbourne' },
    { lat: -36.8485, lng: 174.7633, name: 'Auckland' },
    // Middle East
    { lat: 25.2048, lng: 55.2708, name: 'Dubai' },
    { lat: 41.0082, lng: 28.9784, name: 'Istanbul' },
];

// ── Game state ────────────────────────────────────────────────

let game = {
    round: 0,
    totalScore: 0,
    roundResults: [],
    actualLat: null,
    actualLng: null,
    usedIndices: new Set(),
};

// ── API helpers ───────────────────────────────────────────────

async function fetchMapillary(lat, lng) {
    if (!MAPILLARY_API_KEY) throw new Error('no key');

    const D = 0.005;
    const jitter = () => (Math.random() - 0.5) * 0.06;
    const candidates = [[0, 0], [jitter(), jitter()], [jitter(), jitter()]];

    for (const [dlat, dlng] of candidates) {
        const clat = lat + dlat, clng = lng + dlng;
        const bbox = `${clng - D},${clat - D},${clng + D},${clat + D}`;
        const url = `https://graph.mapillary.com/images?access_token=${MAPILLARY_API_KEY}` +
            `&fields=id,thumb_2048_url,computed_geometry,is_pano` +
            `&is_pano=true&bbox=${bbox}&limit=5`;
        try {
            const r = await fetch(url);
            if (!r.ok) continue;
            const json = await r.json();
            if (json.error || !json.data || json.data.length === 0) continue;
            const img = json.data[Math.floor(Math.random() * json.data.length)];
            const [iLng, iLat] = img.computed_geometry.coordinates;
            return { url: img.thumb_2048_url, lat: iLat, lng: iLng, source: 'Mapillary' };
        } catch (_) { continue; }
    }
    throw new Error('No Mapillary panoramas found near this location');
}

async function fetchKartaView(lat, lng) {
    const params = new URLSearchParams({ lat, lng, radius: '5000', page: '1', ipp: '10' });
    const r = await fetch(`https://api.kartaview.org/2.0/sequence/?${params}`, {
        headers: { Accept: 'application/json' },
    });
    if (!r.ok) throw new Error(`KartaView ${r.status}`);
    const json = await r.json();
    const seqs = json?.result?.data;
    if (!seqs || seqs.length === 0) throw new Error('no KartaView sequences');
    const seq = seqs[Math.floor(Math.random() * Math.min(seqs.length, 5))];

    const pr = await fetch(
        `https://api.kartaview.org/2.0/photo/?sequence_id=${seq.id}&page=1&ipp=20`,
        { headers: { Accept: 'application/json' } },
    );
    if (!pr.ok) throw new Error(`KartaView photos ${pr.status}`);
    const pj = await pr.json();
    const photos = pj?.result?.data;
    if (!photos || photos.length === 0) throw new Error('no KartaView photos');
    const p = photos[Math.floor(Math.random() * Math.min(photos.length, 8))];
    const imgUrl = p.image_url || `https://storage.openstreetcam.org/files/${p.name}`;
    return { url: imgUrl, lat: parseFloat(p.lat), lng: parseFloat(p.lng), source: 'KartaView' };
}

async function fetchPanoramax(lat, lng) {
    const d = 0.12;
    const bbox = `${lng - d},${lat - d},${lng + d},${lat + d}`;
    const r = await fetch(`https://api.panoramax.xyz/api/search?bbox=${bbox}&limit=20`);
    if (!r.ok) throw new Error(`Panoramax ${r.status}`);
    const json = await r.json();
    const features = json.features;
    if (!features || features.length === 0) throw new Error('no results');
    const feat = features[Math.floor(Math.random() * Math.min(features.length, 8))];
    let imgUrl = null;
    if (feat.assets) {
        const asset = feat.assets.image || feat.assets.overview || Object.values(feat.assets)[0];
        if (asset) imgUrl = asset.href;
    }
    if (!imgUrl && feat.links) {
        const lk = feat.links.find(l => l.rel === 'enclosure' || (l.type || '').startsWith('image/'));
        if (lk) imgUrl = lk.href;
    }
    if (!imgUrl) throw new Error('no image URL');
    const [fLng, fLat] = feat.geometry.coordinates;
    return { url: imgUrl, lat: fLat, lng: fLng, source: 'Panoramax' };
}

async function fetchImage(seedLat, seedLng) {
    const sources = [
        () => fetchMapillary(seedLat, seedLng),
        () => fetchPanoramax(seedLat, seedLng),
        () => fetchKartaView(seedLat, seedLng),
    ];

    for (const fn of sources) {
        try {
            return await fn();
        } catch (e) {
            console.warn('Image source failed:', e.message);
        }
    }
    throw new Error('All image sources exhausted');
}

// ── Location selection ────────────────────────────────────────

function pickLocation() {
    const available = LOCATIONS
        .map((_, i) => i)
        .filter(i => !game.usedIndices.has(i));
    const pool = available.length > 0 ? available : LOCATIONS.map((_, i) => i);
    const idx = pool[Math.floor(Math.random() * pool.length)];
    game.usedIndices.add(idx);
    return LOCATIONS[idx];
}

// ── Screen management ─────────────────────────────────────────

function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

function setLoading(visible) {
    document.getElementById('round-loading').classList.toggle('hidden', !visible);
}

function openMapPanel() {
    document.getElementById('map-panel').classList.add('open');
    document.getElementById('guess-btn').style.display = 'none';
    setTimeout(invalidateGuessMap, 420);
}

function closeMapPanel() {
    document.getElementById('map-panel').classList.remove('open');
    document.getElementById('guess-btn').style.display = '';
}

// ── Round flow ────────────────────────────────────────────────

async function loadRound() {
    game.round++;
    document.getElementById('current-round').textContent = game.round;
    document.getElementById('total-score').textContent = game.totalScore.toLocaleString();

    showScreen('game-screen');
    setLoading(true);
    closeMapPanel();
    resetGuessMap();
    destroyPanorama();

    const sourceBadge = document.getElementById('source-badge');

    const MAX_ATTEMPTS = 8;

    const tryNext = async (attemptsLeft) => {
        if (attemptsLeft === 0) {
            setLoading(false);
            alert('Could not find a usable image. Check your internet connection and try again.');
            showScreen('hub-screen');
            return;
        }

        let imageData;
        try {
            const loc = pickLocation();
            imageData = await fetchImage(loc.lat, loc.lng);
        } catch (_) {
            return tryNext(attemptsLeft - 1);
        }

        game.actualLat = imageData.lat;
        game.actualLng = imageData.lng;

        if (sourceBadge) sourceBadge.textContent = imageData.source;

        initPanorama(
            imageData.url,
            () => setLoading(false),
            () => tryNext(attemptsLeft - 1),
        );
    };

    tryNext(MAX_ATTEMPTS);
}

function submitGuess() {
    const guess = getGuessLatLng();
    if (!guess) return;

    closeMapPanel();
    destroyPanorama();

    const distance = haversineDistance(guess.lat, guess.lng, game.actualLat, game.actualLng);
    const score = calculateScore(distance);

    game.totalScore += score;
    game.roundResults.push({ round: game.round, score, distance });

    document.getElementById('total-score').textContent = game.totalScore.toLocaleString();

    showScreen('result-screen');
    showResultMap(guess.lat, guess.lng, game.actualLat, game.actualLng);
    setTimeout(invalidateResultMap, 50);

    const distEl = document.getElementById('result-distance');
    distEl.textContent = distance < 1
        ? `${Math.round(distance * 1000)} m`
        : `${Math.round(distance).toLocaleString()} km`;

    const scoreEl = document.getElementById('result-score');
    scoreEl.textContent = '0';
    animateCounter(scoreEl, score);

    const isLast = game.round >= TOTAL_ROUNDS;
    document.getElementById('next-round-btn').textContent = isLast ? 'SEE FINAL SCORE' : 'NEXT ROUND';
}

function showFinalScreen() {
    showScreen('final-screen');
    destroyPanorama();

    const el = document.getElementById('final-score-display');
    el.textContent = '0';
    animateCounter(el, game.totalScore, 2200);

    const breakdown = document.getElementById('final-breakdown');
    breakdown.innerHTML = '';
    game.roundResults.forEach(({ round, score, distance }) => {
        const row = document.createElement('div');
        row.className = 'breakdown-row';
        const distText = distance < 1
            ? `${Math.round(distance * 1000)} m away`
            : `${Math.round(distance).toLocaleString()} km away`;
        row.innerHTML = `<span class="br-round">Round ${round}</span>
                         <span class="br-dist">${distText}</span>
                         <span class="br-score">${score.toLocaleString()} pts</span>`;
        breakdown.appendChild(row);
    });
}

function resetGame() {
    game = { round: 0, totalScore: 0, roundResults: [], actualLat: null, actualLng: null, usedIndices: new Set() };
    destroyPanorama();
}

// ── Wiring ────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
    initGuessMap();

    document.getElementById('start-btn').addEventListener('click', () => {
        showScreen('hub-screen');
    });

    document.getElementById('street-guessr-btn').addEventListener('click', () => {
        resetGame();
        loadRound();
    });

    document.getElementById('sg-back-btn').addEventListener('click', () => {
        resetGame();
        showScreen('hub-screen');
    });

    document.getElementById('guess-btn').addEventListener('click', openMapPanel);
    document.getElementById('close-map-btn').addEventListener('click', closeMapPanel);
    document.getElementById('confirm-guess-btn').addEventListener('click', submitGuess);

    document.getElementById('next-round-btn').addEventListener('click', () => {
        if (game.round >= TOTAL_ROUNDS) {
            showFinalScreen();
        } else {
            loadRound();
        }
    });

    document.getElementById('play-again-btn').addEventListener('click', () => {
        resetGame();
        showScreen('hub-screen');
    });
});
