// Жамэль — меню (одна страница)
// Переключение: Основное / Барное / Постное
// Фильтрация по категориям + поиск
// Данные основного меню собраны по фотографиям меню

const MENUS = {
  main: {
    id: 'main',
    title: 'Жамэль',
    subtitle: 'Смесь традиционной Армянской кухни с нотками Европейской',
    categories: [
      {
        category: 'Холодные закуски',
        items: [
          { name: 'Овощной букет', weight: '450 г', description: 'Помидоры, огурцы, острый перец, зелень. (На премиум помидоре +30%)', price: 870, emoji: '🥗',
          image: 'images/dishes/ovoshchnoy-buket.jpg' },
          { name: 'Зелёная грядка', weight: '100 г', description: 'Ассорти кавказской зелени', price: 450, emoji: '🌿',
          image: 'images/dishes/zelyonaya-gryadka.jpg' },
          { name: 'Острый перец', weight: '1 шт', description: '', price: 250, emoji: '🌶️',
          image: 'images/dishes/ostryy-perets.jpg' },
          { name: 'Ассорти сыров из Армении', weight: '250 г', description: 'Сыр чанах, лори, чечил', price: 790, emoji: '🧀',
          image: 'images/dishes/assorti-syrov-iz-armenii.jpg' },
          { name: 'Ассорти европейских сыров', weight: '300 г', description: 'Пармезан, песто, дорблю, камамбер, мёд, грецкий орех', price: 890, emoji: '🧀',
          image: 'images/dishes/assorti-evropeyskikh-syrov.jpg' },
          { name: 'Мясной сундучок', weight: '150 г', description: 'Суджук и бастурма, а также сало домашнее', price: 920, emoji: '🥩',
          image: 'images/dishes/myasnoy-sunduchok.jpg' },
          { name: 'Ассорти мясных деликатесов', weight: '250 г', description: 'Буженина собственного приготовления, язык говяжий, колбаса и куриный рулет с горчичным соусом', price: 850, emoji: '🥩',
          image: 'images/dishes/assorti-myasnykh-delikatesov.jpg' },
          { name: 'Говяжий язычок', weight: '130 г', description: 'Язык говяжий отварной с соусом хрена', price: 690, emoji: '🍖',
          image: 'images/dishes/govyazhiy-yazychok.jpg' },
          { name: 'Ассорти рыбное', weight: '200 г', description: 'Лосось с/с, сом копчёный, масляная рыба, тунец холодного копчения, лимон', price: 1050, emoji: '🐟',
          image: 'images/dishes/assorti-rybnoe.jpg' },
          { name: 'Сельдь с картофелем', weight: '200 г', description: 'Сельдь, о��варной картофель', price: 480, emoji: '🐟',
          image: 'images/dishes/seld-s-kartofelem.jpg' },
          { name: 'Рулетики из баклажанов', weight: '5 шт', description: 'С баклажаном, творожным сыром и грецким орехом', price: 550, emoji: '🍆',
          image: 'images/dishes/ruletiki-iz-baklazhanov.jpg' },
          { name: 'Армянский погребок', weight: '400 г', description: 'Соленья в ассортименте', price: 750, emoji: '🥒',
          image: 'images/dishes/armyanskiy-pogrebok.jpg' },
          { name: 'Лобио', weight: '250 г', description: 'Блюдо из красной фасоли с грецким орехом и чесноком', price: 490, emoji: '🫘',
          image: 'images/dishes/lobio.jpg' },
          { name: 'Оливки, маслины', weight: '150 г', description: '', price: 420, emoji: '🫒',
          image: 'images/dishes/olivki-masliny.jpg' },
          { name: 'Хлебная корзина', weight: '', description: 'Лепёшка, лаваш', price: 220, emoji: '🥖',
          image: 'images/dishes/khlebnaya-korzina.jpg' },
          { name: 'Лаваш', weight: '', description: 'Армянская тонкая лепёшка', price: 120, emoji: '🫓',
          image: 'images/dishes/lavash.jpg' },
          { name: 'Лепёшка', weight: '', description: '', price: 120, emoji: '🫓',
          image: 'images/dishes/lepyoshka.jpg' }
        ]
      },

      {
        category: 'Салаты',
        items: [
          { name: 'Тёплый салат Жамэль', weight: '230 г', description: 'Нежный цыплёнок с брокколи и шампиньонами', price: 570, emoji: '🥗',
          image: 'images/dishes/tyoplyy-salat-zhamel.jpg' },
          { name: 'Тёплый салат с Авелуком', weight: '200 г', description: 'Салат из горного щавеля-авелука с грецкими орехами и чесноком', price: 480, emoji: '🌿',
          image: 'images/dishes/tyoplyy-salat-s-avelukom.jpg' },
          // поправил "фирме��ным" -> "фирменным"
          { name: 'Салат Ереван', weight: '200 г', description: 'С телятиной, запечёнными баклажанами и фирменным соусом', price: 730, emoji: '🥗',
          image: 'images/dishes/salat-erevan.jpg' },
          { name: 'Салат Табуле', weight: '230 г', description: 'Традиционный овощной салат в западно-армянском стиле с булгуром', price: 480, emoji: '🥗',
          image: 'images/dishes/salat-tabule.jpg' },

          { name: 'Салат Амберд', weight: '200 г', description: 'Куриное филе с грибами, маслинами, грецкими орехами и зёрнами граната (в корзиночках из лаваша)', price: 690, emoji: '🥗',
          image: 'images/dishes/salat-amberd.jpg' },
          { name: 'Микс салата с креветками и авокадо', weight: '200 г', description: 'С тигровыми креветками и авокадо, с добавлением кедрового ореха и бальзамического соуса', price: 720, emoji: '🍤',
          image: 'images/dishes/miks-salata-s-krevetkami-i-avokado.jpg' },
          { name: 'Стейк салат с обжаренными овощами', weight: '230 г', description: 'Тёплый салат с жареной телячьей вырезкой и нежными овощами', price: 750, emoji: '🥩',
          image: 'images/dishes/steyk-salat-s-obzharennymi-ovoshchami.jpg' },
          { name: 'Салат Старый Тбилиси', weight: '200 г', description: 'Телятина, красная фасоль, грецкий орех, чесночная заправка, лук и специи', price: 670, emoji: '🥗',
          image: 'images/dishes/salat-staryy-tbilisi.jpg' },
          { name: 'Салат с сыром Бурратто', weight: '250 г', description: 'С бурратто, рукколой и томатами', price: 700, emoji: '🧀',
          image: 'images/dishes/salat-s-syrom-burratto.jpg' },
          { name: 'Овощной салат по-домашнему', weight: '250 г', description: '', price: 480, emoji: '🥗',
          image: 'images/dishes/ovoshchnoy-salat-po-domashnemu.jpg' },
          { name: 'Салат Морская жемчужина', weight: '200 г', description: 'Морской коктейль с салатным миксом и вялеными томатами, со специальным соусом', price: 750, emoji: '🦑',
          image: 'images/dishes/salat-morskaya-zhemchuzhina.jpg' },
          { name: 'Салат Столичный (краб / говядина / курица)', weight: '230 г', description: '', price: '520 / 590 / 520', emoji: '🥗',
          image: 'images/dishes/salat-stolichnyy.jpg' },
          { name: 'Цезарь (курица / креветки)', weight: '200 г', description: '', price: '590 / 690', emoji: '🥗',
          image: 'images/dishes/tsezar.jpg' },
          { name: 'Салат Греческий', weight: '200 г', description: '', price: 480, emoji: '🥗',
          image: 'images/dishes/salat-grecheskiy.jpg' }
        ]
      },

      {
        category: 'Супы',
        items: [
          { name: 'Спас', weight: '250 г', description: 'Суп из мацуна с п��еницей и маслом', price: 450, emoji: '🍲',
          image: 'images/dishes/spas.jpg' },
          { name: 'Хашлама (ягнёнок/телятина)', weight: '300 г', description: 'Армянский суп. Сладкий перец, томаты и картофель', price: 490, emoji: '🍲',
          image: 'images/dishes/khashlama.jpg' },
          { name: 'Пити с бараниной', weight: '300 г', description: 'Суп из нута с кусочками баранины', price: 490, emoji: '🍲',
          image: 'images/dishes/piti-s-baraninoy.jpg' },
          { name: 'Харчо (ягнёнок/телятина)', weight: '300 г', description: 'Острый суп с рисом и томатной поджаркой', price: 490, emoji: '🍲',
          image: 'images/dishes/kharcho.jpg' },
          { name: 'Борщ домашний', weight: '300 г', description: '', price: 490, emoji: '🍲',
          image: 'images/dishes/borshch-domashniy.jpg' },
          { name: 'Лагман', weight: '300 г', description: 'С домашней лапшой', price: 490, emoji: '🍜',
          image: 'images/dishes/lagman.jpg' },
          { name: 'Крем-суп из тыквы', weight: '250 г', description: 'Тыква с собственными семечками', price: 430, emoji: '🎃',
          image: 'images/dishes/krem-sup-iz-tykvy.jpg' },
          { name: 'Крем-суп из брокколи', weight: '250 г', description: 'Насыщенный густой суп из нежной брокколи', price: 430, emoji: '🥦',
          image: 'images/dishes/krem-sup-iz-brokkoli.jpg' },
          { name: 'Суп Том Ям', weight: '300 г', description: 'Острый азиатский суп с морепродуктами. Подаётся с отварным рисом', price: 490, emoji: '🍤',
          image: 'images/dishes/sup-tom-yam.jpg' }
        ]
      },

      {
        category: 'Горячие закуски',
        items: [
          { name: 'Ханума', weight: '3 шт / 200 г или 10 шт / 700 г', description: 'Розы с начинкой из мясного фарша и лука, готовятся в томатном соусе', price: '390 / 990', emoji: '🥟',
          image: 'images/dishes/khanuma.jpg' },
          { name: 'Долма', weight: '250 г', description: 'Виноградные листья с говядиной. Подаётся с ��оусом из мацуна', price: 520, emoji: '🍃',
          image: 'images/dishes/dolma.jpg' },
          { name: 'Цукини-гриль с креветками и сливочным соусом', weight: '250 г', description: '', price: 820, emoji: '🍤',
          image: 'images/dishes/tsukini-gril-s-krevetkami-i-slivochnym-sousom.jpg' },
          { name: 'Мидии запечённые с грибами и сыром', weight: '250 ��', description: 'Зелёные мидии, фаршированные шампиньонами и сыром моцарелла', price: 520, emoji: '🦪',
          image: 'images/dishes/midii-zapechyonnye-s-gribami-i-syrom.jpg' },
          { name: 'Жульен из курицы с грибами', weight: '250 г', description: '', price: 500, emoji: '🍄',
          image: 'images/dishes/zhulen-iz-kuritsy-s-gribami.jpg' },
          // поправил "Арге��тинские" -> "Аргентинские"
          { name: 'Аргентинские креветки в медово-горчичном соусе', weight: '150 г', description: 'Лангустины в медово-горчичном соусе', price: 920, emoji: '🍤',
          image: 'images/dishes/argentinskie-krevetki-v-medovo-gorchichnom-souse.jpg' }
        ]
      },

      {
        category: 'Выпечка из печи',
        items: [
          { name: 'Ламаджо', weight: '', description: 'Армянская тонкая лепёшка с мясным фаршем. Подаётся с таном и лимоном', price: 450, emoji: '🫓',
          image: 'images/dishes/lamadzho.jpg' },
          { name: 'Бюрек', weight: '600 г', description: 'Рулет с начинкой из мясного фарша со специями', price: 750, emoji: '🥖',
          image: 'images/dishes/byurek.jpg' },
          { name: 'Хачбургер (говядина)', weight: '300 г', description: 'Из дрожжевого теста с говяжьим фаршем и сыром моцарелла', price: 500, emoji: '🍔',
          image: 'images/dishes/khachburger.jpg' },
          { name: 'Пицца с бастурмой', weight: '400 г', description: '', price: 720, emoji: '🍕',
          image: 'images/dishes/pitstsa-s-basturmoy.jpg' },
          { name: 'Пицца с курицей', weight: '400 г', description: '', price: 450, emoji: '🍕',
          image: 'images/dishes/pitstsa-s-kuritsey.jpg' },
          { name: 'Пицца Пепперони', weight: '400 г', description: '', price: 490, emoji: '🍕',
          image: 'images/dishes/pitstsa-pepperoni.jpg' }
        ]
      },

      {
        category: 'Дары Кавказа',
        items: [
          { name: 'Хачапури по-аджарски', weight: '400 г', description: 'Лодочка с сыром сулугуни, яйцом и маслом', price: 500, emoji: '🫓',
          image: 'images/dishes/khachapuri-po-adzharski.jpg' },
          { name: 'Хачапури по-мегрельски', weight: '500 г', description: 'С сыром сулугуни, перед выпечкой посыпаются ещё одним слоем сыра', price: 600, emoji: '🫓',
          image: 'images/dishes/khachapuri-po-megrelski.jpg' },
          { name: 'Хачапури со шпинатом', weight: '500 г', description: 'Со шпинатом и обжаренным кедровым орехом', price: 650, emoji: '🫓',
          image: 'images/dishes/khachapuri-so-shpinatom.jpg' },
          { name: 'Хинкали (говядина/баранина)', weight: '4 шт', description: '', price: 450, emoji: '🥟',
          image: 'images/dishes/khinkali.jpg' },
          { name: 'Обжаренные хинкали (говядина/баранина)', weight: '4 шт', description: 'С добавлением свежей зелени и ароматных специй', price: 520, emoji: '🥟',
          image: 'images/dishes/obzharennye-khinkali.jpg' },
          { name: 'Грузинские чашушули', weight: '300 г', description: 'С ароматом тархуна и кинзой', price: 620, emoji: '🍲',
          image: 'images/dishes/gruzinskie-chashushuli.jpg' }
        ]
      },

      {
        category: 'Омлеты',
        items: [
          { name: 'Яичница с помидорами', weight: '250 г', description: '', price: 410, emoji: '🍳',
          image: 'images/dishes/yaichnitsa-s-pomidorami.jpg' },
          { name: 'Яичница с бастурмой', weight: '180 г', description: '', price: 450, emoji: '🍳',
          image: 'images/dishes/yaichnitsa-s-basturmoy.jpg' },
          { name: 'Яичница с беконом', weight: '180 г', description: '', price: 450, emoji: '🍳',
          image: 'images/dishes/yaichnitsa-s-bekonom.jpg' },
          { name: 'Шушан', weight: '250 г', description: 'Мандак — тушёная армянская зелень с яйцом в сливочном масле', price: 420, emoji: '🌿',
          image: 'images/dishes/shushan.jpg' }
        ]
      },

      {
        category: 'Горячие блюда',
        items: [
          { name: 'Ариса с домашней курицей', weight: '300 г', description: 'Традиционное армянское пшеничное ризотто. Подаётся со сливочным маслом', price: 690, emoji: '🍚',
          image: 'images/dishes/arisa-s-domashney-kuritsey.jpg' },
          { name: 'Гарни ярах', weight: '300 г', description: 'Блюдо с баклажаном и фаршем из нежной телячьей мякоти', price: 580, emoji: '🍆',
          image: 'images/dishes/garni-yarakh.jpg' },
          { name: 'Толма традиционная в капустных листьях', weight: '300 г', description: 'Старинное блюдо с добавлением армянских горных трав', price: 690, emoji: '🥬',
          image: 'images/dishes/tolma-traditsionnaya-v-kapustnykh-listyakh.jpg' },
          { name: 'Тжвжик Армянский', weight: '300 г', description: 'Из телячьей печени и сердца в томатном соусе', price: 610, emoji: '🍲',
          image: 'images/dishes/tzhvzhik-armyanskiy.jpg' },
          { name: 'Тжвжик с гранатом', weight: '300 г', description: 'Кусочки говяжьей печени с гранатовым соусом', price: 610, emoji: '🍲',
          image: 'images/dishes/tzhvzhik-s-granatom.jpg' },
          { name: 'Плов по-армянски', weight: '300 г', description: 'Из полбы с репчатым луком и жареными шампиньонами', price: 400, emoji: '🍚',
          image: 'images/dishes/plov-po-armyanski.jpg' },
          { name: 'Мормор из ягнёнка', weight: '300 г', description: '', price: 800, emoji: '🍖',
          image: 'images/dishes/mormor-iz-yagnyonka.jpg' },
          { name: 'Нор Баязет', weight: '300 г', description: 'Нежнейший молочный телёнок с обжаренными овощами', price: 740, emoji: '🥩',
          image: 'images/dishes/nor-bayazet.jpg' },
          { name: 'Арарат', weight: '300 г', description: 'Телятина с овощами, грибами и маслинами в сливочном соусе', price: 700, emoji: '🥩',
          image: 'images/dishes/ararat.jpg' },
          { name: 'Ванакат', weight: '350 г', description: 'Пикантные кусочки свинины в овощном соусе с красной фасолью и тыквенными семечками', price: 750, emoji: '🍖',
          image: 'images/dishes/vanakat.jpg' },
          { name: 'Керусус', weight: '300 г', description: 'Молотая телятина с солёными огурцами и овощами в томатном соке', price: 690, emoji: '🍲',
          image: 'images/dishes/kerusus.jpg' },

          { name: 'Жаркое по-домашнему', weight: '300 г', description: 'Домашняя свинина с картофелем и овощами', price: 650, emoji: '🍲',
          image: 'images/dishes/zharkoe-po-domashnemu.jpg' },
          { name: 'Хрус��ящий цыплёнок с картофелем по-деревенски', weight: '420 г', description: 'Цыплёнок корнишон, маринованный в специях и обжаренный до золотистой корочки', price: 710, emoji: '🍗',
          image: 'images/dishes/khrus-yashchiy-tsyplyonok-s-kartofelem-po-derevenski.jpg' },
          { name: 'Плов из телятины', weight: '350 г', description: 'С рисом и барбарисом', price: 530, emoji: '🍚',
          image: 'images/dishes/plov-iz-telyatiny.jpg' },
          { name: 'Форель запечённая с овощами', weight: '350 г', description: 'Целая форель со сливочным маслом и овощами', price: 950, emoji: '🐟',
          image: 'images/dishes/forel-zapechyonnaya-s-ovoshchami.jpg' },
          { name: 'Сёмга «Жамэль»', weight: '350 г', description: 'Авторское блюдо нежного лосося с диким рисом', price: 1100, emoji: '🐟',
          image: 'images/dishes/syomga-zhamel.jpg' },
          { name: '«Пьяная Сёмга» в белом вине', weight: '250 г', description: 'Стейк из сёмги, пропитанный белым вином (подаётся с бокалом белого вина)', price: 1100, emoji: '🍷',
          image: 'images/dishes/pyanaya-syomga-v-belom-vine.jpg' }
        ]
      },

      {
        category: 'Паста',
        items: [
          { name: 'Паста с морепродуктами', weight: '350 г', description: 'В белом сухом вине с сыром Пармиджано', price: 650, emoji: '🍝',
          image: 'images/dishes/pasta-s-moreproduktami.jpg' },
          { name: 'Паста Болоньезе', weight: '350 г', description: 'С телячьим фаршем в красном вине, томатом и сыром Пармиджано', price: 560, emoji: '🍝',
          image: 'images/dishes/pasta-boloneze.jpg' },
          { name: 'Паста Карбонара', weight: '350 г', description: '', price: 640, emoji: '🍝',
          image: 'images/dishes/pasta-karbonara.jpg' }
        ]
      },

      {
        category: 'Гарниры',
        items: [
          { name: 'Картофель фри', weight: '150 г', description: '', price: 250, emoji: '🍟',
          image: 'images/dishes/kartofel-fri.jpg' },
          { name: 'Картофельное пюре', weight: '150 г', description: '', price: 160, emoji: '🥔',
          image: 'images/dishes/kartofelnoe-pyure.jpg' },
          { name: 'Картофель по-деревенски', weight: '150 г', description: '', price: 250, emoji: '🥔',
          image: 'images/dishes/kartofel-po-derevenski.jpg' },
          { name: 'Аришта армянская лапша', weight: '150 г', description: '', price: 300, emoji: '🍜',
          image: 'images/dishes/arishta-armyanskaya-lapsha.jpg' },
          { name: 'Ризотто', weight: '150 г', description: '', price: 300, emoji: '🍚',
          image: 'images/dishes/rizotto.jpg' }
        ]
      },

      {
        category: 'Блюда, приготовленные на углях / Сочные шашлыки на мангале',
        items: [
          { name: 'Ассорти из шашлыков', weight: '1000 г', description: '', price: 3300, emoji: '🔥',
          image: 'images/dishes/assorti-iz-shashlykov.jpg' },
          { name: 'Шашлык из каре ягнёнка', weight: '100 г', description: '', price: 510, emoji: '🍖',
          image: 'images/dishes/shashlyk-iz-kare-yagnyonka.jpg' },
          { name: 'Шашлык яблочко барашка', weight: '100 г', description: '', price: 510, emoji: '🍖',
          image: 'images/dishes/shashlyk-yablochko-barashka.jpg' },
          { name: 'Шашлык из баранины', weight: '100 г', description: '', price: 470, emoji: '🍖',
          image: 'images/dishes/shashlyk-iz-baraniny.jpg' },
          { name: 'Шашлык из баранины «Семечки»', weight: '100 г', description: '', price: 470, emoji: '🍖',
          image: 'images/dishes/shashlyk-iz-baraniny-semechki.jpg' },
          { name: 'Шашлык из бараньих яиц', weight: '100 г', description: '', price: 350, emoji: '🍖',
          image: 'images/dishes/shashlyk-iz-baranikh-yaits.jpg' },
          { name: 'Шашлык из бараньих почек', weight: '100 г', description: '', price: 300, emoji: '🍖',
          image: 'images/dishes/shashlyk-iz-baranikh-pochek.jpg' },
          { name: 'Икибир', weight: '1 шампур', description: '', price: 510, emoji: '🔥',
          image: 'images/dishes/ikibir.jpg' },
          { name: 'Шашлык из свиной шейки', weight: '100 г', description: '', price: 340, emoji: '🍖',
          image: 'images/dishes/shashlyk-iz-svinoy-sheyki.jpg' },
          { name: 'Шашлык из свиных рёбер', weight: '100 г', description: '', price: 330, emoji: '🍖',
          image: 'images/dishes/shashlyk-iz-svinykh-ryober.jpg' },
          { name: 'Антрекот из свинины', weight: '100 г', description: '', price: 330, emoji: '🍖',
          image: 'images/dishes/antrekot-iz-svininy.jpg' },
          { name: 'Шашлык из телятины', weight: '100 г', description: '', price: 550, emoji: '🍖',
          image: 'images/dishes/shashlyk-iz-telyatiny.jpg' },
          { name: 'Шашлык из говяжьего сердца', weight: '100 г', description: '', price: 235, emoji: '🍖',
          image: 'images/dishes/shashlyk-iz-govyazhego-serdtsa.jpg' },
          { name: 'Шашлык из говяжьей печени', weight: '100 г', description: '', price: 245, emoji: '🍖',
          image: 'images/dishes/shashlyk-iz-govyazhey-pecheni.jpg' },
          { name: 'Шашлык из куриных крыльев', weight: '100 г', description: '', price: 225, emoji: '🍗',
          image: 'images/dishes/shashlyk-iz-kurinykh-krylev.jpg' },
          { name: 'Шашлык из курицы', weight: '100 г', description: '', price: 270, emoji: '🍗',
          image: 'images/dishes/shashlyk-iz-kuritsy.jpg' },
          { name: 'Люля из курицы', weight: '180 г', description: '', price: 500, emoji: '🍢',
          image: 'images/dishes/lyulya-iz-kuritsy.jpg' },
          { name: 'Люля из баранины', weight: '180 г', description: '', price: 550, emoji: '🍢',
          image: 'images/dishes/lyulya-iz-baraniny.jpg' },
          { name: 'Люля из телятины', weight: '180 г', description: '', price: 520, emoji: '🍢',
          image: 'images/dishes/lyulya-iz-telyatiny.jpg' },

          { name: 'Дорадо на мангале', weight: '1 шт', description: '', price: 950, emoji: '🐟',
          image: 'images/dishes/dorado-na-mangale.jpg' },
          { name: 'Сибас на мангале', weight: '1 шт', description: '', price: 950, emoji: '🐟',
          image: 'images/dishes/sibas-na-mangale.jpg' },
          { name: 'Форель на мангале', weight: '1 шт', description: '', price: 950, emoji: '🐟',
          image: 'images/dishes/forel-na-mangale.jpg' },
          { name: 'Шашлык из семги', weight: '180 г', description: '', price: 1300, emoji: '🐟',
          image: 'images/dishes/shashlyk-iz-semgi.jpg' },
          { name: 'Картофель на вертеле', weight: '100 г', description: '', price: 175, emoji: '🥔',
          image: 'images/dishes/kartofel-na-vertele.jpg' },
          { name: 'Шампиньоны на вертеле', weight: '100 г', description: '', price: 265, emoji: '🍄',
          image: 'images/dishes/shampinony-na-vertele.jpg' },
          { name: 'Овощи на вертеле', weight: '', description: 'Рагу + 15%', price: 450, emoji: '🥦',
          image: 'images/dishes/ovoshchi-na-vertele.jpg' }
        ]
      },

      {
        category: 'Закуски для любителей пива',
        items: [
          { name: 'Пивной сет №1', weight: '900 г', description: 'Картофель по-деревенски, кольца кальмара, хрустящие гренки, луковые кольца, сырные палочки', price: 890, emoji: '🍺',
          image: 'images/dishes/pivnoy-set-1.jpg' },
          { name: 'Пивной сет №2', weight: '1200 г', description: 'Куриные крылья терияки, свиные рёбрышки барбекю, жареные охотничьи колбаски, картофель по-деревенски, кольца кальмара, хрустящие гренки, луковые кольца', price: 1820, emoji: '🍺',
          image: 'images/dishes/pivnoy-set-2.jpg' },
          { name: 'Сырные палочки с соусом сладкий чили', weight: '150 г', description: '', price: 390, emoji: '🧀',
          image: 'images/dishes/syrnye-palochki-s-sousom-sladkiy-chili.jpg' },
          { name: 'Луковые кольца', weight: '150 г', description: '', price: 340, emoji: '🧅',
          image: 'images/dishes/lukovye-koltsa.jpg' },
          { name: 'Кольца кальмара', weight: '150 г', description: '', price: 520, emoji: '🦑',
          image: 'images/dishes/koltsa-kalmara.jpg' },
          { name: 'Куриные крылья с соусом терияки', weight: '150 г', description: '', price: 390, emoji: '🍗',
          image: 'images/dishes/kurinye-krylya-s-sousom-teriyaki.jpg' },
          { name: 'Свиные рёбрышки под соусом барбекю', weight: '150 г', description: '', price: 490, emoji: '🍖',
          image: 'images/dishes/svinye-ryobryshki-pod-sousom-barbekyu.jpg' }
        ]
      },

      {
        category: 'Соусы',
        items: [
          { name: 'Аджика', weight: '50 г', description: '', price: 100, emoji: '🌶️',
          image: 'images/dishes/adzhika.jpg' },
          { name: 'Кетчуп', weight: '50 г', description: '', price: 100, emoji: '🍅',
          image: 'images/dishes/ketchup.jpg' },
          { name: 'Гранатовый', weight: '50 г', description: '', price: 100, emoji: '🍎',
          image: 'images/dishes/granatovyy.jpg' },
          { name: 'Шашлычный', weight: '50 г', description: '', price: 100, emoji: '🥣',
          image: 'images/dishes/shashlychnyy.jpg' },
          { name: 'Ткемали', weight: '50 г', description: '', price: 100, emoji: '🥣',
          image: 'images/dishes/tkemali.jpg' },
          { name: 'Хрен', weight: '50 г', description: '', price: 100, emoji: '🥣',
          image: 'images/dishes/khren.jpg' },
          { name: 'Сметана', weight: '50 г', description: '', price: 100, emoji: '🥣',
          image: 'images/dishes/smetana.jpg' },
          { name: 'Чесночный', weight: '50 г', description: '', price: 100, emoji: '🧄',
          image: 'images/dishes/chesnochnyy.jpg' },
          { name: 'Тартар', weight: '50 г', description: '', price: 100, emoji: '🥣',
          image: 'images/dishes/tartar.jpg' }
        ]
      },

      {
        category: 'Десерты',
        items: [
          { name: 'Тирамису маскарпоне', weight: '120 г', description: '', price: 450, emoji: '🍰',
          image: 'images/dishes/tiramisu-maskarpone.jpg' },
          { name: 'Чизкейк', weight: '120 г', description: '', price: 400, emoji: '🍰',
          image: 'images/dishes/chizkeyk.jpg' },
          { name: 'Штрудель яблочный', weight: '150 г', description: '', price: 400, emoji: '🥧',
          image: 'images/dishes/shtrudel-yablochnyy.jpg' },
          { name: 'Штрудель вишнёвый', weight: '150 г', description: '', price: 400, emoji: '🥧',
          image: 'images/dishes/shtrudel-vishnyovyy.jpg' },
          { name: 'Шоколадная бомба', weight: '150 г', description: '', price: 450, emoji: '🍫',
          image: 'images/dishes/shokoladnaya-bomba.jpg' },
          { name: 'Манго-маракуйя', weight: '150 г', description: '', price: 450, emoji: '🍮',
          image: 'images/dishes/mango-marakuyya.jpg' },
          { name: 'Шоколадный фондан', weight: '200 г', description: '', price: 450, emoji: '🍫',
          image: 'images/dishes/shokoladnyy-fondan.jpg' },
          { name: 'Варенье из Армении', weight: '150 г', description: '', price: 250, emoji: '🍯',
          image: 'images/dishes/varene-iz-armenii.jpg' },
          { name: 'Мороженое (шарик, ассорти)', weight: '50 г', description: '', price: 150, emoji: '🍨',
          image: 'images/dishes/morozhenoe.jpg' },
          { name: 'Фруктовая нарезка', weight: '1000 г', description: '', price: 1450, emoji: '🍓',
          image: 'images/dishes/fruktovaya-narezka.jpg' },
          { name: 'Десерты в ассортименте', weight: '', description: 'Спрашивайте у официанта', price: '', emoji: '🍰',
          image: 'images/dishes/deserty-v-assortimente.jpg' }
        ]
      },

      {
        category: 'Основные блюда под заказ',
        items: [
          { name: 'Хаш', weight: '', description: 'Подаётся с чесноком и кусочками сушёного лаваша', price: 1200, emoji: '🍲',
          image: 'images/dishes/khash.jpg' },
          { name: 'Шила по-армянски с домашней курицей', weight: '', description: 'Подаётся со сливочным маслом. На 5 человек', price: 3800, emoji: '🍚',
          image: 'images/dishes/shila-po-armyanski-s-domashney-kuritsey.jpg' },
          { name: 'Кюфта (армянские праздничные блюда)', weight: '200 г', description: 'Минимальный заказ от 1 кг. Подаётся со сливочным маслом', price: 600, emoji: '🍖',
          image: 'images/dishes/kyufta.jpg' },
          { name: 'Стерлядь от Шефа', weight: '1 кг', description: '', price: 5000, emoji: '🐟',
          image: 'images/dishes/sterlyad-ot-shefa.jpg' },
          { name: 'Форель по-деревенски', weight: '1 кг', description: 'Целая форель. Подаётся в собственном соку с отварными овощами', price: 3000, emoji: '🐟',
          image: 'images/dishes/forel-po-derevenski.jpg' },
          { name: 'Ягнёнья лопатка с ариштой', weight: '', description: 'Блюдо на компанию. На 3 человека', price: 4000, emoji: '🍖',
          image: 'images/dishes/yagnyonya-lopatka-s-arishtoy.jpg' },
          { name: 'Эрзрум', weight: '', description: 'Мясо молодого барашка, маринованное в пиве с овощами и сливочным маслом. На 5 человек', price: 4500, emoji: '🍖',
          image: 'images/dishes/erzrum.jpg' }
        ]
      },

      {
        category: 'Шашлык из домашней свинины',
        items: [
          { name: 'Шея', weight: '100 г', description: '', price: 390, emoji: '🍖',
          image: 'images/dishes/sheya.jpg' },
          { name: 'Ребра', weight: '100 г', description: '', price: 375, emoji: '🍖',
          image: 'images/dishes/rebra.jpg' },
          { name: 'Антрекот', weight: '100 г', description: '', price: 375, emoji: '🍖',
          image: 'images/dishes/antrekot.jpg' }
        ]
      },

      {
        category: 'Детское меню',
        items: [
          { name: 'Фруктовый салат', weight: '200 г', description: '', price: 390, emoji: '🍓',
          image: 'images/dishes/fruktovyy-salat.jpg' },
          { name: 'Крем-суп из тыквы', weight: '250 г', description: '', price: 430, emoji: '🎃',
          image: 'images/dishes/krem-sup-iz-tykvy.jpg' },
          { name: 'Суп на курином бульоне с лапшой', weight: '250 г', description: '', price: 350, emoji: '🍲',
          image: 'images/dishes/sup-na-kurinom-bulone-s-lapshoy.jpg' },
          { name: 'Пицца Пепперони', weight: '400 г', description: '', price: 490, emoji: '🍕',
          image: 'images/dishes/pitstsa-pepperoni.jpg' },
          { name: 'Пицца с курицей', weight: '400 г', description: '', price: 450, emoji: '🍕',
          image: 'images/dishes/pitstsa-s-kuritsey.jpg' },
          { name: 'Пицца Цезарь', weight: '400 г', description: '', price: 490, emoji: '🍕',
          image: 'images/dishes/pitstsa-tsezar.jpg' },
          { name: 'Пельмешки с бульоном', weight: '250 г', description: '', price: 290, emoji: '🥟',
          image: 'images/dishes/pelmeshki-s-bulonom.jpg' },
          { name: 'Наггетсы', weight: '150 г', description: '', price: 350, emoji: '🍗',
          image: 'images/dishes/naggetsy.jpg' },
          { name: 'Картофель фри', weight: '150 г', description: '', price: 250, emoji: '🍟',
          image: 'images/dishes/kartofel-fri.jpg' },
          { name: 'Картофель по-деревенски', weight: '150 г', description: '', price: 150, emoji: '🥔',
          image: 'images/dishes/kartofel-po-derevenski.jpg' },
          { name: 'Макароны с сыром', weight: '150 г', description: '', price: 250, emoji: '🧀',
          image: 'images/dishes/makarony-s-syrom.jpg' }
        ]
      },

      // Информация (как в печатном меню)
      {
        category: 'О ресторане',
        items: [
          {
            name: 'Приветственное слово',
            weight: '',
            description:
              'Дорогие друзья, ваше п��сещение нашего ресторана — большая честь для нас. Ресторан «Жамэль», расположенный в самом центре города, стремится предложить лучшую армянскую кухню: блюда по древним рецептам, авторские позиции от шеф-поваров и тёплую атмосферу. Мы будем рады видеть вас снова!',
            price: '',
            emoji: 'ℹ️',
          image: 'images/dishes/privetstvennoe-slovo.jpg'
          }
        ]
      },
      {
        category: 'Информация',
        items: [
          {
            name: 'Армянский алфавит — это Всемогущему Богу',
            weight: '',
            description: 'Раздел из печатного меню. (Если нужно — могу оформить отдельным блоком на странице.)',
            price: '',
            emoji: '📜',
          image: 'images/dishes/armyanskiy-alfavit-eto-vsemogushchemu-bogu.jpg'
          }
        ]
      }
    ]
  },

  bar: {
    id: 'bar',
    title: 'Жамэль — Бар',
    subtitle: 'Барное меню',
    categories: [
      {
        category: 'Коктейли',
        items: [
          { name: 'Апероль Спритц', weight: '400 мл', description: '', price: 500, emoji: '🍹',
          image: 'images/dishes/aperol-spritts.jpg' },
          { name: 'Лонг-Айленд', weight: '300 мл', description: '', price: 500, emoji: '🍹',
          image: 'images/dishes/long-aylend.jpg' },
          { name: 'Зелёная фея', weight: '300 мл', description: '', price: 500, emoji: '🍹',
          image: 'images/dishes/zelyonaya-feya.jpg' },
          { name: 'Мохито', weight: '300 мл', description: '', price: 450, emoji: '🍹',
          image: 'images/dishes/mokhito.jpg' },
          { name: 'Киви бум', weight: '300 мл', description: '', price: 450, emoji: '🍹',
          image: 'images/dishes/kivi-bum.jpg' },
          { name: 'Пина Колада', weight: '300 мл', description: '', price: 450, emoji: '🍹',
          image: 'images/dishes/pina-kolada.jpg' },
          { name: 'Текила санрайз', weight: '300 мл', description: '', price: 400, emoji: '🍹',
          image: 'images/dishes/tekila-sanrayz.jpg' },
          { name: 'Джин Тоник', weight: '400 мл', description: '', price: 400, emoji: '🍹',
          image: 'images/dishes/dzhin-tonik.jpg' },
          { name: 'Арбузный бум', weight: '300 мл', description: '', price: 450, emoji: '🍹',
          image: 'images/dishes/arbuznyy-bum.jpg' },
          { name: 'Маргарита', weight: '160 мл', description: '', price: 400, emoji: '🍹',
          image: 'images/dishes/margarita.jpg' },
          { name: 'Виски-кола', weight: '300 мл', description: '', price: 400, emoji: '🥃',
          image: 'images/dishes/viski-kola.jpg' },
          { name: 'Глинтвейн', weight: '160 мл', description: '', price: 400, emoji: '🍷',
          image: 'images/dishes/glintveyn.jpg' }
        ]
      },

      {
        category: 'Домашние лимонады',
        items: [
          { name: 'Манго-Маракуйя', weight: '0.3 л / 1 л', description: '', price: '250 / 450', emoji: '🍋',
          image: 'images/dishes/mango-marakuyya.jpg' },
          { name: 'Малина-Личи', weight: '0.3 л / 1 л', description: '', price: '250 / 450', emoji: '🍋',
          image: 'images/dishes/malina-lichi.jpg' },
          { name: 'Эстрагон-Киви', weight: '0.3 л / 1 л', description: '', price: '250 / 450', emoji: '🍋',
          image: 'images/dishes/estragon-kivi.jpg' },
          { name: 'Гранат-Клубника', weight: '0.3 л / 1 л', description: '', price: '250 / 450', emoji: '🍋',
          image: 'images/dishes/granat-klubnika.jpg' },
          { name: 'Персик-Жасмин', weight: '0.3 л / 1 л', description: '', price: '250 / 450', emoji: '🍋',
          image: 'images/dishes/persik-zhasmin.jpg' }
        ]
      },

      {
        category: 'Безалкогольные коктейли',
        items: [
          { name: 'Молочный коктейль (ваниль, клубника, шоколад)', weight: '300 мл', description: '', price: 350, emoji: '🥤',
          image: 'images/dishes/molochnyy-kokteyl.jpg' },
          { name: 'Какао с маршмеллоу', weight: '300 мл', description: '', price: 350, emoji: '☕',
          image: 'images/dishes/kakao-s-marshmellou.jpg' },
          { name: 'Горячий шоколад', weight: '300 мл', description: '', price: 350, emoji: '🍫',
          image: 'images/dishes/goryachiy-shokolad.jpg' }
        ]
      },

      {
        category: 'В ассортименте',
        items: [
          { name: 'Вода газ/не газ', weight: '500 мл', description: '', price: 220, emoji: '💧',
          image: 'images/dishes/voda-gaz-ne-gaz.jpg' },
          { name: 'Боржоми', weight: '500 мл', description: '', price: 300, emoji: '💧',
          image: 'images/dishes/borzhomi.jpg' },
          { name: 'Лимонад Двин (в ассортименте)', weight: '500 мл', description: '', price: 300, emoji: '🥤',
          image: 'images/dishes/limonad-dvin.jpg' },
          { name: 'Кока-кола стекло', weight: '330 мл', description: '', price: 270, emoji: '🥤',
          image: 'images/dishes/koka-kola-steklo.jpg' },
          { name: 'Кока-кола добрый', weight: '500 мл', description: '', price: 200, emoji: '🥤',
          image: 'images/dishes/koka-kola-dobryy.jpg' },
          { name: 'Кока-кола добрый стекло', weight: '250 мл', description: '', price: 270, emoji: '🥤',
          image: 'images/dishes/koka-kola-dobryy-steklo.jpg' },
          { name: 'Энергетический напиток', weight: '250 мл', description: '', price: 300, emoji: '⚡',
          image: 'images/dishes/energeticheskiy-napitok.jpg' },
          { name: 'Морс', weight: '250 мл', description: '', price: 250, emoji: '🫐',
          image: 'images/dishes/mors.jpg' },
          { name: 'Домашний компот (в ассортименте)', weight: '1 л', description: '', price: 450, emoji: '🍹',
          image: 'images/dishes/domashniy-kompot.jpg' }
        ]
      },

      {
        category: 'Чай',
        items: [
          { name: 'Ассам', weight: '800 мл', description: '', price: 350, emoji: '🫖',
          image: 'images/dishes/assam.jpg' },
          { name: 'Эрл-Грей', weight: '800 мл', description: '', price: 350, emoji: '🫖',
          image: 'images/dishes/erl-grey.jpg' },
          { name: 'Молочный Улун', weight: '800 мл', description: '', price: 350, emoji: '🫖',
          image: 'images/dishes/molochnyy-ulun.jpg' },
          { name: 'Сенча', weight: '800 мл', description: '', price: 350, emoji: '🫖',
          image: 'images/dishes/sencha.jpg' },
          { name: 'Таёжный', weight: '800 мл', description: '', price: 350, emoji: '🫖',
          image: 'images/dishes/tayozhnyy.jpg' },
          { name: 'Армянские традиции', weight: '800 мл', description: '', price: 350, emoji: '🫖',
          image: 'images/dishes/armyanskie-traditsii.jpg' },
          { name: 'Малина-мята', weight: '800 мл', description: '', price: 350, emoji: '🫖',
          image: 'images/dishes/malina-myata.jpg' },
          { name: 'Абрикос-персик', weight: '800 мл', description: '', price: 350, emoji: '🫖',
          image: 'images/dishes/abrikos-persik.jpg' },
          { name: 'Чилийская вишня', weight: '800 мл', description: '', price: 350, emoji: '🫖',
          image: 'images/dishes/chiliyskaya-vishnya.jpg' },
          { name: 'Гречишный', weight: '800 мл', description: '', price: 350, emoji: '🫖',
          image: 'images/dishes/grechishnyy.jpg' }
        ]
      },

      {
        category: 'Авторский чай',
        items: [
          { name: 'Смородина-мята', weight: '800 мл', description: '', price: 440, emoji: '🫖',
          image: 'images/dishes/smorodina-myata.jpg' },
          { name: 'Имбирный с яблоками', weight: '800 мл', description: '', price: 440, emoji: '🫖',
          image: 'images/dishes/imbirnyy-s-yablokami.jpg' },
          { name: 'Мандарин-облепиха', weight: '800 мл', description: '', price: 440, emoji: '🫖',
          image: 'images/dishes/mandarin-oblepikha.jpg' }
        ]
      },

      {
        category: 'Кофе',
        items: [
          { name: 'Эспрессо', weight: '30 мл', description: '', price: 190, emoji: '☕',
          image: 'images/dishes/espresso.jpg' },
          { name: 'Американо', weight: '160 мл', description: '', price: 190, emoji: '☕',
          image: 'images/dishes/amerikano.jpg' },
          { name: 'Капучино', weight: '300 мл', description: '', price: 300, emoji: '☕',
          image: 'images/dishes/kapuchino.jpg' },
          { name: 'Латте', weight: '330 мл', description: '', price: 290, emoji: '☕',
          image: 'images/dishes/latte.jpg' },
          { name: 'Флэт уайт', weight: '300 мл', description: '', price: 290, emoji: '☕',
          image: 'images/dishes/flet-uayt.jpg' },
          { name: 'Раф', weight: '300 мл', description: '', price: 290, emoji: '☕',
          image: 'images/dishes/raf.jpg' },
          { name: 'Глясе', weight: '300 мл', description: '', price: 290, emoji: '🍨',
          image: 'images/dishes/glyase.jpg' },
          { name: 'Бейлис капучино', weight: '160 мл', description: '', price: 300, emoji: '☕',
          image: 'images/dishes/beylis-kapuchino.jpg' },
          { name: 'Ирландский кофе', weight: '160 мл', description: '', price: 300, emoji: '☕',
          image: 'images/dishes/irlandskiy-kofe.jpg' },
          { name: 'Кофе по-восточному', weight: '60 мл', description: '', price: 160, emoji: '☕',
          image: 'images/dishes/kofe-po-vostochnomu.jpg' }
        ]
      },

      {
        category: 'Водка',
        items: [
          { name: 'Хаски', weight: '50 мл', description: '', price: 220, emoji: '🥃',
          image: 'images/dishes/khaski.jpg' },
          { name: 'Русский стандарт', weight: '50 мл', description: '', price: 250, emoji: '🥃',
          image: 'images/dishes/russkiy-standart.jpg' },
          { name: 'Кремлин', weight: '50 мл', description: '', price: 300, emoji: '🥃',
          image: 'images/dishes/kremlin.jpg' },
          { name: 'Мамонт', weight: '50 мл', description: '', price: 350, emoji: '🥃',
          image: 'images/dishes/mamont.jpg' },
          { name: 'Чистые россы', weight: '50 мл', description: '', price: 400, emoji: '🥃',
          image: 'images/dishes/chistye-rossy.jpg' },
          { name: 'Белуга', weight: '50 мл', description: '', price: 400, emoji: '🥃',
          image: 'images/dishes/beluga.jpg' }
        ]
      },

      {
        category: 'Водка Армения',
        items: [
          { name: 'Абрикосовая', weight: '50 мл', description: '', price: 280, emoji: '🥃',
          image: 'images/dishes/abrikosovaya.jpg' },
          { name: 'Тутовая', weight: '50 мл', description: '', price: 280, emoji: '🥃',
          image: 'images/dishes/tutovaya.jpg' },
          { name: 'Виноградная', weight: '50 мл', description: '', price: 280, emoji: '🥃',
          image: 'images/dishes/vinogradnaya.jpg' }
        ]
      },

      {
        category: 'Текила/Ром',
        items: [
          { name: 'Голд/Бланко', weight: '50 мл', description: '', price: 350, emoji: '🥃',
          image: 'images/dishes/gold-blanko.jpg' }
        ]
      },

      {
        category: 'Ликёры',
        items: [
          { name: 'Ягермейстер', weight: '50 мл', description: '', price: 350, emoji: '🥃',
          image: 'images/dishes/yagermeyster.jpg' },
          { name: 'Лимончелло', weight: '50 мл', description: '', price: 350, emoji: '🥃',
          image: 'images/dishes/limonchello.jpg' }
        ]
      },

      {
        category: 'Пиво',
        items: [
          { name: 'Айрон Вудс Стаут', weight: '500 мл', description: '', price: 350, emoji: '🍺',
          image: 'images/dishes/ayron-vuds-staut.jpg' },
          { name: 'Айсувайс пшеничное', weight: '500 мл', description: '', price: 350, emoji: '🍺',
          image: 'images/dishes/aysuvays-pshenichnoe.jpg' },
          { name: 'Петрус Трипль Эль', weight: '330 мл', description: '', price: 600, emoji: '🍺',
          image: 'images/dishes/petrus-tripl-el.jpg' },
          { name: 'Хайдерггер Хель Лагер', weight: '500 мл', description: '', price: 350, emoji: '🍺',
          image: 'images/dishes/khaydergger-khel-lager.jpg' },
          { name: 'Руж Дэ флер фильтр. Вишневый эль', weight: '500 мл', description: '', price: 350, emoji: '🍺',
          image: 'images/dishes/ruzh-de-fler-filtr-vishnevyy-el.jpg' },
          { name: 'Хугарден б/а', weight: '500 мл', description: '', price: 300, emoji: '🍺',
          image: 'images/dishes/khugarden-b-a.jpg' }
        ]
      },

      {
        category: 'Армянское пиво',
        items: [
          { name: 'Дилиджан', weight: '450 мл', description: '', price: 350, emoji: '🍺',
          image: 'images/dishes/dilidzhan.jpg' },
          { name: 'Киликия', weight: '500 мл', description: '', price: 350, emoji: '🍺',
          image: 'images/dishes/kilikiya.jpg' },
          { name: 'Гюмри', weight: '500 мл', description: '', price: 350, emoji: '🍺',
          image: 'images/dishes/gyumri.jpg' },
          { name: 'Александрополь', weight: '500 мл', description: '', price: 350, emoji: '🍺',
          image: 'images/dishes/aleksandropol.jpg' }
        ]
      },

      {
        category: 'Коньяк (Франция)',
        items: [
          { name: 'Мартель VS', weight: '50 мл', description: '', price: 700, emoji: '🥃',
          image: 'images/dishes/martel-vs.jpg' },
          { name: 'Мартель VSOP', weight: '50 мл', description: '', price: 1000, emoji: '🥃',
          image: 'images/dishes/martel-vsop.jpg' },
          { name: 'Хеннесси VS', weight: '50 мл', description: '', price: 600, emoji: '🥃',
          image: 'images/dishes/khennessi-vs.jpg' },
          { name: 'Хеннесси VSOP', weight: '50 мл', description: '', price: 1850, emoji: '🥃',
          image: 'images/dishes/khennessi-vsop.jpg' }
        ]
      },

      {
        category: 'Армянские коньяки',
        items: [
          { name: 'Арарат 5', weight: '50 мл', description: '', price: 450, emoji: '🥃',
          image: 'images/dishes/ararat-5.jpg' },
          { name: 'Арарат Ani 7', weight: '50 мл', description: '', price: 600, emoji: '🥃',
          image: 'images/dishes/ararat-ani-7.jpg' },
          { name: 'Арарат Axtamar 10', weight: '50 мл', description: '', price: 700, emoji: '🥃',
          image: 'images/dishes/ararat-axtamar-10.jpg' },
          { name: 'Арарат Dvin', weight: '50 мл', description: '', price: 1400, emoji: '🥃',
          image: 'images/dishes/ararat-dvin.jpg' },
          { name: 'Арарат Vaspurakan 15', weight: '50 мл', description: '', price: 1300, emoji: '🥃',
          image: 'images/dishes/ararat-vaspurakan-15.jpg' },
          { name: 'Арарат Nairi 20', weight: '50 мл', description: '', price: 1600, emoji: '🥃',
          image: 'images/dishes/ararat-nairi-20.jpg' },
          { name: 'Арарат Aznavour', weight: '50 мл', description: '', price: 3200, emoji: '🥃',
          image: 'images/dishes/ararat-aznavour.jpg' }
        ]
      },

      {
        category: 'Виски купажированный',
        items: [
          { name: 'Вильям Лоусонс', weight: '50 мл', description: '', price: 300, emoji: '🥃',
          image: 'images/dishes/vilyam-lousons.jpg' },
          { name: 'Чивас Ригал 12 лет', weight: '50 мл', description: '', price: 700, emoji: '🥃',
          image: 'images/dishes/chivas-rigal-12-let.jpg' },
          { name: 'Джеймсон', weight: '50 мл', description: '', price: 400, emoji: '🥃',
          image: 'images/dishes/dzheymson.jpg' },
          { name: 'Джек Дэниелс', weight: '50 мл', description: '', price: 600, emoji: '🥃',
          image: 'images/dishes/dzhek-deniels.jpg' }
        ]
      },

      {
        category: 'Виски односолодовый',
        items: [
          { name: 'Гленфиддик 12 лет', weight: '50 мл', description: '', price: 2000, emoji: '🥃',
          image: 'images/dishes/glenfiddik-12-let.jpg' },
          { name: 'Макаллан Трипл Каск', weight: '50 мл', description: '', price: 3000, emoji: '🥃',
          image: 'images/dishes/makallan-tripl-kask.jpg' },
          { name: 'Синглтон Даффтаун', weight: '50 мл', description: '', price: 1200, emoji: '🥃',
          image: 'images/dishes/singlton-dafftaun.jpg' }
        ]
      },

      {
        category: 'Вино белое',
        items: [
          { name: 'Пино гриджо (Италия)', weight: '750 мл', description: '', price: 3800, emoji: '🍷',
          image: 'images/dishes/pino-gridzho.jpg' },
          { name: 'Сакко гави (Италия)', weight: '750 мл', description: '', price: 2900, emoji: '🍷',
          image: 'images/dishes/sakko-gavi.jpg' },
          { name: 'Рислинг (Франция)', weight: '750 мл', description: '', price: 5200, emoji: '🍷',
          image: 'images/dishes/risling.jpg' },
          { name: 'Шабли (Франция)', weight: '750 мл', description: '', price: 5200, emoji: '🍷',
          image: 'images/dishes/shabli.jpg' },
          { name: 'Алазанская долина (Грузия)', weight: '750 мл', description: '', price: 2300, emoji: '🍷',
          image: 'images/dishes/alazanskaya-dolina.jpg' }
        ]
      },

      {
        category: 'Вино красное',
        items: [
          { name: 'Кьянти (Италия)', weight: '750 мл', description: '', price: 2600, emoji: '🍷',
          image: 'images/dishes/kyanti.jpg' },
          { name: 'Киндзмараули (Грузия)', weight: '750 мл', description: '', price: 2300, emoji: '🍷',
          image: 'images/dishes/kindzmarauli.jpg' },
          { name: 'Цвайгельт (Австрия)', weight: '750 мл', description: '', price: 2800, emoji: '🍷',
          image: 'images/dishes/tsvaygelt.jpg' },
          { name: 'Пино Нуар (Франция)', weight: '750 мл', description: '', price: 2900, emoji: '🍷',
          image: 'images/dishes/pino-nuar.jpg' },
          { name: 'Мальбек (Аргентина)', weight: '750 мл', description: '', price: 4000, emoji: '🍷',
          image: 'images/dishes/malbek.jpg' }
        ]
      },

      {
        category: 'Вино розовое',
        items: [
          { name: 'Пфеффер Пинк (Италия)', weight: '750 мл', description: '', price: 4000, emoji: '🍷',
          image: 'images/dishes/pfeffer-pink.jpg' },
          { name: 'Олд Коуч Роуд (Новая Зеландия)', weight: '750 мл', description: '', price: 3000, emoji: '🍷',
          image: 'images/dishes/old-kouch-roud.jpg' }
        ]
      },

      {
        category: 'Игристое',
        items: [
          { name: 'Martini Prosecco', weight: '187 мл / 750 мл', description: '', price: '1150 / 3750', emoji: '🥂',
          image: 'images/dishes/martini-prosecco.jpg' },
          { name: 'Martini Asti', weight: '187 мл / 750 мл', description: '', price: '1150 / 3750', emoji: '🥂',
          image: 'images/dishes/martini-asti.jpg' }
        ]
      },

      {
        category: 'Домашнее',
        items: [
          { name: 'Каберне красное сух.', weight: '150 мл', description: '', price: 300, emoji: '🍷',
          image: 'images/dishes/kaberne-krasnoe-sukh.jpg' },
          { name: 'Изабелла красное п/сл', weight: '150 мл', description: '', price: 300, emoji: '🍷',
          image: 'images/dishes/izabella-krasnoe-p-sl.jpg' },
          { name: 'Шардоне белое сух', weight: '150 мл', description: '', price: 300, emoji: '🍷',
          image: 'images/dishes/shardone-beloe-sukh.jpg' },
          { name: 'Шардоне белое п/сл', weight: '150 мл', description: '', price: 300, emoji: '🍷',
          image: 'images/dishes/shardone-beloe-p-sl.jpg' },
          { name: 'Ежевичное', weight: '150 мл', description: '', price: 350, emoji: '🍷',
          image: 'images/dishes/ezhevichnoe.jpg' },
          { name: 'Малиновое', weight: '150 мл', description: '', price: 350, emoji: '🍷',
          image: 'images/dishes/malinovoe.jpg' },
          { name: 'Гранатовое', weight: '150 мл', description: '', price: 350, emoji: '🍷',
          image: 'images/dishes/granatovoe.jpg' }
        ]
      }
    ]
  },

  lenten: {
    id: 'lenten',
    title: 'Жамэль — Постное',
    subtitle: 'Постное меню',
    categories: [
      {
        category: 'Салаты',
        items: [
          { name: 'Хумус', weight: '', description: '', price: 520, emoji: '🌿',
          image: 'images/dishes/khumus.jpg' },
          { name: 'Табуле', weight: '', description: '', price: 520, emoji: '🌿',
          image: 'images/dishes/tabule.jpg' },
          { name: 'Авелук с грецким орехом', weight: '', description: '', price: 600, emoji: '🌿',
          image: 'images/dishes/aveluk-s-gretskim-orekhom.jpg' },
          { name: 'Лобио из красной фасоли', weight: '', description: '', price: 600, emoji: '🌿',
          image: 'images/dishes/lobio-iz-krasnoy-fasoli.jpg' },
          { name: 'Овощной салат с фирменным соусом и орехами', weight: '', description: '', price: 620, emoji: '🥗',
          image: 'images/dishes/ovoshchnoy-salat-s-firmennym-sousom-i-orekhami.jpg' },
          { name: 'Теплый салат с жареными овощами', weight: '', description: '', price: 620, emoji: '🥗',
          image: 'images/dishes/teplyy-salat-s-zharenymi-ovoshchami.jpg' },
          { name: 'Фруктовое блаженство', weight: '', description: '', price: 540, emoji: '🍓',
          image: 'images/dishes/fruktovoe-blazhenstvo.jpg' },
          { name: 'Зеленый микс салат с авокадо и лимонной заправкой', weight: '', description: '', price: 610, emoji: '🥑',
          image: 'images/dishes/zelenyy-miks-salat-s-avokado-i-limonnoy-zapravkoy.jpg' }
        ]
      },
      {
        category: 'Супы',
        items: [
          { name: 'Гороховый суп с копченными шампиньонами', weight: '', description: '', price: 600, emoji: '🍲',
          image: 'images/dishes/gorokhovyy-sup-s-kopchennymi-shampinonami.jpg' },
          { name: 'Чечевичный суп с ароматными армянскими травами', weight: '', description: '', price: 600, emoji: '🍲',
          image: 'images/dishes/chechevichnyy-sup-s-aromatnymi-armyanskimi-travami.jpg' },
          { name: 'Крем суп из тыквы', weight: '', description: '', price: 600, emoji: '🎃',
          image: 'images/dishes/krem-sup-iz-tykvy.jpg' },
          { name: 'Суп из гриль-овощей', weight: '', description: '', price: 600, emoji: '🍲',
          image: 'images/dishes/sup-iz-gril-ovoshchey.jpg' }
        ]
      },
      {
        category: 'Выпечка из печи',
        items: [
          { name: 'Пицца с овощами', weight: '', description: '', price: 650, emoji: '🍕',
          image: 'images/dishes/pitstsa-s-ovoshchami.jpg' },
          { name: 'Хачапури со шпинатом', weight: '', description: '', price: 650, emoji: '🫓',
          image: 'images/dishes/khachapuri-so-shpinatom.jpg' },
          { name: 'Ламаджо с фасолью', weight: '1 шт', description: '', price: 500, emoji: '🫓',
          image: 'images/dishes/lamadzho-s-fasolyu.jpg' }
        ]
      },
      {
        category: 'Горячие блюда',
        items: [
          { name: 'Долма с булгуром', weight: '', description: '', price: 650, emoji: '🍃',
          image: 'images/dishes/dolma-s-bulgurom.jpg' },
          { name: 'Овощи на мангале', weight: '', description: '', price: 600, emoji: '🥦',
          image: 'images/dishes/ovoshchi-na-mangale.jpg' },
          { name: 'Картофель на мангале', weight: '100 г', description: '', price: 200, emoji: '🥔',
          image: 'images/dishes/kartofel-na-mangale.jpg' },
          { name: 'Шампиньоны на мангале', weight: '100 г', description: '', price: 300, emoji: '🍄',
          image: 'images/dishes/shampinony-na-mangale.jpg' }
        ]
      },
      {
        category: 'Десерт',
        items: [
          { name: 'Запеченные яблоки с орехом и медом', weight: '1 шт', description: '', price: 500, emoji: '🍎',
          image: 'images/dishes/zapechennye-yabloki-s-orekhom-i-medom.jpg' }
        ]
      }
    ]
  }
}; // ✅ ВОТ ЭТОГО ЗАКРЫТИЯ У ТЕБЯ НЕ ХВАТАЛО

