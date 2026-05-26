const WORD_BANK = {
    general: {
        4: ['able','back','book','call','dark','each','face','fire','game','gold','hand','help',
            'idea','item','jump','just','keep','kind','land','last','main','mind','name','next',
            'once','open','page','path','race','read','safe','side','take','talk','unit','used',
            'very','view','walk','what','year','zone','data','fact','life','love','plan','role',
            'rule','show','sign','step','test','time','type','word','work'],
        5: ['angel','beach','brave','chair','cloud','dance','dream','eagle','earth','flame',
            'flute','giant','grass','heart','horse','ideal','image','jewel','juice','karma',
            'knife','laser','light','magic','money','night','noble','ocean','opera','peace',
            'pearl','plant','queen','quiet','radio','river','smile','solar','story','tiger',
            'train','ultra','union','vigor','voice','water','wheat','yacht','youth','zebra',
            'bloom','craft','brand','clock','depth','drive','early','faith','grace','grand',
            'grief','guest','guide','human','humor','input','joint','judge','layer','match',
            'mercy','model','moral','mount','nerve','onset','other','owner','panel','phase',
            'pilot','pitch','pixel','place','pixel','price','prime','proof','pulse','quest',
            'quote','range','rapid','reach','realm','reply','reset','ridge','rinse','shift',
            'shore','sight','skill','slave','sleep','slide','slope','sound','space','spark',
            'speed','spell','spend','spine','sport','stack','staff','stage','stake','stand',
            'start','state','steel','steep','steer','stern','stone','storm','strap','steel',
            'suite','surge','sweep','swift','sword','table','taste','theme','think','third',
            'thorn','those','three','throw','tight','title','toast','token','total','touch',
            'tough','tower','track','trade','trail','trait','trove','truly','trump','trunk',
            'trust','truth','tumid','tuned','twist','until','upper','usage','vault','verse',
            'video','vigil','viral','virus','visit','vista','vital','vivid','vocal','vogue',
            'voter','waste','watch','wealth','weigh','whole','width','witty','woman','world',
            'worry','worth','would','write','wrong','xerox','yield','young'],
        6: ['action','bridge','bright','castle','circus','dancer','danger','empire','flight',
            'forest','galaxy','garden','hidden','hunter','island','jangle','kindly','listen',
            'lively','market','modern','nature','orange','planet','pocket','reason','shadow',
            'silver','simple','travel','trophy','unique','upbeat','vision','wander','winter',
            'yellow','zenith','advice','afford','always','animal','answer','artist','asking',
            'asleep','assist','attack','ballot','banner','barely','battle','beauty','become',
            'before','behind','belief','better','borrow','bottle','bounce','branch','breath',
            'brutal','budget','burden','butler','button','candle','canopy','career','casino',
            'casual','caught','center','change','charge','choice','choose','cipher','circle',
            'clever','client','commit','common','cotton','couple','course','credit','crisis',
            'custom','debate','decide','define','delight','demand','depend','design','detail',
            'divide','dollar','double','dragon','driven','during','effect','emerge','endure',
            'energy','engage','engine','ensure','entire','escape','evolve','expand','expert',
            'extend','factor','fallen','famous','figure','filter','finger','finish','follow',
            'formal','foster','future','gather','gentle','giving','global','govern','growth',
            'handle','happen','hardly','health','helping','honest','impact','inform','inject',
            'inside','intent','invest','itself','jungle','kernel','launch','leader','length',
            'lesson','letter','linear','living','loaded','locate','locked','logger','longer',
            'making','manage','manner','master','matter','mental','method','middle','mirror',
            'mobile','module','moment','motion','native','nearly','normal','notice','number',
            'object','obtain','office','online','option','output','parent','partly','patent',
            'people','period','permit','phrase','pillar','policy','portal','poster','prefer',
            'pretty','prompt','proven','public','pursue','racial','random','really','recall',
            'recent','record','reform','region','remain','render','report','result','return',
            'reveal','review','rising','sample','saving','search','second','sector','select',
            'series','severe','signal','single','social','socket','source','spirit','spoken',
            'spread','spring','square','stable','stance','static','status','steady','stream',
            'strict','strong','struck','stupid','submit','suffer','sunday','sunset','supply',
            'system','target','taught','tender','theory','thinly','threat','thrill','thrust',
            'timing','toggle','toward','tribal','triple','trying','twelve','typing','unable',
            'unless','useful','valley','varied','verbal','virtue','volume','weekly','widely',
            'wisdom','within','wonder'],
    },
    geography: {
        4: ['bali','chad','cuba','fiji','iran','iraq','java','laos','lima','mali','nile','oman',
            'oslo','peru','rome','togo','utah','bern','cork','giza','nice','ohio','pisa','baku',
            'alps','gulf','kent','kobe','leon','lyon','nova','riga','suez','york','acre','azov',
            'buda','cape','dana','erne','etna','eyre','graz','harz','iowa','jade','java','kiel',
            'kiwi','loch','lodz','luxe','minx','oahu','oder','omsk','onyx','orly','oslo','oxus'],
        5: ['japan','spain','italy','egypt','china','india','kenya','ghana','niger','wales',
            'paris','cairo','delhi','osaka','seoul','miami','dubai','kyoto','tokyo','accra',
            'dakar','milan','tunis','rabat','amman','minsk','sofia','brest','liege','sinai',
            'rhine','volga','tiber','andes','hanoi','kabul','dhaka','lagos','abuja','samoa',
            'tonga','aruba','crete','malmo','perth','rouen','alpes','aswan','atoll','basra',
            'benin','berne','bogot','busan','cadiz','ceuta','danau','davao','dover','eifle',
            'flint','flore','fjord','ghent','goths','hague','hebei','hunan','idaho','inari',
            'izmir','jaxon','johor','junon','kazan','kenya','khmer','kochi','korea','lagos',
            'lhasa','luton','lyons','macau','malta','minsk','namib','natal','nauru','naxos',
            'nicer','night','nikko','nimes','odesa','omaha','orion','osaka','otago','pagan',
            'parga','petra','piura','plzen','pompe','pondi','porto','qatar','quito','ravel',
            'raves','reims','rioja','river','saiga','salta','samoa','sanaa','saone','sarai',
            'sochi','suez','sunda','surry','tblis','tehran','thane','tiber','timor','tonga',
            'tours','trent','troms','tunis','turin','uluru','volga','wales','wuhan','yalta'],
        6: ['france','brazil','greece','mexico','russia','canada','sweden','norway','turkey',
            'israel','jordan','kuwait','poland','serbia','madrid','athens','dublin','london',
            'vienna','berlin','warsaw','prague','lisbon','moscow','manila','bogota','riyadh',
            'tehran','naples','lahore','angola','bhutan','brunei','cyprus','guyana','malawi',
            'panama','rwanda','uganda','zambia','zurich','munich','ankara','havana','zagreb',
            'belize','taipei','alborg','almaty','amalfi','ancona','arnhem','astana','athens',
            'atolls','auvergn','aveiro','aviles','banska','beirut','bhopal','bilbao','bogota',
            'bolton','bragno','bruges','buenos','burgos','cahors','calais','canton','capris',
            'cassis','catania','cavtat','chania','chiang','chieti','ciudad','clarke','cobalt',
            'coburg','cochin','comoro','conakr','coruna','cracow','crimea','dalian','dalmatia',
            'delphi','desert','dhahran','dieppe','dodoma','dundee','durban','durres','elbrus',
            'erfurt','essen','figuei','finland','flores','focsani','foggia','formia','fresno',
            'funchal','gdansk','geneva','genova','getafe','girona','goiania','gorgan','gotha',
            'gothen','grasse','grozny','guided','hamadan','harare','hernia','hessen','hobart',
            'hormuz','hotels','houdan','ibadan','ilheus','iligan','iloilo','imphal','inchon',
            'indore','innsbru','iquique','Isfahan','istria','jeddah','jokkmokk','juneau',
            'kalmar','kanpur','kaunas','kavala','keller','kigali','kinsha','kolhap','kumasi',
            'kunming','kyrenia','lahore','lalibela','latakia','lausann','leiden','lerida',
            'leshan','levant','lhasa','liepaja','linz','lobito','lokoja','lusaka','macapa',
            'madras','malabo','malaga','manado','manama','manaus','maputo','mardin','mascat',
            'matera','merida','mersin','messina','mestre','mombasa','mostar','muscat','nagoya',
            'nantes','nassau','natanz','niamey','nicosia','ningbo','nippon','odessa','ontario',
            'oporto','oshawa','oviedo','oxford','padova','palermo','parma','passau','patmos',
            'patras','pesaro','peshawar','pilsen','plauen','plovdiv','puebla','puerto','raleigh',
            'ravenna','recife','reims','rennes','rostov','safety','salerno','samsun','santos',
            'sapporo','saraje','sassari','savona','seville','shiraz','siena','simfero','sioux',
            'skopje','slough','smyrna','sofia','split','stavanger','suzhou','surabaya','suva',
            'tabriz','tallin','tamatave','tanger','taranto','tashkent','tbilisi','tenerife',
            'termiz','teruel','thessa','tirane','tirgu','toledo','toluca','toulon','toulouse',
            'trabzon','treste','trier','trieste','tripoli','troyes','tucson','tunis','ulsan',
            'utrecht','vaduz','valencia','valetta','vallado','valpar','vannes','varna','venice',
            'verona','vestfold','vigo','vilnius','vitoria','vlore','volos','wroclaw','xian',
            'yangon','yaounde','yerevan','zagreb'],
    },
    food: {
        4: ['cake','milk','rice','corn','bean','beef','lamb','pork','wine','beer','taco','wrap',
            'pear','plum','lime','fish','beet','brie','chip','clam','crab','dill','feta','ghee',
            'herb','kale','kelp','mayo','mint','miso','oats','okra','pita','sage','tuna','yams',
            'chia','kiwi','nori','tofu','zest','acai','bran','buns','chow','cola','dips','dram',
            'duck','eggs','figs','flax','foie','grog','grub','guar','halva','hash','hops','jack',
            'jam','jerk','jolt','kefir','leek','loin','malt','mead','orzo','pate','peel','roti',
            'rump','rusk','ryes','seam','slaw','soda','sole','soup','spam','suet','tofu','udon',
            'veal','whey','yolk'],
        5: ['pizza','pasta','bread','bacon','cream','salad','fruit','grape','olive','sugar',
            'lemon','onion','curry','chips','steak','sushi','kebab','latte','mocha','melon',
            'mango','cocoa','donut','gyoza','basil','caper','chive','clove','fudge','honey',
            'maple','peach','prawn','quail','squid','syrup','thyme','trout','yeast','apple',
            'broth','chili','cumin','flank','glaze','guava','herbs','jelly','aioli','anise',
            'bagel','baste','beets','bigos','bison','bites','bland','blini','boeuf','bolus',
            'bonbon','borsch','bouza','bream','brine','briny','broth','bwana','capon','cauli',
            'cavil','ceviche','chewy','choux','chump','cider','cinna','clafoutis','clams','clasp',
            'cleat','cloud','coals','cocoa','codfish','colby','confit','coras','crabs','craic',
            'crawl','crema','crepe','crimp','crisp','crumb','crush','crust','cuppa','cured',
            'daube','dried','drink','drupe','dulse','dumpling','dutch','edame','emmer','flaan',
            'flake','flaky','flair','fleur','flour','fluff','foamy','fondu','forte','frais',
            'frank','frappe','friar','frisk','froth','frost','fumet','fundi','funky','fusilli',
            'ganache','gelee','gelid','glaze','gloog','glums','gnudi','gooey','gouda','grain',
            'gravy','graze','gruel','gruff','gruyere','gulab','gummy','haggis','harira','hazle',
            'heavy','herbs','herby','hoagy','hooch','hummus','icings','jamon','jelly','jerky',
            'juicy','julep','kabsa','kaffe','kahve','katsu','keema','knish','kudzu','kumqu',
            'labneh','lager','lahme','laksa','langu','lardo','lardy','latke','layer','leben',
            'leche','leeks','legume','legumes','lemon','lemony','light','liver','lollo','lox',
            'maize','mandu','manti','masala','matzo','mauby','meaty','medhu','milky','minty',
            'mochi','molasses','morsel','mousse','mujad','mulch','musky','mussy','nacho','nutty',
            'oaten','oxtail','paella','pakora','panko','panna','paneer','papri','parch','pared',
            'parma','pated','pates','patty','pilaw','pilaf','pilav','pinto','pipis','pipit',
            'pisco','pitta','pixie','plait','plonk','plums','poach','polenta','ponzu','porcini',
            'potau','pretz','purse','quince','raita','ramen','ranch','rasam','rasul','redly',
            'relish','remou','rhubarb','ricer','rigid','risot','rizzo','rojak','roojo','roost',
            'rosem','rough','rowdy','ruddy','salty','salva','samsa','sanma','saute','sauce',
            'savon','scald','scone','seedy','seitan','sembe','senna','serca','shirk','shiso',
            'shrub','sieve','simme','singy','sip','sitar','skimm','slack','slurp','smoky',
            'snack','snap','souse','soupy','spare','spelt','spice','spicy','split','spoon',
            'stale','stew','sting','stock','stone','stove','straw','strip','stroo','strudel',
            'stuff','sudze','sweet','swirl','tarka','tarte','tasty','tatty','tepid','toast',
            'torte','total','treat','trifle','trite','turkey','turmeric','umber','umami',
            'unami','undun','vegan','veloute','venom','viand','vinho','vinegar','virtu',
            'vodka','wafer','water','wheat','white','whole','zesty','zingy'],
        6: ['cheese','butter','muffin','noodle','salmon','turkey','almond','walnut','cashew',
            'pepper','garlic','ginger','coffee','pastry','sorbet','yogurt','waffle','burger',
            'cookie','caviar','fennel','oyster','papaya','radish','scones','sesame','tahini',
            'toffee','brandy','claret','gratin','kimchi','merlot','millet','mousse','pickle',
            'quiche','squash','tamale','tartar','almond','adobo','au gratin','baguet',
            'basted','batata','bathed','becham','biryani','biscot','bivalv','blanc','blanch',
            'blends','borsch','botarg','boudin','bouill','breads','brioch','brulot','brunch',
            'bulgur','burrit','butter','caille','canape','canola','capers','caraml','carrot',
            'casein','catfish','cavolo','cebich','cevich','challah','chatni','chedda','chicke',
            'chicor','chowde','chutne','clafou','claret','cloves','cobble','cobnut','compote',
            'congee','corned','creams','creamy','cubano','currant','custard','cutlet','daikon',
            'damson','danish','dauphi','decker','dipped','dulche','dumpl','durian','eclait',
            'eggnog','entree','falafel','farina','farfal','fennel','fillet','finger','fondue',
            'frappe','fritter','garnis','gelato','giblet','giotto','glaced','glutin','gnocch',
            'goulash','grains','gravla','greens','grille','guacam','halloo','halvah','hamchi',
            'hoisin','hummus','hotpot','imbued','jambon','jicama','kaiser','katfis','korma',
            'kugel','kumiss','labane','larded','latkes','lchee','legume','lentil','linzer',
            'liquor','longon','loosen','lovage','lychee','madele','masher','matcha','medlar',
            'menudo','minced','mirepo','morels','morsel','mousse','muffin','mulled','mutton',
            'nachos','nutmeg','noodles','olives','omelet','orange','packed','paella','paneer',
            'panini','panko','paprik','parsle','pastil','patate','patell','pilaf','plaice',
            'plated','polent','ponzu','powder','primit','probiotic','prunes','pulled','pulses',
            'quinoa','ragout','raisin','rapini','rarebi','relish','rennet','ricotta','risotto',
            'rocket','roaste','romesc','rongoa','rucula','runner','rustic','salami','salted',
            'sauced','sautee','saveur','savory','savour','seasme','seeded','seitan','shallot',
            'shanks','sherry','shiver','sifted','simmer','skewer','sliced','smoked','smoker',
            'snails','soften','spread','spiced','steame','steaks','stirfr','stodge','strach',
            'strega','strupp','sugarc','sumac','summer','suprem','syrups','tamara','tapiok',
            'tempur','tender','thickn','thyme','tinned','tisane','toaste','tomato','trekel',
            'trifle','truffe','tallow','tumeri','tzatzik','umeboshi','unlike','valdeo','velout',
            'veniso','vermil','viande','vitell','walnut','wasabi','watery','wedged','weight',
            'whisky'],
    },
    nature: {
        4: ['tree','leaf','fern','moss','rose','tide','wave','reef','dune','peak','lake','pond',
            'mist','hail','snow','rain','wind','bird','bear','wolf','deer','crow','frog','moth',
            'crab','gale','glen','hill','mesa','moor','rock','root','seed','stem','bark','bolt',
            'cove','dawn','dusk','dust','fawn','ford','gust','hawk','iris','lark','lava','newt',
            'pine','acorn','alba','alga','arco','arch','atmo','atom','bees','berg','bole','bolt',
            'bone','bosk','brim','burl','burr','bush','cage','cave','clay','clod','coal','cone',
            'corn','dale','damp','dens','drey','drop','dusk','ebb','echo','eddy','fell','fen',
            'fern','fire','firs','fish','fjord','flat','flea','flex','floe','flow','flux','foam',
            'foss','frond','germ','ghat','glow','glut','gnat','goad','gobs','goby','gore','grab',
            'grit','gust','haze','heat','helm','herd','hide','hive','hoar','holt','hook','horn',
            'hulk','humm','hump','husk','hyena','ibis','ibex','inch','jade','kelp','kern','kite',
            'knob','knoll','knot','lace','lark','loch','lode','loam','loess','loon','lore','loti',
            'luff','lung','lyme','lynx','mane','mare','mars','maze','mile','mink','mire','mist',
            'moat','moose','mote','muck','mudflats','muir','muon','mure','murk','muse','mute',
            'myrrh','neem','newt','nidus','node','noil','nome','nook','norm','null','ooze','oryx',
            'otter','ouzel','ovum','pall','palm','pang','peat','peck','pika','pile','pith','plod',
            'plop','plum','pods','pore','puff','pulp','purr','race','rake','ramp','rand','rime',
            'rime','rill','rind','riot','rite','rivulet','roan','roes','ruff','rush','rust',
            'rut','sage','sand','sap','scud','seal','seam','shaw','shed','shim','silt','skim',
            'slag','slab','sloe','slot','slub','slug','slur','smew','snag','snap','snew','snipe',
            'soil','sole','soot','sorrel','sort','spat','spew','spin','spit','spot','spue','squa',
            'stag','stay','stoa','stub','stud','sump','swam','swan','swat','sway','teal','tern',
            'toad','torc','tors','tuft','tusk','tutu','vale','veld','vent','vole','vore','weal',
            'wend','whin','whim','whir','wisp','woad','wold','wren','yak','yew','zeal'],
        5: ['ocean','river','earth','cloud','storm','plain','cliff','frost','birch','maple',
            'cedar','coral','eagle','whale','tiger','crane','snake','tulip','daisy','lilac',
            'flora','fauna','algae','brook','delta','fjord','grove','marsh','ridge','swamp',
            'taiga','viper','acorn','bayou','bluff','bough','briar','copse','creek','finch',
            'flint','fungi','glade','grebe','heath','holly','magma','otter','petal','plume',
            'raven','robin','shrub','stork','thorn','vixen','amber','abyss','adder','agave',
            'agave','alder','algal','alloy','alluvial','alpine','ambra','ameba','ammo','ample',
            'anole','apian','aqua','ariel','ashen','aster','atone','auks','avian','axils','axle',
            'azote','azure','badger','balsa','basalt','basin','beech','bison','biter','bough',
            'brood','brush','butte','camel','campo','canis','capra','cargo','carve','caves',
            'cedar','chalk','chasm','chert','chick','chips','cider','cirque','citrine','civit',
            'clams','clans','clave','cleft','close','cloth','cloud','clove','clump','cobra',
            'comet','conch','condor','conifer','copal','copra','couch','coure','craggy','crane',
            'crawl','creel','creep','crest','crisp','croak','culms','cycad','cymbals','dales',
            'damps','datum','daubs','decay','dense','depot','depth','devon','dunes','dusky',
            'dwarf','ember','emmet','epoch','equid','erupt','estua','evoke','exude','fable',
            'facet','fains','falls','fauna','feather','ferns','fetch','fiord','flats','fleck',
            'fleec','flesh','flinch','flint','float','flock','floes','flood','floor','flour',
            'fluid','fluke','flume','flurr','fluvial','fluxes','foggy','frogs','frond','frost',
            'fumar','gaur','gecko','geyser','ghost','glade','glare','gneis','gomph','gorge',
            'gouge','graze','gruel','gruff','grubs','guano','gulch','gully','halce','hazel',
            'heath','herbs','herds','heron','hills','honey','humus','hyena','ibex','icefl',
            'igloo','ileum','impel','indie','inlet','inky','insect','intro','iodine','irone',
            'ithmus','ivory','ivies','jacks','jelly','jingo','kamba','karst','kelps','knolls',
            'kopje','kraal','kudzu','laphs','lave','layer','lemur','liana','limen','liner',
            'litoral','loach','lobes','lodge','loess','lotic','lotus','lymph','lynx','marble',
            'mares','marsh','matted','mauve','meado','melis','metals','mimosa','minks','mires',
            'moist','moles','moose','morle','mossy','moths','mottle','mudflat','murre','myrrh',
            'oasis','obsid','orach','orchid','organ','ozone','panda','panel','parch','patina',
            'paven','pedal','peewit','perch','petrel','phage','phase','pipit','pixels','plane',
            'preen','prism','probe','prolog','ptarm','pumice','quail','quartz','queue','rabid',
            'races','rails','range','raptor','rawly','realm','reeds','renew','resin','riffle',
            'rivulet','rocky','roots','rough','ruffe','safar','saiga','salal','sandy','savann',
            'scarp','scoria','setal','shade','shaft','shale','shoal','silts','skein','slate',
            'smew','snowy','spawn','spire','splay','spore','sprat','spray','sprig','squal',
            'squall','squid','steed','steep','stool','stoat','sulph','surges','swale','swarm',
            'tawny','terra','thorn','topaz','torts','track','tract','trail','traps','trawl',
            'troll','trout','tuber','tuft','tules','tundra','tussock','twigs','undine','upland',
            'valor','vapor','veins','vetch','vigorous','viola','voles','wadis','wader','whelk',
            'winds','windy','witch','wizen','woods','worts','wrack','wren','wrist','xeric','yarns'],
        6: ['forest','desert','meadow','tundra','lagoon','canyon','valley','geyser','jungle',
            'parrot','turtle','orchid','cactus','bamboo','walrus','jaguar','falcon','lichen',
            'badger','beetle','bonsai','cicada','coyote','donkey','fungus','gibbon','grotto',
            'hornet','iguana','impala','magpie','marmot','python','rapids','sphinx','weasel',
            'minnow','osprey','puffin','condor','cougar','grouse','limpet','lizard','pebble',
            'pollen','possum','rodent','sorrel','sprout','thrush','willow','wombat'],
    },
};

