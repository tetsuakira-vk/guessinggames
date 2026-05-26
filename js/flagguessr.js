const FLAG_COUNTRIES = [
    { name: 'Afghanistan',           code: 'af', lat: 33.9,  lng: 67.7   },
    { name: 'Albania',               code: 'al', lat: 41.2,  lng: 20.2   },
    { name: 'Algeria',               code: 'dz', lat: 28.0,  lng: 1.7    },
    { name: 'Argentina',             code: 'ar', lat: -34.0, lng: -64.0  },
    { name: 'Armenia',               code: 'am', lat: 40.1,  lng: 45.0   },
    { name: 'Australia',             code: 'au', lat: -25.3, lng: 133.8  },
    { name: 'Austria',               code: 'at', lat: 47.5,  lng: 14.6   },
    { name: 'Azerbaijan',            code: 'az', lat: 40.3,  lng: 47.6   },
    { name: 'Bahrain',               code: 'bh', lat: 26.0,  lng: 50.6   },
    { name: 'Bangladesh',            code: 'bd', lat: 23.7,  lng: 90.4   },
    { name: 'Belgium',               code: 'be', lat: 50.8,  lng: 4.5    },
    { name: 'Bolivia',               code: 'bo', lat: -16.3, lng: -63.6  },
    { name: 'Bosnia and Herzegovina',code: 'ba', lat: 44.2,  lng: 17.9   },
    { name: 'Brazil',                code: 'br', lat: -14.2, lng: -51.9  },
    { name: 'Bulgaria',              code: 'bg', lat: 42.7,  lng: 25.5   },
    { name: 'Cambodia',              code: 'kh', lat: 12.6,  lng: 104.9  },
    { name: 'Canada',                code: 'ca', lat: 56.1,  lng: -106.3 },
    { name: 'Chile',                 code: 'cl', lat: -35.7, lng: -71.5  },
    { name: 'China',                 code: 'cn', lat: 35.9,  lng: 104.2  },
    { name: 'Colombia',              code: 'co', lat: 4.1,   lng: -72.3  },
    { name: 'Croatia',               code: 'hr', lat: 45.1,  lng: 15.2   },
    { name: 'Cuba',                  code: 'cu', lat: 21.5,  lng: -79.5  },
    { name: 'Czech Republic',        code: 'cz', lat: 49.8,  lng: 15.5   },
    { name: 'Denmark',               code: 'dk', lat: 56.3,  lng: 9.5    },
    { name: 'Ecuador',               code: 'ec', lat: -1.8,  lng: -78.2  },
    { name: 'Egypt',                 code: 'eg', lat: 26.0,  lng: 30.0   },
    { name: 'Estonia',               code: 'ee', lat: 58.6,  lng: 25.0   },
    { name: 'Ethiopia',              code: 'et', lat: 9.1,   lng: 40.5   },
    { name: 'Finland',               code: 'fi', lat: 64.0,  lng: 26.0   },
    { name: 'France',                code: 'fr', lat: 46.2,  lng: 2.2    },
    { name: 'Georgia',               code: 'ge', lat: 42.3,  lng: 43.4   },
    { name: 'Germany',               code: 'de', lat: 51.2,  lng: 10.5   },
    { name: 'Ghana',                 code: 'gh', lat: 7.9,   lng: -1.0   },
    { name: 'Greece',                code: 'gr', lat: 39.1,  lng: 22.4   },
    { name: 'Hungary',               code: 'hu', lat: 47.2,  lng: 19.5   },
    { name: 'Iceland',               code: 'is', lat: 64.9,  lng: -18.5  },
    { name: 'India',                 code: 'in', lat: 20.6,  lng: 79.0   },
    { name: 'Indonesia',             code: 'id', lat: -2.5,  lng: 118.0  },
    { name: 'Iran',                  code: 'ir', lat: 32.4,  lng: 53.7   },
    { name: 'Iraq',                  code: 'iq', lat: 33.2,  lng: 43.7   },
    { name: 'Ireland',               code: 'ie', lat: 53.4,  lng: -8.2   },
    { name: 'Israel',                code: 'il', lat: 31.0,  lng: 35.0   },
    { name: 'Italy',                 code: 'it', lat: 41.9,  lng: 12.6   },
    { name: 'Jamaica',               code: 'jm', lat: 18.1,  lng: -77.3  },
    { name: 'Japan',                 code: 'jp', lat: 36.2,  lng: 138.3  },
    { name: 'Jordan',                code: 'jo', lat: 30.6,  lng: 36.5   },
    { name: 'Kazakhstan',            code: 'kz', lat: 48.0,  lng: 66.9   },
    { name: 'Kenya',                 code: 'ke', lat: 0.0,   lng: 38.0   },
    { name: 'Kuwait',                code: 'kw', lat: 29.3,  lng: 47.5   },
    { name: 'Laos',                  code: 'la', lat: 19.9,  lng: 102.5  },
    { name: 'Latvia',                code: 'lv', lat: 56.9,  lng: 24.6   },
    { name: 'Lebanon',               code: 'lb', lat: 33.9,  lng: 35.9   },
    { name: 'Libya',                 code: 'ly', lat: 27.0,  lng: 17.2   },
    { name: 'Lithuania',             code: 'lt', lat: 55.2,  lng: 24.0   },
    { name: 'Malaysia',              code: 'my', lat: 4.2,   lng: 108.0  },
    { name: 'Mexico',                code: 'mx', lat: 23.6,  lng: -102.6 },
    { name: 'Moldova',               code: 'md', lat: 47.4,  lng: 28.4   },
    { name: 'Mongolia',              code: 'mn', lat: 46.9,  lng: 103.9  },
    { name: 'Morocco',               code: 'ma', lat: 31.8,  lng: -7.1   },
    { name: 'Mozambique',            code: 'mz', lat: -18.7, lng: 35.5   },
    { name: 'Myanmar',               code: 'mm', lat: 19.2,  lng: 96.7   },
    { name: 'Nepal',                 code: 'np', lat: 28.4,  lng: 84.1   },
    { name: 'Netherlands',           code: 'nl', lat: 52.1,  lng: 5.3    },
    { name: 'New Zealand',           code: 'nz', lat: -40.9, lng: 174.9  },
    { name: 'Nigeria',               code: 'ng', lat: 9.1,   lng: 8.7    },
    { name: 'North Korea',           code: 'kp', lat: 40.3,  lng: 127.5  },
    { name: 'Norway',                code: 'no', lat: 60.5,  lng: 8.5    },
    { name: 'Oman',                  code: 'om', lat: 21.5,  lng: 55.9   },
    { name: 'Pakistan',              code: 'pk', lat: 30.4,  lng: 69.3   },
    { name: 'Panama',                code: 'pa', lat: 8.5,   lng: -80.8  },
    { name: 'Paraguay',              code: 'py', lat: -23.4, lng: -58.4  },
    { name: 'Peru',                  code: 'pe', lat: -9.2,  lng: -75.0  },
    { name: 'Philippines',           code: 'ph', lat: 12.9,  lng: 121.8  },
    { name: 'Poland',                code: 'pl', lat: 52.1,  lng: 19.1   },
    { name: 'Portugal',              code: 'pt', lat: 39.4,  lng: -8.2   },
    { name: 'Qatar',                 code: 'qa', lat: 25.4,  lng: 51.2   },
    { name: 'Romania',               code: 'ro', lat: 45.9,  lng: 24.9   },
    { name: 'Russia',                code: 'ru', lat: 61.5,  lng: 105.3  },
    { name: 'Rwanda',                code: 'rw', lat: -1.9,  lng: 29.9   },
    { name: 'Saudi Arabia',          code: 'sa', lat: 24.2,  lng: 45.1   },
    { name: 'Senegal',               code: 'sn', lat: 14.5,  lng: -14.5  },
    { name: 'Serbia',                code: 'rs', lat: 44.0,  lng: 21.0   },
    { name: 'Singapore',             code: 'sg', lat: 1.4,   lng: 103.8  },
    { name: 'Slovakia',              code: 'sk', lat: 48.7,  lng: 19.7   },
    { name: 'Slovenia',              code: 'si', lat: 46.1,  lng: 14.8   },
    { name: 'Somalia',               code: 'so', lat: 5.2,   lng: 46.2   },
    { name: 'South Africa',          code: 'za', lat: -30.6, lng: 22.9   },
    { name: 'South Korea',           code: 'kr', lat: 36.0,  lng: 128.0  },
    { name: 'Spain',                 code: 'es', lat: 40.5,  lng: -3.7   },
    { name: 'Sri Lanka',             code: 'lk', lat: 7.9,   lng: 80.8   },
    { name: 'Sudan',                 code: 'sd', lat: 12.9,  lng: 30.2   },
    { name: 'Sweden',                code: 'se', lat: 60.1,  lng: 18.6   },
    { name: 'Switzerland',           code: 'ch', lat: 46.8,  lng: 8.2    },
    { name: 'Syria',                 code: 'sy', lat: 34.8,  lng: 38.9   },
    { name: 'Taiwan',                code: 'tw', lat: 23.7,  lng: 121.0  },
    { name: 'Tanzania',              code: 'tz', lat: -6.4,  lng: 34.9   },
    { name: 'Thailand',              code: 'th', lat: 15.9,  lng: 100.9  },
    { name: 'Tunisia',               code: 'tn', lat: 34.0,  lng: 9.0    },
    { name: 'Turkey',                code: 'tr', lat: 38.4,  lng: 35.2   },
    { name: 'Uganda',                code: 'ug', lat: 1.4,   lng: 32.3   },
    { name: 'Ukraine',               code: 'ua', lat: 48.4,  lng: 31.2   },
    { name: 'United Arab Emirates',  code: 'ae', lat: 24.0,  lng: 54.0   },
    { name: 'United Kingdom',        code: 'gb', lat: 55.4,  lng: -3.4   },
    { name: 'United States',         code: 'us', lat: 37.1,  lng: -95.7  },
    { name: 'Uruguay',               code: 'uy', lat: -32.5, lng: -55.8  },
    { name: 'Uzbekistan',            code: 'uz', lat: 41.4,  lng: 64.6   },
    { name: 'Venezuela',             code: 've', lat: 6.4,   lng: -66.6  },
    { name: 'Vietnam',               code: 'vn', lat: 14.1,  lng: 108.3  },
    { name: 'Yemen',                 code: 'ye', lat: 15.6,  lng: 48.5   },
    { name: 'Zimbabwe',              code: 'zw', lat: -19.0, lng: 29.2   },
];

