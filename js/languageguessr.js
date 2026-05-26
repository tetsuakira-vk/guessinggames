const LANG_DATA = [
    {
        name: 'Spanish',
        phrases: [
            '¿Dónde está la estación de tren?',
            'Quisiera un café con leche, por favor.',
            'Hace mucho calor hoy, ¿verdad?',
            'Me llamo Carlos. ¿Y tú, cómo te llamas?',
        ]
    },
    {
        name: 'French',
        phrases: [
            "Où se trouve la gare, s'il vous plaît?",
            "Je voudrais un café au lait, s'il vous plaît.",
            "Il fait très chaud aujourd'hui, n'est-ce pas?",
            "Je m'appelle Marie. Et vous, comment vous appelez-vous?",
        ]
    },
    {
        name: 'German',
        phrases: [
            'Wo ist der Bahnhof, bitte?',
            'Ich hätte gerne einen Kaffee mit Milch.',
            'Es ist heute sehr warm, oder?',
            'Mein Name ist Klaus. Wie heißen Sie?',
        ]
    },
    {
        name: 'Italian',
        phrases: [
            "Dov'è la stazione ferroviaria?",
            'Vorrei un caffè latte, per favore.',
            'Oggi fa molto caldo, vero?',
            'Mi chiamo Marco. Come si chiama lei?',
        ]
    },
    {
        name: 'Portuguese',
        phrases: [
            'Onde fica a estação de trem?',
            'Gostaria de um café com leite, por favor.',
            'Está muito calor hoje, não está?',
            'O meu nome é Ana. E você, como se chama?',
        ]
    },
    {
        name: 'Russian',
        phrases: [
            'Где находится железнодорожная станция?',
            'Я хотел бы кофе с молоком, пожалуйста.',
            'Сегодня очень жарко, не правда ли?',
            'Меня зовут Иван. Как вас зовут?',
        ]
    },
    {
        name: 'Japanese',
        phrases: [
            '駅はどこですか？',
            'ミルクコーヒーをください。',
            '今日はとても暑いですね。',
            '私の名前は太郎です。お名前は？',
        ]
    },
    {
        name: 'Mandarin',
        phrases: [
            '火车站在哪里？',
            '我想要一杯拿铁咖啡，谢谢。',
            '今天很热，对吗？',
            '我叫小明。你叫什么名字？',
        ]
    },
    {
        name: 'Arabic',
        phrases: [
            'أين محطة القطار؟',
            'أريد قهوة بالحليب من فضلك.',
            'الجو حار جداً اليوم، أليس كذلك؟',
            'اسمي أحمد. ما اسمك؟',
        ]
    },
    {
        name: 'Hindi',
        phrases: [
            'रेलवे स्टेशन कहाँ है?',
            'मुझे दूध के साथ एक कॉफी चाहिए, कृपया।',
            'आज बहुत गर्मी है, है ना?',
            'मेरा नाम राज है। आपका नाम क्या है?',
        ]
    },
    {
        name: 'Korean',
        phrases: [
            '기차역이 어디에 있나요?',
            '라떼 한 잔 주세요.',
            '오늘 날씨가 정말 덥네요, 그렇죠?',
            '제 이름은 김민준이에요. 이름이 어떻게 되세요?',
        ]
    },
    {
        name: 'Dutch',
        phrases: [
            'Waar is het treinstation?',
            'Ik wil graag een koffie met melk, alstublieft.',
            'Het is vandaag erg warm, toch?',
            'Mijn naam is Jan. Hoe heet u?',
        ]
    },
    {
        name: 'Swedish',
        phrases: [
            'Var är tågstationen?',
            'Jag skulle vilja ha en kaffe med mjölk, tack.',
            'Det är mycket varmt idag, eller hur?',
            'Jag heter Erik. Vad heter du?',
        ]
    },
    {
        name: 'Polish',
        phrases: [
            'Gdzie jest dworzec kolejowy?',
            'Poproszę kawę z mlekiem.',
            'Dzisiaj jest bardzo gorąco, prawda?',
            'Nazywam się Piotr. Jak masz na imię?',
        ]
    },
    {
        name: 'Turkish',
        phrases: [
            'Tren istasyonu nerede?',
            'Sütlü bir kahve istiyorum, lütfen.',
            'Bugün çok sıcak, değil mi?',
            'Benim adım Mehmet. Adınız ne?',
        ]
    },
    {
        name: 'Greek',
        phrases: [
            'Πού είναι ο σιδηροδρομικός σταθμός;',
            'Θα ήθελα έναν καφέ με γάλα, παρακαλώ.',
            'Κάνει πολλή ζέστη σήμερα, έτσι δεν είναι;',
            'Με λένε Νίκο. Πώς σας λένε;',
        ]
    },
    {
        name: 'Hebrew',
        phrases: [
            'איפה תחנת הרכבת?',
            'אני רוצה קפה עם חלב, בבקשה.',
            'חם מאוד היום, לא כך?',
            'קוראים לי דוד. איך קוראים לך?',
        ]
    },
    {
        name: 'Thai',
        phrases: [
            'สถานีรถไฟอยู่ที่ไหน?',
            'ขอกาแฟใส่นมครับ',
            'วันนี้ร้อนมากใช่ไหม?',
            'ผมชื่อสมชาย แล้วคุณชื่ออะไร?',
        ]
    },
    {
        name: 'Vietnamese',
        phrases: [
            'Ga tàu hỏa ở đâu?',
            'Cho tôi một ly cà phê sữa, xin cảm ơn.',
            'Hôm nay trời nóng quá, phải không?',
            'Tôi tên là Minh. Bạn tên là gì?',
        ]
    },
    {
        name: 'Indonesian',
        phrases: [
            'Di mana stasiun kereta api?',
            'Saya mau kopi susu, tolong.',
            'Hari ini sangat panas, bukan?',
            'Nama saya Budi. Nama Anda siapa?',
        ]
    },
];