const WG_MAX_ATTEMPTS = 6;
const WG_KB_ROWS = [
    ['Q','W','E','R','T','Y','U','I','O','P'],
    ['A','S','D','F','G','H','J','K','L'],
    ['ENTER','Z','X','C','V','B','N','M','⌫'],
];

let wg = {
    active: false, length: 5, theme: 'general',
    answer: '', guesses: [], current: '',
    letterStates: {}, done: false,
};

let wgValidSet = new Set();

function wgBuildValidSet(len) {
    const s = new Set();
    Object.values(WORD_BANK).forEach(themeWords => {
        (themeWords[len] || []).forEach(w => { if (w.length === len) s.add(w.toLowerCase()); });
    });
    return s;
}

function wgPickAnswer(theme, len) {
    const pool = (WORD_BANK[theme][len] || []).filter(w => w.length === len);
    return pool[Math.floor(Math.random() * pool.length)].toLowerCase();
}

// ── Grid ──────────────────────────────────────────────────────

function wgBuildGrid() {
    const grid = document.getElementById('wg-grid');
    grid.innerHTML = '';
    const ideal = { 4: 68, 5: 62, 6: 52 }[wg.length] || 62;
    const maxFromWidth = Math.floor((Math.min(window.innerWidth, 500) - 48) / wg.length);
    const maxFromHeight = Math.max(30, Math.floor((window.innerHeight - 370) / WG_MAX_ATTEMPTS));
    const tileSize = Math.min(ideal, maxFromWidth, maxFromHeight, 68);
    grid.style.setProperty('--wg-tile', tileSize + 'px');
    for (let r = 0; r < WG_MAX_ATTEMPTS; r++) {
        const row = document.createElement('div');
        row.className = 'wg-row';
        row.dataset.row = r;
        for (let c = 0; c < wg.length; c++) {
            const tile = document.createElement('div');
            tile.className = 'wg-tile';
            tile.dataset.row = r;
            tile.dataset.col = c;
            row.appendChild(tile);
        }
        grid.appendChild(row);
    }
}

