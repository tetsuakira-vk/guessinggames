const MO_COUNTRIES = [
    { name: 'Afghanistan',    id: 4   },
    { name: 'Argentina',      id: 32  },
    { name: 'Australia',      id: 36  },
    { name: 'Bolivia',        id: 68  },
    { name: 'Brazil',         id: 76  },
    { name: 'Canada',         id: 124 },
    { name: 'Chile',          id: 152 },
    { name: 'China',          id: 156 },
    { name: 'Colombia',       id: 170 },
    { name: 'Egypt',          id: 818 },
    { name: 'Ethiopia',       id: 231 },
    { name: 'France',         id: 250 },
    { name: 'Germany',        id: 276 },
    { name: 'Greece',         id: 300 },
    { name: 'Iceland',        id: 352 },
    { name: 'India',          id: 356 },
    { name: 'Indonesia',      id: 360 },
    { name: 'Iran',           id: 364 },
    { name: 'Iraq',           id: 368 },
    { name: 'Ireland',        id: 372 },
    { name: 'Italy',          id: 380 },
    { name: 'Japan',          id: 392 },
    { name: 'Kazakhstan',     id: 398 },
    { name: 'Kenya',          id: 404 },
    { name: 'Madagascar',     id: 450 },
    { name: 'Mexico',         id: 484 },
    { name: 'Mongolia',       id: 496 },
    { name: 'Morocco',        id: 504 },
    { name: 'Mozambique',     id: 508 },
    { name: 'Myanmar',        id: 104 },
    { name: 'Namibia',        id: 516 },
    { name: 'New Zealand',    id: 554 },
    { name: 'Nigeria',        id: 566 },
    { name: 'Norway',         id: 578 },
    { name: 'Pakistan',       id: 586 },
    { name: 'Peru',           id: 604 },
    { name: 'Philippines',    id: 608 },
    { name: 'Poland',         id: 616 },
    { name: 'Portugal',       id: 620 },
    { name: 'Saudi Arabia',   id: 682 },
    { name: 'Somalia',        id: 706 },
    { name: 'South Africa',   id: 710 },
    { name: 'Spain',          id: 724 },
    { name: 'Sweden',         id: 752 },
    { name: 'Thailand',       id: 764 },
    { name: 'Turkey',         id: 792 },
    { name: 'Ukraine',        id: 804 },
    { name: 'United Kingdom', id: 826 },
    { name: 'United States',  id: 840 },
    { name: 'Venezuela',      id: 862 },
    { name: 'Vietnam',        id: 704 },
    { name: 'Zimbabwe',       id: 716 },
];

const MO_ROUNDS = 10;
const MO_PTS    = 500;

let _moFeatures   = {};
let _moDataLoaded = false;

async function moLoadData() {
    if (_moDataLoaded) return true;
    try {
        const r = await fetch('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json');
        if (!r.ok) throw new Error('fetch failed');
        const topo = await r.json();
        const geo  = topojson.feature(topo, topo.objects.countries);
        geo.features.forEach(f => { _moFeatures[+f.id] = f; });
        _moDataLoaded = true;
        return true;
    } catch (e) {
        console.error('Map data load failed:', e);
        return false;
    }
}

let mo = { round: 0, score: 0, done: false, usedIndices: new Set(), current: null };

function moReset() {
    mo = { round: 0, score: 0, done: false, usedIndices: new Set(), current: null };
}

function moPickCountry() {
    const avail = MO_COUNTRIES.map((_, i) => i).filter(i => !mo.usedIndices.has(i));
    const pool  = avail.length > 0 ? avail : MO_COUNTRIES.map((_, i) => i);
    const idx   = pool[Math.floor(Math.random() * pool.length)];
    mo.usedIndices.add(idx);
    return MO_COUNTRIES[idx];
}

function moBuildOptions(correct) {
    const wrong = MO_COUNTRIES.filter(c => c.name !== correct.name)
        .sort(() => Math.random() - 0.5).slice(0, 3);
    return [...wrong, correct].sort(() => Math.random() - 0.5);
}

function moSizeCanvas(canvas) {
    const dpr  = window.devicePixelRatio || 1;
    const maxW = Math.min(window.innerWidth - 40, 440);
    const h    = Math.round(maxW * 0.62);
    canvas.style.width  = maxW + 'px';
    canvas.style.height = h + 'px';
    canvas.width  = maxW * dpr;
    canvas.height = h * dpr;
}

