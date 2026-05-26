const DG_DECADES = ['1950s', '1960s', '1970s', '1980s', '1990s', '2000s', '2010s', '2020s'];

const DG_CLUES = {
    '1950s': [
        "Elvis Presley released 'Heartbreak Hotel' and became a global superstar",
        "Roger Bannister became the first person to run a mile in under 4 minutes",
        "Watson and Crick published their discovery of DNA's double helix structure",
        "Disneyland opened its doors to the public in California",
        "The first commercial transatlantic jet passenger service began",
    ],
    '1960s': [
        "Neil Armstrong became the first human to walk on the Moon",
        "Martin Luther King Jr. delivered his 'I Have a Dream' speech",
        "The Beatles appeared on The Ed Sullivan Show and sparked Beatlemania",
        "The Berlin Wall was constructed, dividing East and West Germany",
        "Woodstock drew half a million people to a farm in New York",
    ],
    '1970s': [
        "Star Wars opened in cinemas and became an instant cultural phenomenon",
        "The Watergate scandal forced a US president to resign for the first time",
        "ABBA won Eurovision with 'Waterloo' and became a global pop sensation",
        "The first personal computers went on sale to the public",
        "Saturday Night Fever brought disco fever to mainstream audiences worldwide",
    ],
    '1980s': [
        "Michael Jackson's 'Thriller' became the best-selling album of all time",
        "The Berlin Wall fell, reuniting East and West Germany",
        "The Space Shuttle Challenger disaster shocked the world live on television",
        "Pac-Man became a global gaming obsession in arcades everywhere",
        "The first mobile phones became commercially available to consumers",
    ],
    '1990s': [
        "The World Wide Web was opened to the public by Tim Berners-Lee",
        "Dolly the sheep became the first mammal cloned from an adult cell",
        "Friends premiered on NBC and became one of the most-watched shows ever",
        "The Sony PlayStation launched and revolutionised home gaming",
        "The Spice Girls dominated global pop charts and coined 'Girl Power'",
    ],
    '2000s': [
        "Apple released the iPod, transforming how people listen to music",
        "Facebook was founded by Mark Zuckerberg in a Harvard dorm room",
        "YouTube launched, allowing anyone to upload and share videos online",
        "Steve Jobs unveiled the first iPhone, calling it 'an iPod, a phone, and the internet'",
        "Twitter launched, introducing the world to the concept of the 'tweet'",
    ],
    '2010s': [
        "Instagram launched as a photo-sharing app and was bought by Facebook for $1 billion",
        "Pokémon Go caused millions to wander the streets staring at their phones",
        "Game of Thrones premiered on HBO and became a global cultural event",
        "The Ice Bucket Challenge went viral and raised over $100 million for ALS research",
        "Bitcoin surpassed $10,000 in value for the first time",
    ],
    '2020s': [
        "A global pandemic caused lockdowns and border closures across the world",
        "ChatGPT launched and reached one million users in just five days",
        "The James Webb Space Telescope captured the deepest images of the early universe",
        "Taylor Swift's Eras Tour became the highest-grossing concert tour in history",
        "Generative AI began creating images, music, and video indistinguishable from human work",
    ],
};

const DG_ROUNDS = 10;
const DG_PTS    = [500, 300, 100];

let dg = { round: 0, score: 0, done: false, usedIndices: new Set(), current: null, clueIdx: 0 };

function dgReset() {
    dg = { round: 0, score: 0, done: false, usedIndices: new Set(), current: null, clueIdx: 0 };
}

function dgPickDecade() {
    const avail = DG_DECADES.map((_, i) => i).filter(i => !dg.usedIndices.has(i));
    const pool  = avail.length > 0 ? avail : DG_DECADES.map((_, i) => i);
    const idx   = pool[Math.floor(Math.random() * pool.length)];
    dg.usedIndices.add(idx);
    return DG_DECADES[idx];
}

function dgPickOptions(correct) {
    const wrong = DG_DECADES.filter(d => d !== correct)
        .sort(() => Math.random() - 0.5).slice(0, 3);
    return [...wrong, correct].sort(() => Math.random() - 0.5);
}

