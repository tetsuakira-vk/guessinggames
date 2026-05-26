const CONN_PUZZLES = [
    {
        groups: [
            { label: 'FOUR SEASONS',   color: 'yellow', words: ['SPRING',  'SUMMER',   'AUTUMN',    'WINTER']   },
            { label: 'GREEK LETTERS',  color: 'green',  words: ['ALPHA',   'BETA',     'GAMMA',     'DELTA']    },
            { label: 'PLANETS',        color: 'blue',   words: ['MARS',    'VENUS',    'SATURN',    'JUPITER']  },
            { label: '___BALL',        color: 'purple', words: ['FIRE',    'ODD',      'CANNON',    'BASKET']   },
        ]
    },
    {
        groups: [
            { label: 'PASTA TYPES',    color: 'yellow', words: ['PENNE',   'RIGATONI', 'FUSILLI',   'LINGUINE'] },
            { label: 'METALS',         color: 'green',  words: ['GOLD',    'SILVER',   'COPPER',    'BRONZE']   },
            { label: 'DANCES',         color: 'blue',   words: ['TANGO',   'WALTZ',    'SALSA',     'FOXTROT']  },
            { label: 'SHADES OF RED',  color: 'purple', words: ['CRIMSON', 'SCARLET',  'MAROON',    'CORAL']    },
        ]
    },
    {
        groups: [
            { label: 'OCEANS',         color: 'yellow', words: ['PACIFIC', 'ATLANTIC', 'INDIAN',    'ARCTIC']   },
            { label: 'DESERTS',        color: 'green',  words: ['SAHARA',  'GOBI',     'MOJAVE',    'ATACAMA']  },
            { label: 'MOUNTAIN RANGES',color: 'blue',   words: ['ALPS',    'ANDES',    'ROCKIES',   'URALS']    },
            { label: 'ISLANDS',        color: 'purple', words: ['CUBA',    'JAVA',     'CRETE',     'TASMANIA'] },
        ]
    },
    {
        groups: [
            { label: 'CARD SUITS',     color: 'yellow', words: ['HEARTS',  'DIAMONDS', 'CLUBS',     'SPADES']   },
            { label: 'OLYMPIC SPORTS', color: 'green',  words: ['ARCHERY', 'FENCING',  'ROWING',    'JUDO']     },
            { label: 'CHESS PIECES',   color: 'blue',   words: ['ROOK',    'BISHOP',   'KNIGHT',    'PAWN']     },
            { label: '___POOL',        color: 'purple', words: ['WHIRL',   'CAR',      'DEAD',      'ROCK']     },
        ]
    },
    {
        groups: [
            { label: 'SHAKESPEARE',    color: 'yellow', words: ['HAMLET',  'OTHELLO',  'MACBETH',   'TEMPEST']  },
            { label: 'FAMOUS ARTISTS', color: 'green',  words: ['PICASSO', 'MONET',    'WARHOL',    'REMBRANDT']},
            { label: 'COMPOSERS',      color: 'blue',   words: ['BACH',    'MOZART',   'HANDEL',    'VIVALDI']  },
            { label: '___ + KEY',      color: 'purple', words: ['MON',     'DON',      'TUR',       'HOC']      },
        ]
    },
    {
        groups: [
            { label: 'ELEMENTS',       color: 'yellow', words: ['OXYGEN',  'CARBON',   'HYDROGEN',  'NITROGEN'] },
            { label: 'CLOUD TYPES',    color: 'green',  words: ['CUMULUS', 'STRATUS',  'CIRRUS',    'NIMBUS']   },
            { label: 'TYPES OF ROCK',  color: 'blue',   words: ['GRANITE', 'MARBLE',   'OBSIDIAN',  'BASALT']   },
            { label: 'BEE___',         color: 'purple', words: ['HIVE',    'KEEPER',   'LINE',      'WAX']      },
        ]
    },
    {
        groups: [
            { label: 'MARVEL HEROES',  color: 'yellow', words: ['THOR',    'HULK',     'HAWKEYE',   'VISION']   },
            { label: 'MUSIC GENRES',   color: 'green',  words: ['JAZZ',    'BLUES',    'REGGAE',    'COUNTRY']  },
            { label: 'TV CLASSICS',    color: 'blue',   words: ['SEINFELD','FRIENDS',  'SUCCESSION','WIRE']     },
            { label: 'JAMES ___',      color: 'purple', words: ['BOND',    'BROWN',    'DEAN',      'MADISON']  },
        ]
    },
    {
        groups: [
            { label: 'PUNCTUATION',    color: 'yellow', words: ['COMMA',   'PERIOD',   'COLON',     'HYPHEN']   },
            { label: 'RARE LANGUAGES', color: 'green',  words: ['SWAHILI', 'TAGALOG',  'YORUBA',    'PUNJABI']  },
            { label: 'ANAGRAM OF A COUNTRY', color: 'blue', words: ['RAIN', 'ALSO',   'MOAN',      'REIGN']    },
            { label: '___SCRIPT',      color: 'purple', words: ['JAVA',    'TYPE',     'MANU',      'POST']     },
        ]
    },
];