const FG_ROUNDS = 10;
const FG_MAX_ATTEMPTS = 3;
const FG_POINTS = [1000, 600, 200];

// Distance thresholds and colours for the warmer/colder hint
const FG_HEAT = [
    { max: 500,  label: 'Scorching',  color: '#ef4444' },
    { max: 1500, label: 'Hot',        color: '#f97316' },
    { max: 3500, label: 'Warm',       color: '#eab308' },
    { max: 7000, label: 'Cold',       color: '#60a5fa' },
    { max: Infinity, label: 'Freezing', color: '#818cf8' },
];

function fgHeatLevel(km) {
    return FG_HEAT.find(h => km < h.max);
}

let fg = {
    round: 0, totalScore: 0, results: [],
    usedIndices: new Set(), country: null,
    attemptsLeft: FG_MAX_ATTEMPTS, done: false,
    prevDistance: null,
};

function fgReset() {
    fg = {
        round: 0, totalScore: 0, results: [],
        usedIndices: new Set(), country: null,
        attemptsLeft: FG_MAX_ATTEMPTS, done: false,
        prevDistance: null,
    };
}

function fgPickCountry() {
    const available = FLAG_COUNTRIES.map((_, i) => i).filter(i => !fg.usedIndices.has(i));
    const pool = available.length > 0 ? available : FLAG_COUNTRIES.map((_, i) => i);
    const idx = pool[Math.floor(Math.random() * pool.length)];
    fg.usedIndices.add(idx);
    return FLAG_COUNTRIES[idx];
}

