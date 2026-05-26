const LANG_DATA = [
    {
        name: 'Spanish',
        phrases: [
            '¿Dónde está la estación de tren?',
            'Quisiera un café con leche, por favor.',
            'Hace mucho calor hoy, ¿verdad?',
            'Me llamo Carlos. ¿Y tú, cómo te llamas?',
            'El mercado está a dos calles de aquí.',
            'La comida estaba deliciosa, muchas gracias.',
            'Necesito llamar a un médico urgentemente.',
            'Feliz cumpleaños, que tengas un día maravilloso.',
        ]
    },
    {
        name: 'French',
        phrases: [
            "Où se trouve la gare, s'il vous plaît?",
            "Je voudrais un café au lait, s'il vous plaît.",
            "Il fait très chaud aujourd'hui, n'est-ce pas?",
            "Je m'appelle Marie. Et vous, comment vous appelez-vous?",
            "Le marché est à deux rues d'ici.",
            "La nourriture était délicieuse, merci beaucoup.",
            "J'ai besoin d'un médecin d'urgence, s'il vous plaît.",
            "Joyeux anniversaire, passez une merveilleuse journée!",
        ]
    },
    {
        name: 'German',
        phrases: [
            'Wo ist der Bahnhof, bitte?',
            'Ich hätte gerne einen Kaffee mit Milch.',
            'Es ist heute sehr warm, oder?',
            'Mein Name ist Klaus. Wie heißen Sie?',
            'Der Markt ist zwei Straßen von hier entfernt.',
            'Das Essen war köstlich, vielen Dank.',
            'Ich brauche dringend einen Arzt, bitte.',
            'Herzlichen Glückwunsch zum Geburtstag, alles Gute!',
        ]
    },
    {
        name: 'Italian',
        phrases: [
            "Dov'è la stazione ferroviaria?",
            'Vorrei un caffè latte, per favore.',
            'Oggi fa molto caldo, vero?',
            'Mi chiamo Marco. Come si chiama lei?',
            'Il mercato è a due strade da qui.',
            'Il cibo era delizioso, grazie mille.',
            'Ho bisogno urgente di un medico, per favore.',
            'Buon compleanno, che tu possa avere una giornata meravigliosa!',
        ]
    },
    {
        name: 'Portuguese',
        phrases: [
            'Onde fica a estação de trem?',
            'Gostaria de um café com leite, por favor.',
            'Está muito calor hoje, não está?',
            'O meu nome é Ana. E você, como se chama?',
            'O mercado fica a duas ruas daqui.',
            'A comida estava deliciosa, muito obrigado.',
            'Preciso urgentemente de um médico, por favor.',
            'Feliz aniversário, desejo que tenha um dia maravilhoso!',
        ]
    },
    {
        name: 'Russian',
        phrases: [
            'Где находится железнодорожная станция?',
            'Я хотел бы кофе с молоком, пожалуйста.',
            'Сегодня очень жарко, не правда ли?',
            'Меня зовут Иван. Как вас зовут?',
            'Рынок находится в двух улицах отсюда.',
            'Еда была восхитительной, большое спасибо.',
            'Мне срочно нужен врач, пожалуйста.',
            'С днём рождения, желаю вам прекрасного дня!',
        ]
    },
    {
        name: 'Japanese',
        phrases: [
            '駅はどこですか？',
            'ミルクコーヒーをください。',
            '今日はとても暑いですね。',
            '私の名前は太郎です。お名前は？',
            '市場はここから二つ目の通りです。',
            '料理がとても美味しかったです、ありがとうございます。',
            '急いで医者が必要です、お願いします。',
            'お誕生日おめでとうございます、素晴らしい一日をお過ごしください。',
        ]
    },
    {
        name: 'Mandarin',
        phrases: [
            '火车站在哪里？',
            '我想要一杯拿铁咖啡，谢谢。',
            '今天很热，对吗？',
            '我叫小明。你叫什么名字？',
            '市场离这里两条街。',
            '食物非常美味，非常感谢。',
            '我紧急需要一位医生，请帮帮我。',
            '生日快乐，祝你度过美好的一天！',
        ]
    },
    {
        name: 'Arabic',
        phrases: [
            'أين محطة القطار؟',
            'أريد قهوة بالحليب من فضلك.',
            'الجو حار جداً اليوم، أليس كذلك؟',
            'اسمي أحمد. ما اسمك؟',
            'السوق على بُعد شارعين من هنا.',
            'كان الطعام لذيذاً جداً، شكراً جزيلاً.',
            'أحتاج طبيباً بشكل عاجل، من فضلك.',
            'عيد ميلاد سعيد، أتمنى لك يوماً رائعاً!',
        ]
    },
    {
        name: 'Hindi',
        phrases: [
            'रेलवे स्टेशन कहाँ है?',
            'मुझे दूध के साथ एक कॉफी चाहिए, कृपया।',
            'आज बहुत गर्मी है, है ना?',
            'मेरा नाम राज है। आपका नाम क्या है?',
            'बाज़ार यहाँ से दो सड़कें दूर है।',
            'खाना बहुत स्वादिष्ट था, बहुत-बहुत शुक्रिया।',
            'मुझे तुरंत एक डॉक्टर की जरूरत है, कृपया।',
            'जन्मदिन मुबारक हो, आपका दिन शानदार हो!',
        ]
    },
    {
        name: 'Korean',
        phrases: [
            '기차역이 어디에 있나요?',
            '라떼 한 잔 주세요.',
            '오늘 날씨가 정말 덥네요, 그렇죠?',
            '제 이름은 김민준이에요. 이름이 어떻게 되세요?',
            '시장은 여기서 두 블록 거리에 있어요.',
            '음식이 정말 맛있었어요, 정말 감사합니다.',
            '의사가 급히 필요해요, 제발 도와주세요.',
            '생일 축하해요, 멋진 하루 보내세요!',
        ]
    },
    {
        name: 'Dutch',
        phrases: [
            'Waar is het treinstation?',
            'Ik wil graag een koffie met melk, alstublieft.',
            'Het is vandaag erg warm, toch?',
            'Mijn naam is Jan. Hoe heet u?',
            'De markt is twee straten van hier vandaan.',
            'Het eten was heerlijk, heel erg bedankt.',
            'Ik heb dringend een dokter nodig, alstublieft.',
            'Hartelijk gefeliciteerd met je verjaardag, geniet van je dag!',
        ]
    },
    {
        name: 'Swedish',
        phrases: [
            'Var är tågstationen?',
            'Jag skulle vilja ha en kaffe med mjölk, tack.',
            'Det är mycket varmt idag, eller hur?',
            'Jag heter Erik. Vad heter du?',
            'Marknaden är två gator härifrån.',
            'Maten var utsökt, tack så mycket.',
            'Jag behöver akut en läkare, snälla hjälp mig.',
            'Grattis på födelsedagen, hoppas du får en underbar dag!',
        ]
    },
    {
        name: 'Polish',
        phrases: [
            'Gdzie jest dworzec kolejowy?',
            'Poproszę kawę z mlekiem.',
            'Dzisiaj jest bardzo gorąco, prawda?',
            'Nazywam się Piotr. Jak masz na imię?',
            'Rynek jest dwie ulice stąd.',
            'Jedzenie było pyszne, bardzo dziękuję.',
            'Pilnie potrzebuję lekarza, proszę mi pomóc.',
            'Wszystkiego najlepszego z okazji urodzin, życzę wspaniałego dnia!',
        ]
    },
    {
        name: 'Turkish',
        phrases: [
            'Tren istasyonu nerede?',
            'Sütlü bir kahve istiyorum, lütfen.',
            'Bugün çok sıcak, değil mi?',
            'Benim adım Mehmet. Adınız ne?',
            'Pazar yeri iki sokak ötede.',
            'Yemek harikaydı, çok teşekkür ederim.',
            'Acil bir doktora ihtiyacım var, lütfen yardım edin.',
            'Doğum günün kutlu olsun, harika bir gün geçirmeni dilerim!',
        ]
    },
    {
        name: 'Greek',
        phrases: [
            'Πού είναι ο σιδηροδρομικός σταθμός;',
            'Θα ήθελα έναν καφέ με γάλα, παρακαλώ.',
            'Κάνει πολλή ζέστη σήμερα, έτσι δεν είναι;',
            'Με λένε Νίκο. Πώς σας λένε;',
            'Η αγορά βρίσκεται δύο δρόμους από εδώ.',
            'Το φαγητό ήταν υπέροχο, ευχαριστώ πολύ.',
            'Χρειάζομαι επειγόντως γιατρό, παρακαλώ βοηθήστε με.',
            'Χρόνια πολλά για τα γενέθλιά σου, να έχεις μια υπέροχη μέρα!',
        ]
    },
    {
        name: 'Hebrew',
        phrases: [
            'איפה תחנת הרכבת?',
            'אני רוצה קפה עם חלב, בבקשה.',
            'חם מאוד היום, לא כך?',
            'קוראים לי דוד. איך קוראים לך?',
            'השוק נמצא שתי רחובות מכאן.',
            'האוכל היה מצוין, תודה רבה לך.',
            'אני צריך רופא בדחיפות, בבקשה עזרו לי.',
            'יום הולדת שמח, אני מאחל לך יום נפלא!',
        ]
    },
    {
        name: 'Thai',
        phrases: [
            'สถานีรถไฟอยู่ที่ไหน?',
            'ขอกาแฟใส่นมครับ',
            'วันนี้ร้อนมากใช่ไหม?',
            'ผมชื่อสมชาย แล้วคุณชื่ออะไร?',
            'ตลาดอยู่ห่างจากที่นี่สองถนน',
            'อาหารอร่อยมาก ขอบคุณมากครับ',
            'ต้องการแพทย์อย่างเร่งด่วน กรุณาช่วยด้วย',
            'สุขสันต์วันเกิด ขอให้มีวันที่ดีนะครับ!',
        ]
    },
    {
        name: 'Vietnamese',
        phrases: [
            'Ga tàu hỏa ở đâu?',
            'Cho tôi một ly cà phê sữa, xin cảm ơn.',
            'Hôm nay trời nóng quá, phải không?',
            'Tôi tên là Minh. Bạn tên là gì?',
            'Chợ ở cách đây hai dãy phố.',
            'Đồ ăn rất ngon, cảm ơn bạn rất nhiều.',
            'Tôi cần bác sĩ gấp, xin hãy giúp tôi.',
            'Chúc mừng sinh nhật, chúc bạn có một ngày tuyệt vời!',
        ]
    },
    {
        name: 'Indonesian',
        phrases: [
            'Di mana stasiun kereta api?',
            'Saya mau kopi susu, tolong.',
            'Hari ini sangat panas, bukan?',
            'Nama saya Budi. Nama Anda siapa?',
            'Pasar berada dua jalan dari sini.',
            'Makanannya sangat enak, terima kasih banyak.',
            'Saya butuh dokter segera, tolong bantu saya.',
            'Selamat ulang tahun, semoga hari mu menyenangkan!',
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
    let history;
    try { history = new Set(JSON.parse(localStorage.getItem('lg-hist') || '[]')); } catch { history = new Set(); }
    if (LANG_DATA.length - history.size < 4) history = new Set();
    lg = { round: 0, score: 0, done: false, usedIndices: history, current: null, options: [] };
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
    try {
        const prev = JSON.parse(localStorage.getItem('lg-hist') || '[]');
        const next = [...new Set([...prev, ...lg.usedIndices])].slice(-12);
        localStorage.setItem('lg-hist', JSON.stringify(next));
    } catch {}
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