let currentMenuId = 'main';

function priceText(p) {
  if (p === null || p === undefined || p === '') return '';
  // оставляем как у тебя: просто добавляем " ₽" к любому значению
  return `${p} ₽`;
}

function safeEmoji(e) {
  const s = (e ?? '').toString().trim();
  return s || '🍽️';
}

function getCurrentMenu() {
  return MENUS[currentMenuId] || MENUS.main;
}

function setHeader(title, subtitle) {
  const titleEl = document.querySelector('header h1');
  const subEl = document.querySelector('header .subtitle');
  if (titleEl) titleEl.textContent = title;
  if (subEl) subEl.textContent = subtitle;
}

function slugifyCategory(name) {
  return (name || '')
    .toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\p{L}\p{N}\-]+/gu, ''); // сохраняем кириллицу/буквы/цифры
}

function renderMenu(categories) {
  const container = document.getElementById('menuContainer');
  if (!container) return;

  container.innerHTML = '';

  categories.forEach(cat => {
    const section = document.createElement('section');
    section.className = 'category-section';

    // Якорь для скролла
    const catId = `cat-${slugifyCategory(cat.category)}`;
    section.id = catId;

    const h2 = document.createElement('h2');
    h2.className = 'category-title';
    h2.textContent = cat.category;
    section.appendChild(h2);

    const grid = document.createElement('div');
    grid.className = 'menu-grid';

    (cat.items || []).forEach(item => {
      const card = document.createElement('div');
      card.className = 'menu-item';

      const p = priceText(item.price);
      const w = (item.weight ?? '').toString().trim();

      card.innerHTML = `
        <div class="item-image">
          <img
            src="${item.image || 'images/dishes/placeholder.svg'}"
            alt="${item.name || 'Блюдо'}"
            loading="lazy"
            onerror="this.src='images/dishes/placeholder.svg'"
          />
        </div>
        <h3 class="item-name">${item.name || ''}</h3>
        ${w ? `<p class="item-weight">${w}</p>` : ''}
        <p class="item-description">${item.description || ''}</p>
        ${p ? `<p class="item-price">${p}</p>` : ''}
      `;

      grid.appendChild(card);
    });

    section.appendChild(grid);
    container.appendChild(section);
  });
}

