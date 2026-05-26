const HOL_DATA = [
    { name:'Afghanistan',           code:'af', pop:41.1,   area:652.9  },
    { name:'Albania',               code:'al', pop:2.8,    area:28.7   },
    { name:'Algeria',               code:'dz', pop:45.3,   area:2381.7 },
    { name:'Argentina',             code:'ar', pop:46.0,   area:2780.4 },
    { name:'Armenia',               code:'am', pop:3.0,    area:29.7   },
    { name:'Australia',             code:'au', pop:26.5,   area:7741.2 },
    { name:'Austria',               code:'at', pop:9.1,    area:83.9   },
    { name:'Azerbaijan',            code:'az', pop:10.3,   area:86.6   },
    { name:'Bahrain',               code:'bh', pop:1.8,    area:0.8    },
    { name:'Bangladesh',            code:'bd', pop:172.0,  area:147.6  },
    { name:'Belgium',               code:'be', pop:11.6,   area:30.5   },
    { name:'Bolivia',               code:'bo', pop:12.3,   area:1098.6 },
    { name:'Bosnia and Herzegovina',code:'ba', pop:3.2,    area:51.2   },
    { name:'Brazil',                code:'br', pop:215.3,  area:8515.8 },
    { name:'Bulgaria',              code:'bg', pop:6.5,    area:110.9  },
    { name:'Cambodia',              code:'kh', pop:17.2,   area:181.0  },
    { name:'Canada',                code:'ca', pop:38.9,   area:9984.7 },
    { name:'Chile',                 code:'cl', pop:19.5,   area:756.7  },
    { name:'China',                 code:'cn', pop:1412.0, area:9596.9 },
    { name:'Colombia',              code:'co', pop:51.9,   area:1141.7 },
    { name:'Croatia',               code:'hr', pop:4.0,    area:56.6   },
    { name:'Cuba',                  code:'cu', pop:11.1,   area:109.9  },
    { name:'Czech Republic',        code:'cz', pop:10.9,   area:78.9   },
    { name:'Denmark',               code:'dk', pop:5.9,    area:43.1   },
    { name:'Ecuador',               code:'ec', pop:18.0,   area:283.6  },
    { name:'Egypt',                 code:'eg', pop:105.0,  area:1001.4 },
    { name:'Estonia',               code:'ee', pop:1.4,    area:45.2   },
    { name:'Ethiopia',              code:'et', pop:128.0,  area:1104.3 },
    { name:'Finland',               code:'fi', pop:5.6,    area:338.4  },
    { name:'France',                code:'fr', pop:67.8,   area:551.7  },
    { name:'Georgia',               code:'ge', pop:3.7,    area:69.7   },
    { name:'Germany',               code:'de', pop:84.4,   area:357.1  },
    { name:'Ghana',                 code:'gh', pop:33.5,   area:238.5  },
    { name:'Greece',                code:'gr', pop:10.4,   area:131.9  },
    { name:'Hungary',               code:'hu', pop:10.0,   area:93.0   },
    { name:'Iceland',               code:'is', pop:0.4,    area:103.0  },
    { name:'India',                 code:'in', pop:1428.0, area:3287.3 },
    { name:'Indonesia',             code:'id', pop:277.5,  area:1904.6 },
    { name:'Iran',                  code:'ir', pop:87.9,   area:1648.2 },
    { name:'Iraq',                  code:'iq', pop:42.2,   area:438.3  },
    { name:'Ireland',               code:'ie', pop:5.1,    area:70.3   },
    { name:'Israel',                code:'il', pop:9.4,    area:21.9   },
    { name:'Italy',                 code:'it', pop:60.3,   area:301.3  },
    { name:'Jamaica',               code:'jm', pop:2.8,    area:11.0   },
    { name:'Japan',                 code:'jp', pop:125.7,  area:377.9  },
    { name:'Jordan',                code:'jo', pop:10.2,   area:89.3   },
    { name:'Kazakhstan',            code:'kz', pop:19.3,   area:2724.9 },
    { name:'Kenya',                 code:'ke', pop:56.4,   area:580.4  },
    { name:'Kuwait',                code:'kw', pop:4.3,    area:17.8   },
    { name:'Laos',                  code:'la', pop:7.5,    area:236.8  },
    { name:'Latvia',                code:'lv', pop:1.8,    area:64.6   },
    { name:'Lebanon',               code:'lb', pop:5.3,    area:10.5   },
    { name:'Libya',                 code:'ly', pop:7.1,    area:1759.5 },
    { name:'Lithuania',             code:'lt', pop:2.9,    area:65.3   },
    { name:'Malaysia',              code:'my', pop:33.6,   area:329.8  },
    { name:'Mexico',                code:'mx', pop:130.0,  area:1964.4 },
    { name:'Moldova',               code:'md', pop:3.4,    area:33.8   },
    { name:'Mongolia',              code:'mn', pop:3.4,    area:1564.1 },
    { name:'Morocco',               code:'ma', pop:37.5,   area:446.6  },
    { name:'Mozambique',            code:'mz', pop:33.1,   area:801.6  },
    { name:'Myanmar',               code:'mm', pop:54.4,   area:676.6  },
    { name:'Nepal',                 code:'np', pop:30.0,   area:147.2  },
    { name:'Netherlands',           code:'nl', pop:17.9,   area:41.5   },
    { name:'New Zealand',           code:'nz', pop:5.1,    area:268.0  },
    { name:'Nigeria',               code:'ng', pop:219.0,  area:923.8  },
    { name:'North Korea',           code:'kp', pop:26.0,   area:120.5  },
    { name:'Norway',                code:'no', pop:5.5,    area:385.2  },
    { name:'Oman',                  code:'om', pop:4.6,    area:309.5  },
    { name:'Pakistan',              code:'pk', pop:231.4,  area:881.9  },
    { name:'Panama',                code:'pa', pop:4.4,    area:75.4   },
    { name:'Paraguay',              code:'py', pop:7.4,    area:406.8  },
    { name:'Peru',                  code:'pe', pop:33.4,   area:1285.2 },
    { name:'Philippines',           code:'ph', pop:115.6,  area:300.0  },
    { name:'Poland',                code:'pl', pop:38.5,   area:312.7  },
    { name:'Portugal',              code:'pt', pop:10.3,   area:92.2   },
    { name:'Qatar',                 code:'qa', pop:2.9,    area:11.6   },
    { name:'Romania',               code:'ro', pop:19.0,   area:238.4  },
    { name:'Russia',                code:'ru', pop:145.1,  area:17098.2},
    { name:'Rwanda',                code:'rw', pop:14.1,   area:26.3   },
    { name:'Saudi Arabia',          code:'sa', pop:36.4,   area:2149.7 },
    { name:'Senegal',               code:'sn', pop:17.7,   area:196.7  },
    { name:'Serbia',                code:'rs', pop:7.1,    area:77.5   },
    { name:'Singapore',             code:'sg', pop:5.9,    area:0.7    },
    { name:'Slovakia',              code:'sk', pop:5.4,    area:49.0   },
    { name:'Slovenia',              code:'si', pop:2.1,    area:20.3   },
    { name:'Somalia',               code:'so', pop:18.1,   area:637.7  },
    { name:'South Africa',          code:'za', pop:60.4,   area:1219.1 },
    { name:'South Korea',           code:'kr', pop:51.7,   area:100.4  },
    { name:'Spain',                 code:'es', pop:47.4,   area:505.9  },
    { name:'Sri Lanka',             code:'lk', pop:22.0,   area:65.6   },
    { name:'Sudan',                 code:'sd', pop:46.0,   area:1886.1 },
    { name:'Sweden',                code:'se', pop:10.5,   area:450.3  },
    { name:'Switzerland',           code:'ch', pop:8.7,    area:41.3   },
    { name:'Syria',                 code:'sy', pop:21.3,   area:185.2  },
    { name:'Taiwan',                code:'tw', pop:23.6,   area:36.2   },
    { name:'Tanzania',              code:'tz', pop:63.6,   area:945.1  },
    { name:'Thailand',              code:'th', pop:71.7,   area:513.1  },
    { name:'Tunisia',               code:'tn', pop:12.0,   area:163.6  },
    { name:'Turkey',                code:'tr', pop:85.3,   area:783.6  },
    { name:'Uganda',                code:'ug', pop:48.6,   area:241.0  },
    { name:'Ukraine',               code:'ua', pop:43.5,   area:603.6  },
    { name:'United Arab Emirates',  code:'ae', pop:9.9,    area:83.6   },
    { name:'United Kingdom',        code:'gb', pop:67.3,   area:242.5  },
    { name:'United States',         code:'us', pop:335.9,  area:9833.5 },
    { name:'Uruguay',               code:'uy', pop:3.5,    area:176.2  },
    { name:'Uzbekistan',            code:'uz', pop:35.5,   area:448.0  },
    { name:'Venezuela',             code:'ve', pop:28.8,   area:916.4  },
    { name:'Vietnam',               code:'vn', pop:97.4,   area:331.0  },
    { name:'Yemen',                 code:'ye', pop:34.4,   area:527.9  },
    { name:'Zimbabwe',              code:'zw', pop:15.1,   area:390.8  },
];