function dgUpdateClue() {
    const clues  = DG_CLUES[dg.current];
    const maxIdx = Math.min(DG_PTS.length - 1, clues.length - 1);

    document.getElementById('dg-clue').textContent     = clues[dg.clueIdx];
    document.getElementById('dg-clue-num').textContent = `Clue ${dg.clueIdx + 1}`;
    document.getElementById('dg-pts').textContent      = DG_PTS[dg.clueIdx] + ' pts';

    document.getElementById('dg-hint-btn').classList.toggle('hidden', dg.clueIdx >= maxIdx || dg.done);
}

function dgRenderOptions() {
    const optEl = document.getElementById('dg-options');
    optEl.innerHTML = '';
    dgPickOptions(dg.current).forEach(decade => {
        const btn = document.createElement('button');
        btn.className   = 'dg-option-btn';
        btn.textContent = decade;
        btn.addEventListener('click', () => dgAnswer(decade));
        optEl.appendChild(btn);
    });
}

function dgStartRound() {
    dg.round++;
    dg.done    = false;
    dg.clueIdx = 0;
    dg.current = dgPickDecade();

    document.getElementById('dg-round').textContent    = dg.round;
    document.getElementById('dg-score').textContent    = dg.score.toLocaleString();
    document.getElementById('dg-feedback').textContent = '';
    document.getElementById('dg-feedback').className   = 'dg-feedback';
    document.getElementById('dg-next-btn').classList.add('hidden');

    dgUpdateClue();
    dgRenderOptions();
}

function dgRevealHint() {
    if (dg.done) return;
    const clues  = DG_CLUES[dg.current];
    const maxIdx = Math.min(DG_PTS.length - 1, clues.length - 1);
    if (dg.clueIdx < maxIdx) {
        dg.clueIdx++;
        dgUpdateClue();
    }
}

function dgAnswer(chosen) {
    if (dg.done) return;
    dg.done = true;

    const correct    = chosen === dg.current;
    const feedbackEl = document.getElementById('dg-feedback');

    document.getElementById('dg-hint-btn').classList.add('hidden');

    document.querySelectorAll('.dg-option-btn').forEach(btn => {
        btn.disabled = true;
        if (btn.textContent === dg.current) btn.classList.add('dg-option--correct');
        else if (btn.textContent === chosen && !correct) btn.classList.add('dg-option--wrong');
    });

    if (correct) {
        const pts = DG_PTS[dg.clueIdx];
        dg.score += pts;
        document.getElementById('dg-score').textContent = dg.score.toLocaleString();
        feedbackEl.textContent = `Correct! +${pts}`;
        feedbackEl.className   = 'dg-feedback dg-feedback--correct';
    } else {
        feedbackEl.textContent = `It was the ${dg.current}`;
        feedbackEl.className   = 'dg-feedback dg-feedback--wrong';
    }

    const nextBtn = document.getElementById('dg-next-btn');
    nextBtn.textContent = dg.round >= DG_ROUNDS ? 'SEE RESULTS' : 'NEXT →';
    nextBtn.classList.remove('hidden');
}

function dgShowFinal() {
    document.getElementById('dg-game').classList.add('hidden');
    document.getElementById('dg-final').classList.remove('hidden');
    const el = document.getElementById('dg-final-score');
    el.textContent = '0';
    animateCounter(el, dg.score, 1200);
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('decade-btn').addEventListener('click', () => {
        dgReset();
        showScreen('decade-screen');
        document.getElementById('dg-game').classList.remove('hidden');
        document.getElementById('dg-final').classList.add('hidden');
        dgStartRound();
    });

    document.getElementById('dg-back-btn').addEventListener('click', () => showScreen('hub-screen'));
    document.getElementById('dg-hint-btn').addEventListener('click', dgRevealHint);

    document.getElementById('dg-next-btn').addEventListener('click', () => {
        if (dg.round >= DG_ROUNDS) dgShowFinal();
        else dgStartRound();
    });

    document.getElementById('dg-play-again-btn').addEventListener('click', () => {
        dgReset();
        document.getElementById('dg-game').classList.remove('hidden');
        document.getElementById('dg-final').classList.add('hidden');
        dgStartRound();
    });

    document.getElementById('dg-hub-btn').addEventListener('click', () => showScreen('hub-screen'));
});