function rebuildCategoryButtons(menuObj) {
  const navContainer = document.querySelector('.menu-nav .nav-controls');
  if (!navContainer) return;

  navContainer.innerHTML = '';

  const mkBtn = (label, onClick) => {
    const b = document.createElement('button');
    b.className = 'nav-btn';
    b.type = 'button';
    b.textContent = label;
    b.addEventListener('click', onClick);
    return b;
  };

  // "Всё меню" = наверх к началу меню
  navContainer.appendChild(
    mkBtn('Всё меню', () => {
      const first = document.querySelector('#menuContainer');
      if (first) first.scrollIntoView({ behavior: 'smooth', block: 'start' });
      collapseCategories(true);
    })
  );

  // Кнопки категорий -> скролл к секции
  menuObj.categories.forEach(c => {
    navContainer.appendChild(
      mkBtn(c.category, () => {
        const id = `cat-${slugifyCategory(c.category)}`;
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        collapseCategories(true);
      })
    );
  });
}

function ensureMenuSwitch() {
  if (document.getElementById('menuSwitch')) return;

  const nav = document.querySelector('.menu-nav');
  if (!nav) return;

  const wrap = document.createElement('div');
  wrap.id = 'menuSwitch';
  wrap.style.display = 'flex';
  wrap.style.gap = '10px';
  wrap.style.justifyContent = 'center';
  wrap.style.flexWrap = 'wrap';
  wrap.style.margin = '10px 0 14px';

  const mk = (id, label) => {
    const b = document.createElement('button');
    b.className = 'nav-btn';
    b.dataset.menu = id;
    b.textContent = label;
    b.addEventListener('click', () => setMenu(id));
    return b;
  };

  wrap.appendChild(mk('main', '🍽️ Основное'));
  wrap.appendChild(mk('bar', '🍷 Барное'));
  wrap.appendChild(mk('lenten', '🌿 Постное'));

  nav.insertBefore(wrap, nav.firstChild);
}