function wgBuildKeyboard() {
    const kb = document.getElementById('wg-keyboard');
    kb.innerHTML = '';
    WG_KB_ROWS.forEach(keys => {
        const row = document.createElement('div');
        row.className = 'wg-kb-row';
        keys.forEach(k => {
            const btn = document.createElement('button');
            btn.className = 'wg-key' + (k.length > 1 ? ' wg-key--wide' : '');
            btn.textContent = k;
            btn.dataset.key = k;
            btn.addEventListener('click', () => wgHandleKey(k));
            row.appendChild(btn);
        });
        kb.appendChild(row);
    });
}

function wgGetTile(row, col) {
    return document.querySelector(`.wg-tile[data-row="${row}"][data-col="${col}"]`);
}

function wgGetRow(row) {
    return document.querySelector(`.wg-row[data-row="${row}"]`);
}

// ── Input ─────────────────────────────────────────────────────

function wgHandleKey(key) {
    if (wg.done) return;
    if (key === '⌫' || key === 'Backspace') {
        wg.current = wg.current.slice(0, -1);
    } else if (key === 'ENTER' || key === 'Enter') {
        wgSubmit();
        return;
    } else if (/^[A-Za-z]$/.test(key) && wg.current.length < wg.length) {
        wg.current += key.toUpperCase();
    } else {
        return;
    }
    wgRenderCurrent();
}