function fgUpdateHUD() {
    document.getElementById('fg-round').textContent = fg.round;
    document.getElementById('fg-score').textContent = fg.totalScore.toLocaleString();
}

function fgRenderDots() {
    const wrap = document.getElementById('fg-dots');
    wrap.innerHTML = '';
    for (let i = 0; i < FG_MAX_ATTEMPTS; i++) {
        const dot = document.createElement('div');
        dot.className = 'fg-dot' + (i < fg.attemptsLeft ? ' fg-dot--on' : '');
        wrap.appendChild(dot);
    }
}

function fgClearHeat() {
    const el = document.getElementById('fg-heat');
    el.textContent = '';
    el.style.color = '';
}

function fgShowHeat(guessedCountry) {
    const dist = haversineDistance(
        guessedCountry.lat, guessedCountry.lng,
        fg.country.lat, fg.country.lng
    );
    const heat = fgHeatLevel(dist);
    const el = document.getElementById('fg-heat');

    let direction = '';
    if (fg.prevDistance !== null) {
        if (dist < fg.prevDistance)      direction = 'Getting warmer — ';
        else if (dist > fg.prevDistance) direction = 'Getting colder — ';
        else                             direction = 'Same distance — ';
    }

    el.textContent = `${direction}${heat.label} · ${Math.round(dist).toLocaleString()} km away`;
    el.style.color = heat.color;
    fg.prevDistance = dist;
}