const CONN_MAX_MISTAKES = 4;
const CONN_MAX_SCORE    = 1000;

let conn = {
    puzzle: null,
    shuffledWords: [],
    selected: new Set(),
    solved: [],
    mistakes: 0,
    done: false,
};

function connReset() {
    conn = { puzzle: null, shuffledWords: [], selected: new Set(), solved: [], mistakes: 0, done: false };
}

function connShuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function connPickPuzzle() {
    return CONN_PUZZLES[Math.floor(Math.random() * CONN_PUZZLES.length)];
}

function connBuildGrid() {
    const grid = document.getElementById('conn-grid');
    grid.innerHTML = '';
    conn.shuffledWords.forEach(word => {
        const tile = document.createElement('button');
        tile.className = 'conn-tile';
        tile.textContent = word;
        tile.dataset.word = word;
        tile.addEventListener('click', () => connToggle(word));
        grid.appendChild(tile);
    });
}

function connUpdateGrid() {
    document.querySelectorAll('.conn-tile').forEach(tile => {
        tile.classList.toggle('conn-tile--selected', conn.selected.has(tile.dataset.word));
    });
    document.getElementById('conn-submit-btn').disabled = conn.selected.size !== 4;
}

function connUpdateMistakes() {
    const el = document.getElementById('conn-mistakes');
    el.innerHTML = '';
    for (let i = 0; i < CONN_MAX_MISTAKES; i++) {
        const dot = document.createElement('span');
        dot.className = 'conn-mistake-dot' + (i < conn.mistakes ? ' conn-mistake-dot--used' : '');
        el.appendChild(dot);
    }
}

function connToggle(word) {
    if (conn.done) return;
    if (conn.selected.has(word)) {
        conn.selected.delete(word);
    } else if (conn.selected.size < 4) {
        conn.selected.add(word);
    }
    connUpdateGrid();
}

function connDoShuffle() {
    conn.shuffledWords = connShuffle(conn.shuffledWords);
    conn.selected.clear();
    connBuildGrid();
    connUpdateGrid();
}