function wgRenderCurrent() {
    const rowIdx = wg.guesses.length;
    for (let c = 0; c < wg.length; c++) {
        const tile = wgGetTile(rowIdx, c);
        if (!tile) continue;
        const letter = wg.current[c] || '';
        tile.textContent = letter;
        tile.classList.toggle('wg-tile--filled', !!letter);
    }
}

// ── Submit ────────────────────────────────────────────────────

function wgSubmit() {
    const guess = wg.current.toLowerCase();
    if (guess.length < wg.length) {
        wgShakeRow(wg.guesses.length);
        wgShowMessage('Not enough letters');
        return;
    }
    if (!wgValidSet.has(guess)) {
        wgShakeRow(wg.guesses.length);
        wgShowMessage('Not in word list');
        return;
    }

    const result = wgEvaluate(guess, wg.answer);
    const rowIdx = wg.guesses.length;
    wg.guesses.push(guess);
    wg.current = '';
    wgShowMessage('');

    wgRevealRow(rowIdx, guess, result, () => {
        wgUpdateKeyboard(guess, result);
        const won = result.every(r => r === 'correct');
        if (won) {
            wgEndGame(true);
        } else if (wg.guesses.length >= WG_MAX_ATTEMPTS) {
            wgEndGame(false);
        }
    });
}

