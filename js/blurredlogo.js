const BL_LOGOS = [
    { name: 'Apple',       slug: 'apple'      },
    { name: 'Google',      slug: 'google'     },
    { name: 'Nike',        slug: 'nike'       },
    { name: 'Amazon',      slug: 'amazon'     },
    { name: 'Netflix',     slug: 'netflix'    },
    { name: 'Spotify',     slug: 'spotify'    },
    { name: 'YouTube',     slug: 'youtube'    },
    { name: 'Instagram',   slug: 'instagram'  },
    { name: 'Facebook',    slug: 'facebook'   },
    { name: 'Samsung',     slug: 'samsung'    },
    { name: 'Microsoft',   slug: 'microsoft'  },
    { name: 'Tesla',       slug: 'tesla'      },
    { name: 'Adidas',      slug: 'adidas'     },
    { name: 'IKEA',        slug: 'ikea'       },
    { name: 'Airbnb',      slug: 'airbnb'     },
    { name: 'Uber',        slug: 'uber'       },
    { name: 'Slack',       slug: 'slack'      },
    { name: 'Discord',     slug: 'discord'    },
    { name: 'GitHub',      slug: 'github'     },
    { name: 'Adobe',       slug: 'adobe'      },
    { name: 'PlayStation', slug: 'playstation'},
    { name: 'Reddit',      slug: 'reddit'     },
    { name: 'TikTok',      slug: 'tiktok'     },
    { name: 'PayPal',      slug: 'paypal'     },
    { name: 'Coca-Cola',   slug: 'cocacola'   },
    { name: "McDonald's",  slug: 'mcdonalds'  },
    { name: 'Twitter',     slug: 'x'          },
    { name: 'Dropbox',     slug: 'dropbox'    },
    { name: 'Snapchat',    slug: 'snapchat'   },
    { name: 'LinkedIn',    slug: 'linkedin'   },
];

const BL_ROUNDS = 10;
const BL_BLURS  = [24, 14, 7, 2, 0];
const BL_PTS    = [1000, 750, 500, 250, 100];

let bl = { round: 0, score: 0, done: false, stageIdx: 0, current: null, usedIndices: new Set() };

function blReset() {
    bl = { round: 0, score: 0, done: false, stageIdx: 0, current: null, usedIndices: new Set() };
}

function blPickLogo() {
    const avail = BL_LOGOS.map((_, i) => i).filter(i => !bl.usedIndices.has(i));
    const pool  = avail.length > 0 ? avail : BL_LOGOS.map((_, i) => i);
    const idx   = pool[Math.floor(Math.random() * pool.length)];
    bl.usedIndices.add(idx);
    return BL_LOGOS[idx];
}

function blPickOptions(correct) {
    const wrong = BL_LOGOS.filter(l => l.name !== correct.name)
        .sort(() => Math.random() - 0.5).slice(0, 3);
    return [...wrong, correct].sort(() => Math.random() - 0.5);
}

function blUpdateBlur() {
    const img   = document.getElementById('bl-logo');
    const px    = BL_BLURS[bl.stageIdx];
    img.style.filter = `blur(${px}px)`;
    document.getElementById('bl-pts').textContent = BL_PTS[bl.stageIdx].toLocaleString() + ' pts';

    const atMax = bl.stageIdx >= BL_BLURS.length - 1;
    document.getElementById('bl-reveal-btn').classList.toggle('hidden', atMax || bl.done);
}

function blRenderOptions() {
    const optEl = document.getElementById('bl-options');
    optEl.innerHTML = '';
    blPickOptions(bl.current).forEach(logo => {
        const btn = document.createElement('button');
        btn.className   = 'bl-option-btn';
        btn.textContent = logo.name;
        btn.addEventListener('click', () => blAnswer(logo.name));
        optEl.appendChild(btn);
    });
}

function blStartRound() {
    bl.round++;
    bl.done     = false;
    bl.stageIdx = 0;
    bl.current  = blPickLogo();

    document.getElementById('bl-round').textContent    = bl.round;
    document.getElementById('bl-score').textContent    = bl.score.toLocaleString();
    document.getElementById('bl-feedback').textContent = '';
    document.getElementById('bl-feedback').className   = 'bl-feedback';
    document.getElementById('bl-next-btn').classList.add('hidden');

    const img = document.getElementById('bl-logo');
    img.src = `https://cdn.simpleicons.org/${bl.current.slug}/000000`;

    blUpdateBlur();
    blRenderOptions();
}

function blReveal() {
    if (bl.done || bl.stageIdx >= BL_BLURS.length - 1) return;
    bl.stageIdx++;
    blUpdateBlur();
}

function blAnswer(chosen) {
    if (bl.done) return;
    bl.done = true;

    const correct    = chosen === bl.current.name;
    const feedbackEl = document.getElementById('bl-feedback');

    // Reveal the logo fully
    document.getElementById('bl-logo').style.filter = 'blur(0px)';
    document.getElementById('bl-reveal-btn').classList.add('hidden');

    document.querySelectorAll('.bl-option-btn').forEach(btn => {
        btn.disabled = true;
        if (btn.textContent === bl.current.name) btn.classList.add('bl-option--correct');
        else if (btn.textContent === chosen && !correct) btn.classList.add('bl-option--wrong');
    });

    if (correct) {
        const pts = BL_PTS[bl.stageIdx];
        bl.score += pts;
        document.getElementById('bl-score').textContent = bl.score.toLocaleString();
        feedbackEl.textContent = `Correct! +${pts}`;
        feedbackEl.className   = 'bl-feedback bl-feedback--correct';
    } else {
        feedbackEl.textContent = `That's ${bl.current.name}`;
        feedbackEl.className   = 'bl-feedback bl-feedback--wrong';
    }

    const nextBtn = document.getElementById('bl-next-btn');
    nextBtn.textContent = bl.round >= BL_ROUNDS ? 'SEE RESULTS' : 'NEXT →';
    nextBtn.classList.remove('hidden');
}

function blShowFinal() {
    document.getElementById('bl-game').classList.add('hidden');
    document.getElementById('bl-final').classList.remove('hidden');
    const el = document.getElementById('bl-final-score');
    el.textContent = '0';
    animateCounter(el, bl.score, 1200);
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('blur-btn').addEventListener('click', () => {
        blReset();
        showScreen('blur-screen');
        document.getElementById('bl-game').classList.remove('hidden');
        document.getElementById('bl-final').classList.add('hidden');
        blStartRound();
    });

    document.getElementById('bl-back-btn').addEventListener('click', () => showScreen('hub-screen'));
    document.getElementById('bl-reveal-btn').addEventListener('click', blReveal);

    document.getElementById('bl-next-btn').addEventListener('click', () => {
        if (bl.round >= BL_ROUNDS) blShowFinal();
        else blStartRound();
    });

    document.getElementById('bl-play-again-btn').addEventListener('click', () => {
        blReset();
        document.getElementById('bl-game').classList.remove('hidden');
        document.getElementById('bl-final').classList.add('hidden');
        blStartRound();
    });

    document.getElementById('bl-hub-btn').addEventListener('click', () => showScreen('hub-screen'));
});