function connSubmit() {
    if (conn.selected.size !== 4 || conn.done) return;

    const selectedArr  = [...conn.selected];
    const matchedGroup = conn.puzzle.groups.find(g => {
        if (conn.solved.includes(g)) return false;
        return g.words.every(w => selectedArr.includes(w)) && selectedArr.every(w => g.words.includes(w));
    });

    if (matchedGroup) {
        conn.solved.push(matchedGroup);
        const solvedSet = new Set(matchedGroup.words);

        conn.shuffledWords = conn.shuffledWords.filter(w => !solvedSet.has(w));
        conn.selected.clear();

        document.querySelectorAll('.conn-tile').forEach(t => {
            if (solvedSet.has(t.dataset.word)) t.classList.add('conn-tile--solving');
        });

        setTimeout(() => {
            const banner = document.createElement('div');
            banner.className = `conn-banner conn-banner--${matchedGroup.color}`;
            banner.innerHTML = `<strong>${matchedGroup.label}</strong><span>${matchedGroup.words.join(' · ')}</span>`;
            document.getElementById('conn-solved').appendChild(banner);
            connBuildGrid();
            connUpdateGrid();

            if (conn.solved.length === conn.puzzle.groups.length) {
                conn.done = true;
                setTimeout(() => connShowResult(true), 400);
            }
        }, 420);

    } else {
        const bestMatch = conn.puzzle.groups
            .filter(g => !conn.solved.includes(g))
            .map(g => ({ g, hits: selectedArr.filter(w => g.words.includes(w)).length }))
            .sort((a, b) => b.hits - a.hits)[0];

        conn.mistakes++;
        connUpdateMistakes();

        document.querySelectorAll('.conn-tile--selected').forEach(t => {
            t.classList.add('conn-tile--shake');
            setTimeout(() => t.classList.remove('conn-tile--shake'), 500);
        });

        if (bestMatch && bestMatch.hits === 3) {
            const msgEl = document.getElementById('conn-msg');
            msgEl.textContent = 'One away!';
            setTimeout(() => { msgEl.textContent = ''; }, 1600);
        }

        conn.selected.clear();
        connUpdateGrid();

        if (conn.mistakes >= CONN_MAX_MISTAKES) {
            conn.done = true;
            setTimeout(() => connShowResult(false), 700);
        }
    }
}

function connShowResult(won) {
    const score = won ? Math.max(0, CONN_MAX_SCORE - conn.mistakes * 200) : 0;

    const showFinal = () => {
        document.getElementById('conn-game-area').classList.add('hidden');
        const resultEl = document.getElementById('conn-result');
        resultEl.classList.remove('hidden');
        document.getElementById('conn-result-title').textContent = won ? 'Solved!' : 'Better luck next time';
        const el = document.getElementById('conn-result-score');
        el.textContent = '0';
        animateCounter(el, score, 1000);
    };

    if (!won) {
        conn.puzzle.groups.forEach(g => {
            if (!conn.solved.includes(g)) {
                const banner = document.createElement('div');
                banner.className = `conn-banner conn-banner--${g.color}`;
                banner.innerHTML = `<strong>${g.label}</strong><span>${g.words.join(' · ')}</span>`;
                document.getElementById('conn-solved').appendChild(banner);
            }
        });
        setTimeout(showFinal, 1800);
    } else {
        setTimeout(showFinal, 300);
    }
}

function connStartGame() {
    conn.puzzle = connPickPuzzle();
    const allWords = conn.puzzle.groups.flatMap(g => g.words);
    conn.shuffledWords = connShuffle(allWords);

    document.getElementById('conn-game-area').classList.remove('hidden');
    document.getElementById('conn-result').classList.add('hidden');
    document.getElementById('conn-solved').innerHTML = '';
    document.getElementById('conn-msg').textContent = '';
    document.getElementById('conn-submit-btn').disabled = true;

    connUpdateMistakes();
    connBuildGrid();
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('conn-btn').addEventListener('click', () => {
        connReset();
        connStartGame();
        showScreen('conn-screen');
    });

    document.getElementById('conn-back-btn').addEventListener('click', () => showScreen('hub-screen'));
    document.getElementById('conn-submit-btn').addEventListener('click', connSubmit);
    document.getElementById('conn-shuffle-btn').addEventListener('click', connDoShuffle);

    document.getElementById('conn-play-again-btn').addEventListener('click', () => {
        connReset();
        connStartGame();
    });

    document.getElementById('conn-hub-btn').addEventListener('click', () => showScreen('hub-screen'));
});