function moDrawFeature(canvas, feature, fill, stroke) {
    fill   = fill   || 'rgba(245,158,11,0.7)';
    stroke = stroke || 'rgba(245,158,11,1)';

    const dpr = window.devicePixelRatio || 1;
    const W   = canvas.width;
    const H   = canvas.height;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, W, H);

    // Collect all [lng, lat] leaf coordinates
    const coords = [];
    const collect = (a) => {
        if (typeof a[0] === 'number') { coords.push(a); return; }
        a.forEach(collect);
    };
    collect(feature.geometry.coordinates);
    if (!coords.length) return;

    let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
    coords.forEach(([x, y]) => {
        if (x < minX) minX = x; if (x > maxX) maxX = x;
        if (y < minY) minY = y; if (y > maxY) maxY = y;
    });

    const pad = 22 * dpr;
    const sx  = (W - 2 * pad) / (maxX - minX || 1);
    const sy  = (H - 2 * pad) / (maxY - minY || 1);
    const s   = Math.min(sx, sy);
    const pw  = (maxX - minX) * s;
    const ph  = (maxY - minY) * s;
    const ox  = (W - pw) / 2 - minX * s;
    const oy  = (H + ph) / 2 + minY * s;

    const toX = x => ox + x * s;
    const toY = y => oy - y * s;

    const drawRing = (ring) => {
        ring.forEach(([x, y], i) => {
            i === 0 ? ctx.moveTo(toX(x), toY(y)) : ctx.lineTo(toX(x), toY(y));
        });
        ctx.closePath();
    };

    ctx.beginPath();
    const geom = feature.geometry;
    if (geom.type === 'Polygon') {
        geom.coordinates.forEach(drawRing);
    } else {
        geom.coordinates.forEach(poly => poly.forEach(drawRing));
    }

    ctx.fillStyle   = fill;
    ctx.fill('evenodd');
    ctx.strokeStyle = stroke;
    ctx.lineWidth   = 1.2 * dpr;
    ctx.stroke();
}

async function moStartRound() {
    mo.round++;
    mo.done = false;

    document.getElementById('mo-round').textContent    = mo.round;
    document.getElementById('mo-score').textContent    = mo.score.toLocaleString();
    document.getElementById('mo-feedback').textContent = '';
    document.getElementById('mo-feedback').className   = 'mo-feedback';
    document.getElementById('mo-next-btn').classList.add('hidden');

    // Pick a country that has valid geo data
    let country, feature, tries = 0;
    do {
        country = moPickCountry();
        feature = _moFeatures[country.id];
        tries++;
    } while (!feature && tries < 10);

    if (!feature) { moStartRound(); return; }
    mo.current = country;

    const canvas = document.getElementById('mo-canvas');
    moSizeCanvas(canvas);
    moDrawFeature(canvas, feature);

    const optEl = document.getElementById('mo-options');
    optEl.innerHTML = '';
    moBuildOptions(country).forEach(opt => {
        const btn = document.createElement('button');
        btn.className   = 'mo-option-btn';
        btn.textContent = opt.name;
        btn.addEventListener('click', () => moAnswer(opt.name));
        optEl.appendChild(btn);
    });
}

function moAnswer(chosen) {
    if (mo.done) return;
    mo.done = true;

    const correct    = chosen === mo.current.name;
    const feedbackEl = document.getElementById('mo-feedback');

    document.querySelectorAll('.mo-option-btn').forEach(btn => {
        btn.disabled = true;
        if (btn.textContent === mo.current.name) btn.classList.add('mo-option--correct');
        else if (btn.textContent === chosen && !correct) btn.classList.add('mo-option--wrong');
    });

    const canvas = document.getElementById('mo-canvas');
    const feature = _moFeatures[mo.current.id];
    if (feature) {
        moDrawFeature(canvas, feature,
            correct ? 'rgba(34,197,94,0.65)'    : 'rgba(248,113,113,0.65)',
            correct ? 'rgba(34,197,94,1)'        : 'rgba(248,113,113,1)');
    }

    if (correct) {
        mo.score += MO_PTS;
        document.getElementById('mo-score').textContent = mo.score.toLocaleString();
        feedbackEl.textContent = 'Correct!';
        feedbackEl.className   = 'mo-feedback mo-feedback--correct';
    } else {
        feedbackEl.textContent = `That's ${mo.current.name}`;
        feedbackEl.className   = 'mo-feedback mo-feedback--wrong';
    }

    const nextBtn = document.getElementById('mo-next-btn');
    nextBtn.textContent = mo.round >= MO_ROUNDS ? 'SEE RESULTS' : 'NEXT →';
    nextBtn.classList.remove('hidden');
}

function moShowFinal() {
    document.getElementById('mo-game').classList.add('hidden');
    document.getElementById('mo-final').classList.remove('hidden');
    const el = document.getElementById('mo-final-score');
    el.textContent = '0';
    animateCounter(el, mo.score, 1200);
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('map-outline-btn').addEventListener('click', async () => {
        moReset();
        showScreen('map-screen');
        document.getElementById('mo-game').classList.remove('hidden');
        document.getElementById('mo-final').classList.add('hidden');
        document.getElementById('mo-loading').classList.remove('hidden');
        document.getElementById('mo-options').innerHTML = '';

        const ok = await moLoadData();
        document.getElementById('mo-loading').classList.add('hidden');
        if (!ok) { alert('Failed to load map data. Try again.'); showScreen('hub-screen'); return; }
        moStartRound();
    });

    document.getElementById('mo-back-btn').addEventListener('click', () => showScreen('hub-screen'));

    document.getElementById('mo-next-btn').addEventListener('click', () => {
        if (mo.round >= MO_ROUNDS) moShowFinal();
        else moStartRound();
    });

    document.getElementById('mo-play-again-btn').addEventListener('click', () => {
        moReset();
        document.getElementById('mo-game').classList.remove('hidden');
        document.getElementById('mo-final').classList.add('hidden');
        moStartRound();
    });

    document.getElementById('mo-hub-btn').addEventListener('click', () => showScreen('hub-screen'));
});