const HOL_CATS = [
    {
        key: 'pop',
        question: 'Which country has MORE people?',
        format: m => m >= 1000 ? (m/1000).toFixed(1)+' billion'
                   : m >= 1    ? Math.round(m)+'M'
                   : Math.round(m*1000)+'K',
    },
    {
        key: 'area',
        question: 'Which country covers MORE land area?',
        format: k => {
            const km = k * 1000;
            if (km >= 1e6) return (km/1e6).toFixed(1)+'M km²';
            if (km >= 1e4) return Math.round(km/1000)+'k km²';
            return Math.round(km).toLocaleString()+' km²';
        },
    },
];

const HOL_ROUNDS = 10;

let hol = {
    round: 0, score: 0, used: new Set(),
    a: null, b: null, cat: null, done: false,
};

function holReset() {
    hol = { round: 0, score: 0, used: new Set(), a: null, b: null, cat: null, done: false };
}

function holPick2() {
    const pool = HOL_DATA.filter((_, i) => !hol.used.has(i));
    const src   = pool.length >= 2 ? pool : HOL_DATA;
    const pick  = () => src[Math.floor(Math.random() * src.length)];
    let a = pick(), b = pick();
    while (b === a) b = pick();
    HOL_DATA.forEach((c, i) => { if (c === a || c === b) hol.used.add(i); });
    return [a, b];
}

