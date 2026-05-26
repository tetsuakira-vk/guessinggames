const DG_DECADES = ['1950s', '1960s', '1970s', '1980s', '1990s', '2000s', '2010s', '2020s'];

const DG_CLUES = {
    '1950s': [
        "Roger Bannister became the first person to run a mile in under 4 minutes",
        "Watson and Crick published their discovery of DNA's double helix structure",
        "The first commercial transatlantic jet passenger service began",
        "The Soviet Union launched Sputnik, the first artificial satellite into space",
        "The Korean War ended after three years of fighting on the peninsula",
        "Elvis Presley released 'Heartbreak Hotel' and became a global superstar",
        "Disneyland opened its doors to the public in California",
        "A wave of rock and roll transformed youth culture around the world",
    ],
    '1960s': [
        "The Cuban Missile Crisis brought the world to the brink of nuclear war",
        "Yuri Gagarin became the first human to travel into outer space",
        "The first James Bond film Dr. No launched the world's most iconic spy franchise",
        "The Berlin Wall was constructed, dividing East and West Germany",
        "Martin Luther King Jr. delivered his 'I Have a Dream' speech",
        "The Beatles appeared on The Ed Sullivan Show and sparked Beatlemania",
        "Woodstock drew half a million people to a farm in New York",
        "Neil Armstrong became the first human to walk on the Moon",
    ],
    '1970s': [
        "Concorde made its first commercial transatlantic passenger flight",
        "The world's first test-tube baby was born in England",
        "The Atari 2600 launched, bringing video games into millions of living rooms",
        "The Watergate scandal forced a US president to resign for the first time",
        "ABBA won Eurovision with 'Waterloo' and became a global pop sensation",
        "The first personal computers went on sale to the public",
        "Saturday Night Fever brought disco fever to mainstream audiences worldwide",
        "Star Wars opened in cinemas and became an instant cultural phenomenon",
    ],
    '1980s': [
        "The CD was launched, revolutionising how people bought and played music",
        "The Chernobyl nuclear reactor exploded, sending radiation across Europe",
        "Nintendo released its Entertainment System, reviving the video game industry",
        "The Space Shuttle Challenger disaster shocked the world live on television",
        "Pac-Man became a global gaming obsession in arcades everywhere",
        "The first mobile phones became commercially available to consumers",
        "Michael Jackson's 'Thriller' became the best-selling album of all time",
        "The Berlin Wall fell, reuniting East and West Germany",
    ],
    '1990s': [
        "Nelson Mandela was released from prison and became South Africa's president",
        "The Channel Tunnel opened, linking Britain and France for the first time",
        "Google was founded in a garage and began indexing the entire internet",
        "Dolly the sheep became the first mammal cloned from an adult cell",
        "The World Wide Web was opened to the public by Tim Berners-Lee",
        "Friends premiered on NBC and became one of the most-watched shows ever",
        "The Spice Girls dominated global pop charts and coined 'Girl Power'",
        "The Sony PlayStation launched and revolutionised home gaming",
    ],
    '2000s': [
        "The September 11 attacks in New York changed global politics and security forever",
        "Wikipedia launched, becoming the world's largest volunteer-written encyclopaedia",
        "Facebook was founded by Mark Zuckerberg in a Harvard dorm room",
        "YouTube launched, allowing anyone to upload and share videos online",
        "Apple released the iPod, transforming how people listen to music",
        "Twitter launched, introducing the world to the concept of the 'tweet'",
        "Steve Jobs unveiled the first iPhone, calling it 'an iPod, a phone, and the internet'",
        "Harry Potter and Lord of the Rings made blockbuster fantasy cinema mainstream",
    ],
    '2010s': [
        "The Arab Spring swept across the Middle East, toppling long-standing governments",
        "Same-sex marriage was legalised in the United States by a landmark Supreme Court ruling",
        "Instagram launched as a photo-sharing app and was bought by Facebook for $1 billion",
        "The Ice Bucket Challenge went viral and raised over $100 million for ALS research",
        "Game of Thrones premiered on HBO and became a global cultural event",
        "Pokémon Go caused millions to wander the streets staring at their phones",
        "Bitcoin surpassed $10,000 in value for the first time",
        "TikTok launched globally and became the most downloaded app in history",
    ],
    '2020s': [
        "The mRNA COVID vaccines were developed in record time and distributed globally",
        "Russia's invasion of Ukraine began the largest land war in Europe since 1945",
        "The FIFA World Cup was hosted in the Middle East for the very first time, in Qatar",
        "A global pandemic caused lockdowns and border closures across the world",
        "The James Webb Space Telescope captured the deepest images of the early universe",
        "ChatGPT launched and reached one million users in just five days",
        "Taylor Swift's Eras Tour became the highest-grossing concert tour in history",
        "Generative AI began creating images, music, and video indistinguishable from human work",
    ],
};

const DG_ROUNDS = 10;
const DG_PTS    = [500, 300, 100];

let dg = { round: 0, score: 0, done: false, usedIndices: new Set(), current: null, clueIdx: 0, clueOffset: 0 };

function dgReset() {
    dg = { round: 0, score: 0, done: false, usedIndices: new Set(), current: null, clueIdx: 0, clueOffset: 0 };
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
    const maxIdx = DG_PTS.length - 1;

    document.getElementById('dg-clue').textContent     = clues[dg.clueOffset + dg.clueIdx];
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
    const clues = DG_CLUES[dg.current];
    dg.clueOffset = Math.floor(Math.random() * (clues.length - DG_PTS.length + 1));

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