function updateMenuSwitchActive() {
  document.querySelectorAll('#menuSwitch .nav-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.menu === currentMenuId);
  });
}

function setMenu(menuId) {
  if (!MENUS[menuId]) return;

  currentMenuId = menuId;
  const menuObj = getCurrentMenu();

  setHeader(menuObj.title, menuObj.subtitle);
  ensureMenuSwitch();
  updateMenuSwitchActive();

  rebuildCategoryButtons(menuObj);

  const searchInput = document.getElementById('searchInput');
  if (searchInput) searchInput.value = '';

  renderMenu(menuObj.categories);
}

function initSearch() {
  const searchInput = document.getElementById('searchInput');
  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    const q = (e.target.value || '').toLowerCase();
    const menuObj = getCurrentMenu();

    if (!q) {
      renderMenu(menuObj.categories);
      return;
    }

    const filtered = menuObj.categories
      .map(c => ({
        ...c,
        items: (c.items || []).filter(i =>
          (i.name || '').toLowerCase().includes(q) ||
          (i.description || '').toLowerCase().includes(q) ||
          (i.weight || '').toLowerCase().includes(q)
        )
      }))
      .filter(c => c.items.length > 0);

    renderMenu(filtered);
  });
}

function initScrollToTop() {
  const scrollBtn = document.getElementById('scrollToTop');
  if (!scrollBtn) return;

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) scrollBtn.classList.add('show');
    else scrollBtn.classList.remove('show');
  });

  scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function collapseCategories(collapsed) {
  const nav = document.querySelector('.menu-nav');
  if (!nav) return;

  nav.classList.toggle('is-collapsed', Boolean(collapsed));
}

function initCategoryCollapse() {
  const btn = document.getElementById('toggleCategories');
  if (!btn) return;

  // стартуем в свернутом режиме на моби��ьных
  if (window.innerWidth < 768) collapseCategories(true);

  btn.addEventListener('click', () => {
    const nav = document.querySelector('.menu-nav');
    const isCollapsed = nav ? nav.classList.contains('is-collapsed') : false;
    collapseCategories(!isCollapsed);
  });

  // Автосворачивание при прокрутке вниз (чтобы не мешало)
  let lastY = window.scrollY;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;

    // вниз — сворачиваем
    if (y > lastY && y > 200) collapseCategories(true);

    // вверх немного — можно оставить как есть (не разворачиваем автоматически)
    lastY = y;
  }, { passive: true });
}

document.addEventListener('DOMContentLoaded', () => {
  ensureMenuSwitch();
  initSearch();
  initScrollToTop();
  initCategoryCollapse();
  setMenu('main');
});