function holStartRound() {
    hol.round++;
    hol.done = false;
    [hol.a, hol.b] = holPick2();
    hol.cat = HOL_CATS[Math.floor(Math.random() * HOL_CATS.length)];

    document.getElementById('hol-round').textContent   = hol.round;
    document.getElementById('hol-score').textContent   = hol.score.toLocaleString();
    document.getElementById('hol-question').textContent = hol.cat.question;

    ['a','b'].forEach(side => {
        const c = hol[side];
        document.getElementById(`hol-flag-${side}`).src  = `https://flagcdn.com/w320/${c.code}.png`;
        document.getElementById(`hol-name-${side}`).textContent = c.name;
        const valEl = document.getElementById(`hol-val-${side}`);
        valEl.textContent = '';
        valEl.className   = 'hol-val';
        document.getElementById(`hol-card-${side}`).disabled = false;
        document.getElementById(`hol-card-${side}`).className = 'hol-card';
    });

    document.getElementById('hol-next-btn').classList.add('hidden');
}

function holAnswer(choice) {
    if (hol.done) return;
    hol.done = true;

    const winner = hol.a[hol.cat.key] >= hol.b[hol.cat.key] ? 'a' : 'b';
    const correct = choice === winner;

    if (correct) {
        hol.score += 500;
        document.getElementById('hol-score').textContent = hol.score.toLocaleString();
    }

    ['a','b'].forEach(side => {
        const c    = hol[side];
        const valEl = document.getElementById(`hol-val-${side}`);
        valEl.textContent = hol.cat.format(c[hol.cat.key]);
        valEl.className   = 'hol-val';

        const cardEl = document.getElementById(`hol-card-${side}`);
        cardEl.disabled = true;
        if (side === winner) cardEl.classList.add('hol-card--win');
        else                 cardEl.classList.add('hol-card--lose');
    });

    const nextBtn = document.getElementById('hol-next-btn');
    const isLast  = hol.round >= HOL_ROUNDS;
    nextBtn.textContent = isLast ? 'SEE RESULTS' : 'NEXT →';
    nextBtn.classList.remove('hidden');
}

function holShowFinal() {
    document.getElementById('hol-game').classList.add('hidden');
    document.getElementById('hol-final').classList.remove('hidden');
    const el = document.getElementById('hol-final-score');
    el.textContent = '0';
    animateCounter(el, hol.score, 1200);
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('hol-btn').addEventListener('click', () => {
        holReset();
        document.getElementById('hol-game').classList.remove('hidden');
        document.getElementById('hol-final').classList.add('hidden');
        showScreen('hol-screen');
        holStartRound();
    });
    document.getElementById('hol-back-btn').addEventListener('click', () => showScreen('hub-screen'));
    document.getElementById('hol-card-a').addEventListener('click', () => holAnswer('a'));
    document.getElementById('hol-card-b').addEventListener('click', () => holAnswer('b'));
    document.getElementById('hol-next-btn').addEventListener('click', () => {
        if (hol.round >= HOL_ROUNDS) holShowFinal();
        else holStartRound();
    });
    document.getElementById('hol-play-again-btn').addEventListener('click', () => {
        holReset();
        document.getElementById('hol-game').classList.remove('hidden');
        document.getElementById('hol-final').classList.add('hidden');
        holStartRound();
    });
    document.getElementById('hol-hub-btn').addEventListener('click', () => showScreen('hub-screen'));
});