function wgEvaluate(guess, answer) {
    const result = Array(wg.length).fill('absent');
    const answerArr = answer.split('');
    const guessArr = guess.split('');
    const used = Array(wg.length).fill(false);

    // Pass 1: correct
    for (let i = 0; i < wg.length; i++) {
        if (guessArr[i] === answerArr[i]) {
            result[i] = 'correct';
            used[i] = true;
        }
    }
    // Pass 2: present
    for (let i = 0; i < wg.length; i++) {
        if (result[i] === 'correct') continue;
        for (let j = 0; j < wg.length; j++) {
            if (!used[j] && guessArr[i] === answerArr[j]) {
                result[i] = 'present';
                used[j] = true;
                break;
            }
        }
    }
    return result;
}

function wgRevealRow(rowIdx, guess, result, onDone) {
    const DELAY = 90;
    const FLIP = 250;
    result.forEach((state, col) => {
        const tile = wgGetTile(rowIdx, col);
        setTimeout(() => {
            tile.style.transition = `transform ${FLIP}ms ease`;
            tile.style.transform = 'rotateX(90deg)';
            setTimeout(() => {
                tile.textContent = guess[col].toUpperCase();
                tile.classList.remove('wg-tile--filled');
                tile.classList.add(`wg-tile--${state}`);
                tile.style.transform = '';
                setTimeout(() => { tile.style.transition = ''; }, FLIP);
            }, FLIP);
        }, col * DELAY);
    });
    setTimeout(onDone, wg.length * DELAY + FLIP * 2);
}