const LG_ROUNDS = 10;
const LG_PTS    = 500;

let lg = {
    round: 0, score: 0, done: false,
    usedIndices: new Set(),
    current: null,
    options: [],
};

function lgReset() {
    lg = { round: 0, score: 0, done: false, usedIndices: new Set(), current: null, options: [] };
}

function lgPickIdx() {
    const available = LANG_DATA.map((_, i) => i).filter(i => !lg.usedIndices.has(i));
    const pool = available.length > 0 ? available : LANG_DATA.map((_, i) => i);
    const idx = pool[Math.floor(Math.random() * pool.length)];
    lg.usedIndices.add(idx);
    return idx;
}

function lgBuildOptions(correctIdx) {
    const others = LANG_DATA.map((_, i) => i).filter(i => i !== correctIdx);
    const wrong  = others.sort(() => Math.random() - 0.5).slice(0, 3);
    return [...wrong, correctIdx].sort(() => Math.random() - 0.5).map(i => LANG_DATA[i].name);
}

function lgStartRound() {
    lg.round++;
    lg.done = false;

    const idx  = lgPickIdx();
    const lang = LANG_DATA[idx];
    const phrase = lang.phrases[Math.floor(Math.random() * lang.phrases.length)];
    lg.current = { name: lang.name, phrase };
    lg.options = lgBuildOptions(idx);

    document.getElementById('lg-round').textContent  = lg.round;
    document.getElementById('lg-score').textContent  = lg.score.toLocaleString();
    document.getElementById('lg-phrase').textContent = phrase;

    const feedbackEl = document.getElementById('lg-feedback');
    feedbackEl.textContent = '';
    feedbackEl.className = 'lg-feedback';

    const optContainer = document.getElementById('lg-options');
    optContainer.innerHTML = '';
    lg.options.forEach(name => {
        const btn = document.createElement('button');
        btn.className = 'lg-option-btn';
        btn.textContent = name;
        btn.addEventListener('click', () => lgAnswer(name));
        optContainer.appendChild(btn);
    });

    document.getElementById('lg-next-btn').classList.add('hidden');
}

function lgAnswer(chosen) {
    if (lg.done) return;
    lg.done = true;

    const correct    = chosen === lg.current.name;
    const feedbackEl = document.getElementById('lg-feedback');

    document.querySelectorAll('.lg-option-btn').forEach(btn => {
        btn.disabled = true;
        if (btn.textContent === lg.current.name) {
            btn.classList.add('lg-option--correct');
        } else if (btn.textContent === chosen && !correct) {
            btn.classList.add('lg-option--wrong');
        }
    });

    if (correct) {
        lg.score += LG_PTS;
        document.getElementById('lg-score').textContent = lg.score.toLocaleString();
        feedbackEl.textContent = 'Correct!';
        feedbackEl.className   = 'lg-feedback lg-feedback--correct';
    } else {
        feedbackEl.textContent = `That was ${lg.current.name}`;
        feedbackEl.className   = 'lg-feedback lg-feedback--wrong';
    }

    const nextBtn = document.getElementById('lg-next-btn');
    nextBtn.textContent = lg.round >= LG_ROUNDS ? 'SEE RESULTS' : 'NEXT →';
    nextBtn.classList.remove('hidden');
}

function lgShowFinal() {
    document.getElementById('lg-game').classList.add('hidden');
    document.getElementById('lg-final').classList.remove('hidden');
    const el = document.getElementById('lg-final-score');
    el.textContent = '0';
    animateCounter(el, lg.score, 1200);
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('lang-btn').addEventListener('click', () => {
        lgReset();
        document.getElementById('lg-game').classList.remove('hidden');
        document.getElementById('lg-final').classList.add('hidden');
        showScreen('lang-screen');
        lgStartRound();
    });

    document.getElementById('lg-back-btn').addEventListener('click', () => showScreen('hub-screen'));

    document.getElementById('lg-next-btn').addEventListener('click', () => {
        if (lg.round >= LG_ROUNDS) lgShowFinal();
        else lgStartRound();
    });

    document.getElementById('lg-play-again-btn').addEventListener('click', () => {
        lgReset();
        document.getElementById('lg-game').classList.remove('hidden');
        document.getElementById('lg-final').classList.add('hidden');
        lgStartRound();
    });

    document.getElementById('lg-hub-btn').addEventListener('click', () => showScreen('hub-screen'));
});