function fgStartRound() {
    fg.round++;
    fg.attemptsLeft = FG_MAX_ATTEMPTS;
    fg.done = false;
    fg.prevDistance = null;
    fg.country = fgPickCountry();
    fgUpdateHUD();
    fgRenderDots();
    fgClearHeat();

    document.getElementById('fg-img').src = `https://flagcdn.com/w640/${fg.country.code}.png`;
    document.getElementById('fg-input').value = '';
    document.getElementById('fg-input').disabled = false;
    document.getElementById('fg-guess-btn').disabled = true;
    document.getElementById('fg-feedback').textContent = '';
    document.getElementById('fg-feedback').className = 'fg-feedback';
    document.getElementById('fg-next-btn').classList.add('hidden');
    document.getElementById('fg-suggestions').innerHTML = '';
    document.getElementById('fg-input').focus();
}

function fgSubmit() {
    if (fg.done) return;
    const input = document.getElementById('fg-input');
    const raw = input.value.trim();
    if (!raw) return;

    const guess = raw.toLowerCase();
    const answer = fg.country.name.toLowerCase();
    const fb = document.getElementById('fg-feedback');

    if (guess === answer) {
        const pts = FG_POINTS[FG_MAX_ATTEMPTS - fg.attemptsLeft];
        fg.totalScore += pts;
        fg.results.push({ round: fg.round, name: fg.country.name, pts, correct: true });
        fgUpdateHUD();
        fb.textContent = `Correct! +${pts.toLocaleString()} pts`;
        fb.className = 'fg-feedback fg-feedback--correct';
        fgClearHeat();
        fgEndRound();
    } else {
        fg.attemptsLeft--;
        fgRenderDots();

        const guessedCountry = FLAG_COUNTRIES.find(c => c.name.toLowerCase() === guess);

        if (fg.attemptsLeft === 0) {
            fg.results.push({ round: fg.round, name: fg.country.name, pts: 0, correct: false });
            fb.textContent = `It was ${fg.country.name}`;
            fb.className = 'fg-feedback fg-feedback--wrong';
            if (guessedCountry) fgShowHeat(guessedCountry);
            fgEndRound();
        } else {
            fb.textContent = `Not quite — ${fg.attemptsLeft} attempt${fg.attemptsLeft > 1 ? 's' : ''} left`;
            fb.className = 'fg-feedback fg-feedback--wrong';
            if (guessedCountry) fgShowHeat(guessedCountry);
            input.value = '';
            document.getElementById('fg-suggestions').innerHTML = '';
            document.getElementById('fg-guess-btn').disabled = true;
        }
    }
}