function wgUpdateKeyboard(guess, result) {
    const priority = { correct: 3, present: 2, absent: 1 };
    guess.split('').forEach((letter, i) => {
        const key = letter.toUpperCase();
        const state = result[i];
        const current = wg.letterStates[key];
        if (!current || priority[state] > priority[current]) {
            wg.letterStates[key] = state;
        }
    });
    document.querySelectorAll('.wg-key').forEach(btn => {
        const k = btn.dataset.key;
        if (k && k.length === 1) {
            const s = wg.letterStates[k];
            btn.className = 'wg-key' + (s ? ` wg-key--${s}` : '');
        }
    });
}

function wgShakeRow(rowIdx) {
    const row = wgGetRow(rowIdx);
    if (!row) return;
    row.classList.remove('wg-row--shake');
    void row.offsetWidth;
    row.classList.add('wg-row--shake');
    row.addEventListener('animationend', () => row.classList.remove('wg-row--shake'), { once: true });
}

function wgShowMessage(msg) {
    document.getElementById('wg-message').textContent = msg;
}

function wgEndGame(won) {
    wg.done = true;
    const answer = wg.answer.toUpperCase();
    if (won) {
        const msgs = ['Genius!', 'Excellent!', 'Great job!', 'Nice!', 'Good', 'Phew!'];
        wgShowMessage(msgs[Math.min(wg.guesses.length - 1, msgs.length - 1)]);
        wgBounceRow(wg.guesses.length - 1);
    } else {
        wgShowMessage(`The word was ${answer}`);
    }
    // Show action buttons after a moment
    setTimeout(() => {
        document.getElementById('wg-end-btns').classList.remove('hidden');
    }, won ? 1800 : 800);
}

