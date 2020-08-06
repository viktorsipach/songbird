const birdsData = [
  [       
    {
      id: 1,
      name: 'Тетерев',
      species: 'Lyrurus tetrix',
      description: 'Тетерев – достаточно крупная птица с маленькой головой и коротким клювом. Самцы по размерам больше, чем самки, длина их тела от 49 до 58 см, масса находится в пределах 1-1,4 кг, а самки в длину достигают от 40 до 45 см, а их вес составляет 0,7-1 кг',
      image: 'https://live.staticflickr.com/7479/15878882580_db9aa701fb_k.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/UIXHEHSYRN/XC524820-XC234703%20-%20Whooper%20Swan%20-%20Cygnus%20cygnus.mp3',
    },
    {
      id: 2,
      name: 'Рябчик',
      species: 'Tetrastes bonasia',
      description: 'Длина взрослого рябчика с хвостом составляет от 35 до 37 см, размах крыльев от 48 до 54 см. Масса самцов от 327 до 580 г, для самочек от 305 до 560 г. Масса птиц изменяется в зависимости от времени года, максимальных значений она достигает в ноябре-декабре. В течение зимы рябчики теряют вес и весной становятся гораздо меньше по размерам. Голова у рябчика маленькая, клюв короткий, изогнутый, сильный, длиной около 1 см.',
      image: 'https://live.staticflickr.com/1771/43782490572_0832d7bf7b_h.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/WDMGSYQBRL/XC234610-Default%20Project.mp3',
    },
    {
      id: 3,
      name: 'Перепел',
      species: 'Coturnix coturnix',
      description: 'Длина тела взрослой перепелки составляет от 16 до 20 см, масса находится в пределах  80 – 145 г. Оперение охристое, голова, спинка, надхвостье и хвост украшены бурыми поперечными полосами и пятнами, на глазах видна рыжая полоса. Самец отличается тёмно-рыжими щеками и зобом. Горло и область подбородка у него черного цвета. У самочки подбородок и горло охристое, а на животике и боках видны темные пестрины.',
      image: 'https://live.staticflickr.com/65535/48469283026_e11c0e6691_k.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/WDMGSYQBRL/XC234682-Default%20Project.mp3',
    },
    {
      id: 4,
      name: 'Сапсан',
      species: 'Falco peregrinus',
      description: 'Хищная птица из семейства соколиных, распространённая на всех континентах, кроме Антарктиды. Размером с серую ворону, выделяется тёмным, аспидно-серым оперением спины, пёстрым светлым брюхом и чёрной верхней частью головы, а также чёрными «усами».',
      image: 'https://web-zoopark.ru/wp-content/uploads/2018/06/2-509.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/UGKDXJQJTC/XC524492-P1240024.mp3'
    },
    {
      id: 5,
      name: 'Пеночка-трещотка',
      species: 'Phylloscopus sibilatrix',
      description: 'Пеночка-трещотка длиной примерно от 11 до 13 см, размах крыльев от 19 до 24 см. Вес составляет примерно от 8 до 13 граммов. Верхняя сторона зелёная, грудь желтовато-белая. У маленькой птицы белое брюхо, жёлтое горло и жёлтые брови. Самец и самка окрашены одинаково. Пеночка-трещотка может прожить до 8 лет.',
      image: 'https://live.staticflickr.com/4855/30838878757_6307a9aa92_k.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC416412-180429_04_11.30h_fluiter_belarus_.mp3',
    },
    {
      id: 6,
      name: 'Камышница',
      species: 'Gallinula chloropus',
      description: 'Небольшая, размером с голубя, водоплавающая птица из семейства пастушковых, широко распространённая на всех материках, за исключением Австралии и Антарктиды. Типичный обитатель разнообразных водоёмов со стоячей или проточной водой и заболоченными, заросшими берегами.',
      image: 'https://photoclub.by/images/main62/627180_main.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/SHDHTEQQKR/XC524425-Gallinule.mp3'
    }
  ],
  [
    {
      id: 1,
      name: 'Обыкновенный гоголь',
      species: 'Bucephala clangula',
      description: 'Птица семейства утиных, нырковая утка средней величины с большой округлой головой, коротким клювом и контрастным чёрно-белым оперением. Распространена в зоне лесов северного полушария — как в Евразии, так и в Америке.',
      image: 'https://belsat.eu/wp-content/uploads/2016/01/hohal1.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/RNMRWBXEZJ/XC511551-Brilduiker%2C%20wingbeats%2C%202910119%2C%200305%20uur.mp3'
    },
    {
      id: 2,
      name: 'Огарь',
      species: 'Tadorna ferruginea',
      description: 'Водоплавающая птица семейства утиных, родственная пеганке. Характерно оранжево-коричневое оперение, при этом голова имеет более светлую окраску. Крылья белые с чёрными маховыми перьями.',
      image: 'https://animalreader.ru/wp-content/uploads/2015/06/ogar-golosistaja-krasnaja-utka-animal-reader.-ru-003.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/MCFGTDXKHO/XC507039-Teil6.mp3'
    },
    {
      id: 3,
      name: 'Гуменник',
      species: 'Anser fabalis',
      description: 'Крупная птица буровато-серой окраски, напоминающий серого гуся. Клюв чёрный с оранжевой полоской посередине. Самец и самка не отличаются по окраске, однако самка несколько мельче.',
      image: 'https://barentsmap.com/upload/iblock/193/193cc9ad2c152b76029f0026dd402cf5.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/BPSDQEOJWG/XC511820-S%C3%A4dg%C3%A5s-lockl%C3%A4te%20uppflog%20flock-Ekeskog%2C%20T%C3%B6reboda%20Vg-%282019-11-09%2009-41%29-LS143538.mp3'
    },
    {
      id: 4,
      name: 'Канадская казарка',
      species: 'Branta canadensis',
      description: 'Голова и шея блестящие чёрные с крупными белыми пятнами по бокам головы, захватывающими щёку, подбородок и горло. Изредка небольшая белая отметина также имеется на лбу. Грудь, верхняя часть брюха и бока от сероватого или почти белого до волнистого шоколадно-коричневого или бурого.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Canada_goose_flight_cropped_and_NR.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/ELJNEGDKGC/XC522376-Grote%20Canadese%20gans%20contactroep.mp3'
    },
    {
      id: 5,
      name: 'Обыкновенная гага',
      species: 'Somateria mollissima',
      description: 'Крупная морская птица из семейства утиных, распространённая вдоль северных побережий Европы, Восточной Сибири и Северной Америки. Бо́льшую часть жизни проводит в море на небольшом расстоянии от берега, где её часто можно увидеть «танцующей» на волнах либо летящей очень низко над водой.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Somateria_mollissima_male_female.jpg/1280px-Somateria_mollissima_male_female.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC487987-2018-07-25%20Blonduos%20180725%20Eider%20a%20duvet%20divers%20grognement%20%286%29.mp3'
    },
    {
      id: 6,
      name: 'Краснозобая гагара',
      species: 'Gavia stellata',
      description: 'Самая мелкая из гагар. Белых пятен на спине и крыльях нет, есть только мелкие белые крапины, которых издали не видно, верх тела и крыльев кажутся однотонно серыми. Брюхо белое. Голова и бока шеи серые, по задней стороне шеи белые полоски.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Gavia_stellata_-Iceland_-swimming-8.jpg/275px-Gavia_stellata_-Iceland_-swimming-8.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC487876-2018-07-19%20Reykholar%20-%20Brajanslaekur%20-%20Latrabajarg%20180719%20Plongeon%20catmarin%20divers%20%283%29.mp3'
    }
  ],
  [
    {
      id: 1,
      name: 'Снежная куропатка',
      species: 'Lerwa lerwa',
      description: 'У птиц короткие округлые крылья и сильный клюв. У самцов на ногах шпора. Оперение верхней части тела самца и самки, а также головы и шеи полосами чёрно-белого цвета. Нижняя часть тела каштанового цвета. Клюв и ноги кораллового цвета.',
      image: 'https://live.staticflickr.com/7893/47398616552_9a918e0b21_h.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/PWDLINYMKL/XC266751-Snow%20Partridge1BL2015.mp3',
    },
    {
      id: 2,
      name: 'Тибетский улар',
      species: 'Tetraogallus tibetanus',
      description: 'Голова, шея и участок спины у шеи темно-серые с охристым налётом. Спина покрыта густым чёрным крапом. Брюхо покрыто полосами чёрного и белого цветов, черные полосы уже белых. зоб и грудь беловатого оттенка.  Самка отличается от самца рыжеватым налетом и темными крапинами на голове и шее.',
      image: 'https://live.staticflickr.com/65535/48445413157_23e0355fbb_k.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/QPDPKRWEEK/XC176140-Tibetan%20Snowcock%201%20130610.mp3',
    },
    {
      id: 3,
      name: 'Жемчужный турач',
      species: 'Francolinus pintadeanus pintadeanus',
      description: 'Длина тела птицы в среднем составляет 30—34 см, вес — 280—400 г. Самки немного меньше самцов. Жемчужные турачи обитают в Камбодже, Китае, Индии, Лаосе, Мьянме, на Филиппинах, в Таиланде и Вьетнаме. Они интродуцированы на Маврикий, Филиппины, Мадагаскар, в США, Чили и Аргентину[4]. Обитают в субтропических и тропических лесах.',
      image: 'https://live.staticflickr.com/1631/26735662096_e8b5abcabf_h.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/DYEJEXGTVP/XC487498-01199%20%E4%B8%AD%E5%8D%8E%E9%B9%A7%E9%B8%AA%20%E6%8C%87%E5%90%8D%E4%BA%9A%E7%A7%8D%20m%20%E6%B7%B1%E5%9C%B3%20%E5%91%A8%E5%93%B2.mp3',
    },
    {
      id: 4,
      name: 'Немой перепел',
      species: 'Coturnix japonica',
      description: 'Немой перепел, или японский перепел[1] (лат. Coturnix japonica); некоторыми считается подвидом обыкновенного перепела — лат. Coturnix coturnix japonica), — птица подсемейства куропатковых отряда курообразных. Одомашнен человеком и разводится ради мяса и яиц; используется также как модельный организм в научно-исследовательских (лабораторных) целях.',
      image: 'https://live.staticflickr.com/65535/49384418337_c05193e6b6_k.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/YNOAMCSSHX/XC448524-%20180419%20%E5%8C%97%E5%85%AB%E6%BB%A7%20%E4%BD%8E%E7%9F%AE%E7%A8%80%E7%96%8F%E8%8A%A6%E8%8B%87%E5%9C%B0SHADOW_0162S12.mp3',
    },
    {
      id: 5,
      name: 'Итагин',
      species: 'Ithaginis cruentus berezowskii',
      description: 'Самец кровавого фазана достигает длины от 44 до 48 см. Самки несколько меньше и достигают длины от 40 до 42 см. Масса — от 410 до 620 г. Оперение очень мягкое, у птиц обоего пола также имеется хохол, который у самки немного короче. Хвост относительно короткий для фазанов, ступенчатый, состоящий из 14 перьев. Клюв короткий и сильно согнут вниз. Клюв чёрный с красным основанием. Голая кожа за глазами красная, во время размножения у самца принимает ярко-красный цвет. Ноги длинные по сравнению с телом и сильные. Их цвет ярко-красный.',
      image: 'https://live.staticflickr.com/903/26935101897_7642dc11b4_b.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/QPDPKRWEEK/XC175919-Blood%20Pheasant%202%20130612.mp3',
    },
    {
      id: 6,
      name: 'Глазчатый фазан',
      species: 'Tragopan temminckii',
      description: 'Глазчатый трагопан длиной 60 см — это коренастая птица с коротким хвостом. У самца красное оперение с серыми и чёрно-белыми пятнами. Беспёрое, голубое лицо обрамлено чёрным цветом. Хохолок, шея и грудь оранжевые. У свисающих подобных лацканам мешков гортани узор состоит из оттенков синего и контрастных красных пятен. От похожего трагопана-сатира он отличается, прежде всего, более светлым синим цветом лица и красной верхней стороной. У самки коричневое оперение с белыми пятнами, очень похожа на самок трагопана-сатира.',
      image: 'https://live.staticflickr.com/5569/14739801336_33a0ed4369_k.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/PWDLINYMKL/XC265943-Temminck%27s%20Tragopan2FP2015.mp3',
    }
  ],
  [
    {
      id: 1,
      name: 'Буроголовая гаичка',
      species: 'Poecile montanus',
      description: 'Небольшая подвижная синица, населяющая зону лесов Европы и Азии. В отличие от близкой родственницы черноголовой гаички, больше тяготеет к хвойному лесу и по этой причине встречается в более северных широтах.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Poecile_montanus.JPG/275px-Poecile_montanus.JPG',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC519604-181006_04%2C%209.30h%20%20matkop%2C%20chaamse%20bossen%20bij%20boerenbaan%2C%20contactroep%2C%201%20ex%2C%20ter%20plaatse%2C%20niet%20gezien%2C%20goudhaan%2C%20pimpelmees%2C%20koolmees%2C%20gaai%20%282%29.MP3'
    },
    {
      id: 2,
      name: 'Белозобый дрозд',
      species: 'Turdus torquatus',
      description: 'Белозобый дрозд очень похож на чёрного дрозда по величине и структуре. У самцов чёрное оперение с заметной толстой белой полоской на груди. Нижняя часть клюва у самцов оранжевого цвета. У самок оттенок оперения скорее коричневый, а полоска на груди светло-серая.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Turdus_torquatus2.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/CPHOABQOXS/XC509749-ringdrossel6%20191021-222248%2039.38.0.mp3'
    },
    {
      id: 3,
      name: 'Хохлатая синица',
      species: 'Lophophanes cristatus',
      description: 'Небольшая певчая птица семейства синицевых, распространённая на большей части Европы. В северных и средних широтах обычна в хвойных, реже смешанных лесах. На юге-западе Европы, в частности на Пиренейском полуострове и во Франции селится в широколиственных лесах с густым подлеском',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Lophophanes_cristatus_-_01.jpg/800px-Lophophanes_cristatus_-_01.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/URREFGVMYF/XC524206-200202_1262-ampl-cut.mp3'
    },
    {
      id: 4,
      name: 'Иволга',
      species: 'Oriolus oriolus',
      description: 'Мелодичность голоса иволги сравнивают со звучанием флейты. Человеку сложно разглядеть иволгу, так как она обитает высоко на деревьях. Иволга не только очень красивая, но и  полезная птица. Она уничтожает ядовитых гусениц, которых не поедают другие птицы.',
      image: 'https://live.staticflickr.com/65535/47102184004_58a93380b9.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC491801-2019.07.07_06.28_01.mp3'
    },
    {
      id: 5,
      name: 'Свиристель',
      species: 'Bombycilla garrulus',
      description: 'У свиристели очень цепкие коготки, что помогает птице удерживаться на ветках и склевывать ягоды, которые труднее всего достать. В период ухаживаний самец предлагает самке ягоду или другое угощение. Если самка его принимает, то птицы создают пару.',
      image: 'https://live.staticflickr.com//65535//49367433842_1b06da0e6b.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC517421-AB-004%20%282%29%20jemio%C5%82uszka.mp3'
    },
    {
      id: 6,
      name: 'Желтоголовый королёк',
      species: 'Regulus regulus',
      description: 'Очень подвижная птица, постоянно перепархивает с одной ветки на другую, на тонких веточках принимает различные позы, в том числе и вниз головой. Как правило, держится в верхней части кроны деревьев и малозаметна с земли. Гнездится в хвойных и смешанных лесах, в том числе глухой темнохвойной тайге',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Regulus_regulus_60North_cropped.jpg/275px-Regulus_regulus_60North_cropped.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC522842-2019-11-24%20Acheres%20Roitelet%20huppe%20cris%20de%20vol%20courts.mp3'
    }
  ],
  [
    {
      id: 1,
      name: 'Агуйа',
      species: 'Geranoaetus melanoleucus',
      description: 'Агуйа распространён в Южной Америке. Он населяет разнообразные открытые и полуоткрытые ландшафты, а также горные регионы вплоть до высоты 3 000 м над уровнем моря.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Geranoaetus_melanoleucus.JPG/275px-Geranoaetus_melanoleucus.JPG',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/XGQWKIYVAD/XC489711-guia%20Serrana%2001.mp3'
    },
    {
      id: 2,
      name: 'Южноамериканская гарпия',
      species: 'Harpia harpyja',
      description: 'Длина тела этого ястреба от 90 до 110 см. Размах крыльев около 2 м. Самка весит 6–9 кг, более мелкий самец 4–4,8 кг. У гарпии оперение на спине тёмно-серого цвета.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/2/28/Harpyia.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/JPBSNBUUEF/XC436991-Harpy%20Eagle%2C%20181002-006.mp3'
    },
    {
      id: 3,
      name: 'Змееяд',
      species: 'Circaetus gallicus',
      description: 'Змееяд очень скрытен, осторожен, молчалив. Для гнездования избирает удаленные от человека участки леса с полянами и болотами, удобными для охоты. Гнезда строит маленькие, не крупнее, чем у канюка, рыхлые и какие-то небрежные.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Circaetus_gallicus_in_Kiev_Zoo.jpg/800px-Circaetus_gallicus_in_Kiev_Zoo.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC380056-circaete%20cris%20couple.mp3'
    },
    {
      id: 4,
      name: 'Стервятник',
      species: 'Neophron percnopterus',
      description: 'Оперение стервятника окрашено в белый цвет с чёрными длинными перьями по краям крыльев, что особенно заметно в полёте. В области горла перья имеют желтоватый оттенок. Голова у стервятника лысая, со складками, и ярко-жёлтой, иногда даже оранжевой кожей.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Egyptian_vulture.jpg/275px-Egyptian_vulture.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/ILUHRFXDNU/percnoptere%20dEgypte%20chickcall.mp3'
    },
    {
      id: 5,
      name: 'Орлан',
      species: 'Haliaeetus',
      description: 'Орланы обитают по берегам морей, крупных озёр и рек. Гнёзда устраивают на деревьях, реже на скалах. В кладке от 1 до 4 яиц. Кормятся рыбой, мелкими млекопитающими, птицами, падалью.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/2/28/Riesenseeadler.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/YBXAQXNZZP/XC503707-Goa%20Odxel%20White-bellied%20Sea%20Eagle%2022-Oct-2019%20AAM%20E.mp3'
    },
    {
      id: 6,
      name: 'Шахин',
      species: 'Falco pelegrinoides',
      description: 'Внешним видом и поведением похож на сапсана, но немного мельче, верх светлее, низ охристый с менее развитым рисунком, на макушке и затылке имеются ярко-рыжие пятна. Длина тела 33—39 см. Самки крупнее самцов.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/7/78/W%C3%BCstenfalke.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/ZAAPUBHXSQ/XC313699-Barbary%20Falcon%20%281%29.mp3'
    }
  ],
  [
    {
      id: 1,
      name: 'Антарктическая крачка',
      species: 'Sterna vittata',
      description: 'Ареал: южные моря Антарктики и Субантарктики. На север встречается до Кергелена, Новой Зеландии, Огненной Земли, Фолклендов и Тристан-да-Кунья, реже — до юга Бразилии и Австралии. В Южной Америке ареал пересекается с местообитанием южноамериканской крачки, сезонно — полярной крачки, которая ежегодно мигрирует из Арктики в Антарктику. Вид широко распространён, присвоенный ей охранный статус — «вызывающие наименьшие опасения». Общее количество особей оценивается в 140 тысяч.',
      image: 'https://live.staticflickr.com/1213/5105905438_277d27994c_c.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/HKBZXSHAHB/XC332011-Tern%2C%20Antarctic.mp3',
    },
    {
      id: 2,
      name: 'Южнополярный поморник',
      species: 'Stercorarius maccormicki',
      description: 'Южнополя́рный помо́рник (лат. Catharacta maccormicki) — морская птица, принадлежащая роду больших поморников (Catharacta) семейства поморниковых отряда ржанкообразных, широко распространённая в Антарктике. Впервые вид был описан в 1893 году как Stercorarius maccormicki британским орнитологом Говардом Саундерсом (англ. Howard Saunders, 1835—1907). Среди различных авторов нет единого мнения к какому роду относить южнополярного поморника. Нередко его продолжают рассматривать в составе рода Stercorarius, включающего поморников Северного полушария. ',
      image: 'https://live.staticflickr.com/8308/29196611570_cde47773b7_k.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/TLPLNAINFU/XC305317-STE-022SouthPolarSkua_2008_long.mp3',
    },
    {
      id: 3,
      name: 'Большой конёк',
      species: 'Anthus antarcticus',
      description: 'Большой конёк (лат. Anthus antarcticus) — певчая птица из семейства трясогузковых. Эндемик острова Южная Георгия, единственная певчая птица Субантарктики. Гнездо из соломинок устраивает обычно в траве, куда откладывает четыре яйца в год. Питается насекомыми и паукообразными. Вид находился под угрозой из-за серых крыс, завезённых на остров, а также антропогенных факторов.',
      image: 'https://live.staticflickr.com/5443/8766171640_355df28f2e_k.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/FPAGKPAQYO/XC318725-SouthGeorgia%20Pipit_Salisbury_24dec2015_Fschmitt_2.mp3',
    },
    {
      id: 4,
      name: 'Белая ржанка',
      species: 'Chionis albus',
      description: 'Длина тела от 34 до 41 см, масса варьирует от 460 до 780 г. Размах крыльев от 74 до 84 см. Половой диморфизм отсутствует. Самцы немного крупнее самок. Оперение полностью белое, крылья небольшие, лапы короткие. Типично для белых ржанок быстрое передвижение по земле, во время которого они так же, как голуби, кивают головой.',
      image: 'https://live.staticflickr.com/7813/39713643563_5c8b7e8519_k.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/FPAGKPAQYO/XC415432-Snowy%20Sheathbill_HalfMoon_Sshetlands_7jan2018_Fschmitt.mp3',
    },
    {
      id: 5,
      name: 'Антарктический буревестник',
      species: 'Thalassoica antarctica',
      description: 'Антаркти́ческий буреве́стник (лат. Thalassoica antarctica) — морская птица, принадлежащая монотипическому роду антарктических буревестников (Thalassoica) семейства буревестниковых отряда буревестникообразных (трубконосых), распространённая в Антарктике. Впервые вид был описан в 1789 году как Procellaria antarctica немецким врачом и натуралистом Иоганном Фридрихом Гмелиным (нем. Johann Friedrich Gmelin, 1748—1804). Позднее этот вид был помещён в род Thalassoica.',
      image: 'https://live.staticflickr.com/8720/28183889703_84c6166c63_h.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/TLPLNAINFU/STE-021antpetrellmp3single.mp3',
    },
    {
      id: 6,
      name: 'Антарктический пингвин',
      species: 'Pygoscelis antarcticus',
      description: 'Ареал данного вида — побережье Антарктиды со стороны Южной Америки и прилегающих островов, на север распространён до Южной Георгии, Буве и Баллени. Заплывает до Фолклендских островов. Также Антарктические пингвины встречаются и на айсбергах в Антарктике. Количество особей оценивается в 6,5—7,5 миллион пар. Взрослые антарктические пингвины достигают роста 60—70 см и веса около 4,5 кг.[3] Задняя сторона тела и головы, а также клюв у антарктических пингвинов тёмно-серые, почти чёрные, передняя сторона — белая. По шее, от уха к уху, идет тонкая чёрная полоска. Птенцы покрыты серым пухом (спереди — более светлым). Гнёзда пингвины строят среди камней, самец и самка попеременно 5—10 дней высиживают 1—2 яйца в течение 35 дней. В возрасте 50—60 дней молодняк уже начинает выходить в море.',
      image: 'https://live.staticflickr.com/5818/23933902485_1d2d196279_z.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/CDTGHVBGZP/XC254602-Chinstrap%20Penguin2015-2-19-5.mp3',
    }
  ]
];
  
export default birdsData;