function fgEndRound() {
    fg.done = true;
    document.getElementById('fg-input').disabled = true;
    document.getElementById('fg-suggestions').innerHTML = '';
    document.getElementById('fg-guess-btn').disabled = true;
    const isLast = fg.round >= FG_ROUNDS;
    const btn = document.getElementById('fg-next-btn');
    btn.textContent = isLast ? 'SEE RESULTS' : 'NEXT FLAG →';
    btn.classList.remove('hidden');
}

function fgShowFinal() {
    document.getElementById('fg-game-area').classList.add('hidden');
    const finalEl = document.getElementById('fg-final');
    finalEl.classList.remove('hidden');
    const scoreEl = document.getElementById('fg-final-score');
    scoreEl.textContent = '0';
    animateCounter(scoreEl, fg.totalScore, 1500);
    const bd = document.getElementById('fg-final-breakdown');
    bd.innerHTML = '';
    fg.results.forEach(({ round, name, pts, correct }) => {
        const row = document.createElement('div');
        row.className = 'breakdown-row';
        row.innerHTML = `<span class="br-round">Flag ${round}</span>
                         <span class="br-dist" style="color:${correct ? 'var(--green)' : 'var(--muted)'}">${name}</span>
                         <span class="br-score">${pts.toLocaleString()} pts</span>`;
        bd.appendChild(row);
    });
}

function fgFilterSuggestions(q) {
    if (!q) return [];
    const lq = q.toLowerCase();
    return FLAG_COUNTRIES.filter(c => c.name.toLowerCase().includes(lq)).slice(0, 6);
}

function fgRenderSuggestions(matches, input) {
    const box = document.getElementById('fg-suggestions');
    box.innerHTML = '';
    matches.forEach(c => {
        const item = document.createElement('div');
        item.className = 'fg-suggestion';
        item.textContent = c.name;
        item.addEventListener('mousedown', e => {
            e.preventDefault();
            input.value = c.name;
            box.innerHTML = '';
            document.getElementById('fg-guess-btn').disabled = false;
        });
        box.appendChild(item);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('flag-guessr-btn').addEventListener('click', () => {
        fgReset();
        document.getElementById('fg-game-area').classList.remove('hidden');
        document.getElementById('fg-final').classList.add('hidden');
        showScreen('flag-screen');
        fgStartRound();
    });

    document.getElementById('fg-back-btn').addEventListener('click', () => showScreen('hub-screen'));

    const input = document.getElementById('fg-input');
    input.addEventListener('input', () => {
        fgRenderSuggestions(fgFilterSuggestions(input.value), input);
        document.getElementById('fg-guess-btn').disabled = !input.value.trim();
    });
    input.addEventListener('keydown', e => { if (e.key === 'Enter') fgSubmit(); });
    input.addEventListener('blur', () => {
        setTimeout(() => { document.getElementById('fg-suggestions').innerHTML = ''; }, 150);
    });

    document.getElementById('fg-guess-btn').addEventListener('click', fgSubmit);

    document.getElementById('fg-next-btn').addEventListener('click', () => {
        if (fg.round >= FG_ROUNDS) fgShowFinal();
        else fgStartRound();
    });

    document.getElementById('fg-play-again-btn').addEventListener('click', () => {
        fgReset();
        document.getElementById('fg-game-area').classList.remove('hidden');
        document.getElementById('fg-final').classList.add('hidden');
        fgStartRound();
    });

    document.getElementById('fg-hub-btn').addEventListener('click', () => showScreen('hub-screen'));
});