function wgBounceRow(rowIdx) {
    for (let c = 0; c < wg.length; c++) {
        const tile = wgGetTile(rowIdx, c);
        setTimeout(() => {
            tile.classList.add('wg-tile--bounce');
            tile.addEventListener('animationend', () => tile.classList.remove('wg-tile--bounce'), { once: true });
        }, c * 80);
    }
}

// ── Start / Reset ─────────────────────────────────────────────

function wgStart(len, theme) {
    wg = {
        active: true, length: len, theme,
        answer: wgPickAnswer(theme, len),
        guesses: [], current: '', letterStates: {}, done: false,
    };
    wgValidSet = wgBuildValidSet(len);

    document.getElementById('wg-badge').textContent =
        `${theme.charAt(0).toUpperCase() + theme.slice(1)} · ${len} letters`;

    wgBuildGrid();
    wgBuildKeyboard();
    wgShowMessage('');
    document.getElementById('wg-end-btns').classList.add('hidden');
    document.getElementById('word-setup').classList.add('hidden');
    document.getElementById('word-game').classList.remove('hidden');
}

function wgGoToSetup() {
    wg.active = false;
    document.getElementById('word-setup').classList.remove('hidden');
    document.getElementById('word-game').classList.add('hidden');
}

// ── Wiring ────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('word-guessr-btn').addEventListener('click', () => {
        wg.active = false;
        document.getElementById('word-setup').classList.remove('hidden');
        document.getElementById('word-game').classList.add('hidden');
        showScreen('word-screen');
    });

    // Physical keyboard
    document.addEventListener('keydown', e => {
        if (!wg.active) return;
        if (document.activeElement.tagName === 'INPUT') return;
        wgHandleKey(e.key);
    });

    // Setup option pills
    document.getElementById('wg-length-pills').addEventListener('click', e => {
        const btn = e.target.closest('[data-val]');
        if (!btn) return;
        document.querySelectorAll('#wg-length-pills .wg-pill').forEach(b => b.classList.remove('wg-pill--active'));
        btn.classList.add('wg-pill--active');
    });

    document.getElementById('wg-theme-pills').addEventListener('click', e => {
        const btn = e.target.closest('[data-val]');
        if (!btn) return;
        document.querySelectorAll('#wg-theme-pills .wg-pill').forEach(b => b.classList.remove('wg-pill--active'));
        btn.classList.add('wg-pill--active');
    });

    document.getElementById('wg-start-btn').addEventListener('click', () => {
        const len = parseInt(document.querySelector('#wg-length-pills .wg-pill--active').dataset.val);
        const theme = document.querySelector('#wg-theme-pills .wg-pill--active').dataset.val;
        wgStart(len, theme);
    });

    document.getElementById('wg-back-btn').addEventListener('click', () => showScreen('hub-screen'));
    document.getElementById('wg-game-back-btn').addEventListener('click', wgGoToSetup);

    document.getElementById('wg-play-again-btn').addEventListener('click', () => {
        wgStart(wg.length, wg.theme);
    });
    document.getElementById('wg-hub-btn').addEventListener('click', () => {
        wg.active = false;
        showScreen('hub-screen');
    });
});
