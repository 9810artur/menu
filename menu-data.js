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
          { name: 'Овощной букет', weight: '450 г', description: 'Помидоры, огурцы, острый перец, зелень. (На премиум помидоре +30%)', price: 870, emoji: '🥗' },
          { name: 'Зелёная грядка', weight: '100 г', description: 'Ассорти кавказской зелени', price: 450, emoji: '🌿' },
          { name: 'Острый перец', weight: '1 шт', description: '', price: 250, emoji: '🌶️' },
          { name: 'Ассорти сыров из Армении', weight: '250 г', description: 'Сыр чанах, лори, чечил', price: 790, emoji: '🧀' },
          { name: 'Ассорти европейских сыров', weight: '300 г', description: 'Пармезан, песто, дорблю, камамбер, мёд, грецкий орех', price: 890, emoji: '🧀' },
          { name: 'Мясной сундучок', weight: '150 г', description: 'Суджук и бастурма, а также сало домашнее', price: 920, emoji: '🥩' },
          { name: 'Ассорти мясных деликатесов', weight: '250 г', description: 'Буженина собственного приготовления, язык говяжий, колбаса и куриный рулет с горчичным соусом', price: 850, emoji: '🥩' },
          { name: 'Говяжий язычок', weight: '130 г', description: 'Язык говяжий отварной с соусом хрена', price: 690, emoji: '🍖' },
          { name: 'Ассорти рыбное', weight: '200 г', description: 'Лосось с/с, сом копчёный, масляная рыба, тунец холодного копчения, лимон', price: 1050, emoji: '🐟' },
          { name: 'Сельдь с картофелем', weight: '200 г', description: 'Сельдь, отварной картофель', price: 480, emoji: '🐟' },
          { name: 'Рулетики из баклажанов', weight: '5 шт', description: 'С баклажаном, творожным сыром и грецким орехом', price: 550, emoji: '🍆' },
          { name: 'Армянский погребок', weight: '400 г', description: 'Соленья в ассортименте', price: 750, emoji: '🥒' },
          { name: 'Лобио', weight: '250 г', description: 'Блюдо из красной фасоли с грецким орехом и чесноком', price: 490, emoji: '🫘' },
          { name: 'Оливки, маслины', weight: '150 г', description: '', price: 420, emoji: '🫒' },
          { name: 'Хлебная корзина', weight: '', description: 'Лепёшка, лаваш', price: 220, emoji: '🥖' },
          { name: 'Лаваш', weight: '', description: 'Армянская тонкая лепёшка', price: 120, emoji: '🫓' },
          { name: 'Лепёшка', weight: '', description: '', price: 120, emoji: '🫓' }
        ]
      },

      {
        category: 'Салаты',
        items: [
          { name: 'Тёплый салат Жамэль', weight: '230 г', description: 'Нежный цыплёнок с брокколи и шампиньонами', price: 570, emoji: '🥗' },
          { name: 'Тёплый салат с Авелуком', weight: '200 г', description: 'Салат из горного щавеля-авелука с грецкими орехами и чесноком', price: 480, emoji: '🌿' },
          { name: 'Салат Ереван', weight: '200 г', description: 'С телятиной, запечёнными баклажанами и фирме��ным соусом', price: 730, emoji: '🥗' },
          { name: 'Салат Табуле', weight: '230 г', description: 'Традиционный овощной салат в западно-армянском стиле с булгуром', price: 480, emoji: '🥗' },

          { name: 'Салат Амберд', weight: '200 г', description: 'Куриное филе с грибами, маслинами, грецкими орехами и зёрнами граната (в корзиночках из лаваша)', price: 690, emoji: '🥗' },
          { name: 'Микс салата с креветками и авокадо', weight: '200 г', description: 'С тигровыми креветками и авокадо, с добавлением кедрового ореха и бальзамического соуса', price: 720, emoji: '🍤' },
          { name: 'Стейк салат с обжаренными овощами', weight: '230 г', description: 'Тёплый салат с жареной телячьей вырезкой и нежными овощами', price: 750, emoji: '🥩' },
          { name: 'Салат Старый Тбилиси', weight: '200 г', description: 'Телятина, красная фасоль, грецкий орех, чесночная заправка, лук и специи', price: 670, emoji: '🥗' },
          { name: 'Салат с сыром Бурратто', weight: '250 г', description: 'С бурратто, рукколой и томатами', price: 700, emoji: '🧀' },
          { name: 'Овощной салат по-домашнему', weight: '250 г', description: '', price: 480, emoji: '🥗' },
          { name: 'Салат Морская жемчужина', weight: '200 г', description: 'Морской коктейль с салатным миксом и вялеными томатами, со специальным соусом', price: 750, emoji: '🦑' },
          { name: 'Салат Столичный (краб / говядина / курица)', weight: '230 г', description: '', price: '520 / 590 / 520', emoji: '🥗' },
          { name: 'Цезарь (курица / креветки)', weight: '200 г', description: '', price: '590 / 690', emoji: '🥗' },
          { name: 'Салат Греческий', weight: '200 г', description: '', price: 480, emoji: '🥗' }
        ]
      },

      {
        category: 'Супы',
        items: [
          { name: 'Спас', weight: '250 г', description: 'Суп из мацуна с пшеницей и маслом', price: 450, emoji: '🍲' },
          { name: 'Хашлама (ягнёнок/телятина)', weight: '300 г', description: 'Армянский суп. Сладкий перец, томаты и картофель', price: 490, emoji: '🍲' },
          { name: 'Пити с бараниной', weight: '300 г', description: 'Суп из нута с кусочками баранины', price: 490, emoji: '🍲' },
          { name: 'Харчо (ягнёнок/телятина)', weight: '300 г', description: 'Острый суп с рисом и томатной поджаркой', price: 490, emoji: '🍲' },
          { name: 'Борщ домашний', weight: '300 г', description: '', price: 490, emoji: '🍲' },
          { name: 'Лагман', weight: '300 г', description: 'С домашней лапшой', price: 490, emoji: '🍜' },
          { name: 'Крем-суп из тыквы', weight: '250 г', description: 'Тыква с собственными семечками', price: 430, emoji: '🎃' },
          { name: 'Крем-суп из брокколи', weight: '250 г', description: 'Насыщенный густой суп из нежной брокколи', price: 430, emoji: '🥦' },
          { name: 'Суп Том Ям', weight: '300 г', description: 'Острый азиатский суп с морепродуктами. Подаётся с отварным рисом', price: 490, emoji: '🍤' }
        ]
      },

      {
        category: 'Горячие закуски',
        items: [
          { name: 'Ханума', weight: '3 шт / 200 г или 10 шт / 700 г', description: 'Розы с начинкой из мясного фарша и лука, готовятся в томатном соусе', price: '390 / 990', emoji: '🥟' },
          { name: 'Долма', weight: '250 г', description: 'Виноградные листья с говядиной. Подаётся с соусом из мацуна', price: 520, emoji: '🍃' },
          { name: 'Цукини-гриль с креветками и сливочным соусом', weight: '250 г', description: '', price: 820, emoji: '🍤' },
          { name: 'Мидии запечённые с грибами и сыром', weight: '250 г', description: 'Зелёные мидии, фаршированные шампиньонами и сыром моцарелла', price: 520, emoji: '🦪' },
          { name: 'Жульен из курицы с грибами', weight: '250 г', description: '', price: 500, emoji: '🍄' },
          { name: 'Арге��тинские креветки в медово-горчичном соусе', weight: '150 г', description: 'Лангустины в медово-горчичном соусе', price: 920, emoji: '🍤' }
        ]
      },

      {
        category: 'Выпечка из печи',
        items: [
          { name: 'Ламаджо', weight: '', description: 'Армянская тонкая лепёшка с мясным фаршем. Подаётся с таном и лимоном', price: 450, emoji: '🫓' },
          { name: 'Бюрек', weight: '600 г', description: 'Рулет с начинкой из мясного фарша со специями', price: 750, emoji: '🥖' },
          { name: 'Хачбургер (говядина)', weight: '300 г', description: 'Из дрожжевого теста с говяжьим фаршем и сыром моцарелла', price: 500, emoji: '🍔' },
          { name: 'Пицца с бастурмой', weight: '400 г', description: '', price: 720, emoji: '🍕' },
          { name: 'Пицца с курицей', weight: '400 г', description: '', price: 450, emoji: '🍕' },
          { name: 'Пицца Пепперони', weight: '400 г', description: '', price: 490, emoji: '🍕' }
        ]
      },

      {
        category: 'Дары Кавказа',
        items: [
          { name: 'Хачапури по-аджарски', weight: '400 г', description: 'Лодочка с сыром сулугуни, яйцом и маслом', price: 500, emoji: '🫓' },
          { name: 'Хачапури по-мегрельски', weight: '500 г', description: 'С сыром сулугуни, перед выпечкой посыпаются ещё одним слоем сыра', price: 600, emoji: '🫓' },
          { name: 'Хачапури со шпинатом', weight: '500 г', description: 'Со шпинатом и обжаренным кедровым орехом', price: 650, emoji: '🫓' },
          { name: 'Хинкали (говядина/баранина)', weight: '4 шт', description: '', price: 450, emoji: '🥟' },
          { name: 'Обжаренные хинкали (говядина/баранина)', weight: '4 шт', description: 'С добавлением свежей зелени и ароматных специй', price: 520, emoji: '🥟' },
          { name: 'Грузинские чашушули', weight: '300 г', description: 'С ароматом тархуна и кинзой', price: 620, emoji: '🍲' }
        ]
      },

      {
        category: 'Омлеты',
        items: [
          { name: 'Яичница с помидорами', weight: '250 г', description: '', price: 410, emoji: '🍳' },
          { name: 'Яичница с бастурмой', weight: '180 г', description: '', price: 450, emoji: '🍳' },
          { name: 'Яичница с беконом', weight: '180 г', description: '', price: 450, emoji: '🍳' },
          { name: 'Шушан', weight: '250 г', description: 'Мандак — тушёная армянская зелень с яйцом в сливочном масле', price: 420, emoji: '🌿' }
        ]
      },

      {
        category: 'Горячие блюда',
        items: [
          { name: 'Ариса с домашней курицей', weight: '300 г', description: 'Традиционное армянское пшеничное ризотто. Подаётся со сливочным маслом', price: 690, emoji: '🍚' },
          { name: 'Гарни ярах', weight: '300 г', description: 'Блюдо с баклажаном и фаршем из нежной телячьей мякоти', price: 580, emoji: '🍆' },
          { name: 'Толма традиционная в капустных листьях', weight: '300 г', description: 'Старинное блюдо с добавлением армянских горных трав', price: 690, emoji: '🥬' },
          { name: 'Тжвжик Армянский', weight: '300 г', description: 'Из телячьей печени и сердца в томатном соусе', price: 610, emoji: '🍲' },
          { name: 'Тжвжик с гранатом', weight: '300 г', description: 'Кусочки говяжьей печени с гранатовым соусом', price: 610, emoji: '🍲' },
          { name: 'Плов по-армянски', weight: '300 г', description: 'Из полбы с репчатым луком и жареными шампиньонами', price: 400, emoji: '🍚' },
          { name: 'Мормор из ягнёнка', weight: '300 г', description: '', price: 800, emoji: '🍖' },
          { name: 'Нор Баязет', weight: '300 г', description: 'Нежнейший молочный телёнок с обжаренными овощами', price: 740, emoji: '🥩' },
          { name: 'Арарат', weight: '300 г', description: 'Телятина с овощами, грибами и маслинами в сливочном соусе', price: 700, emoji: '🥩' },
          { name: 'Ванакат', weight: '350 г', description: 'Пикантные кусочки свинины в овощном соусе с красной фасолью и тыквенными семечками', price: 750, emoji: '🍖' },
          { name: 'Керусус', weight: '300 г', description: 'Молотая телятина с солёными огурцами и овощами в томатном соке', price: 690, emoji: '🍲' },

          { name: 'Жаркое по-домашнему', weight: '300 г', description: 'Домашняя свинина с картофелем и овощами', price: 650, emoji: '🍲' },
          { name: 'Хрустящий цыплёнок с картофелем по-деревенски', weight: '420 г', description: 'Цыплёнок корнишон, маринованный в специях и обжаренный до золотистой корочки', price: 710, emoji: '🍗' },
          { name: 'Плов из телятины', weight: '350 г', description: 'С рисом и барбарисом', price: 530, emoji: '🍚' },
          { name: 'Форель запечённая с овощами', weight: '350 г', description: 'Целая форель со сливочным маслом и овощами', price: 950, emoji: '🐟' },
          { name: 'Сёмга «Жамэль»', weight: '350 г', description: 'Авторское блюдо нежного лосося с диким рисом', price: 1100, emoji: '🐟' },
          { name: '«Пьяная Сёмга» в белом вине', weight: '250 г', description: 'Стейк из сёмги, пропитанный белым вином (подаётся с бокалом белого вина)', price: 1100, emoji: '🍷' }
        ]
      },

      {
        category: 'Паста',
        items: [
          { name: 'Паста с морепродуктами', weight: '350 г', description: 'В белом сухом вине с сыром Пармиджано', price: 650, emoji: '🍝' },
          { name: 'Паста Болоньезе', weight: '350 г', description: 'С телячьим фаршем в красном вине, томатом и сыром Пармиджано', price: 560, emoji: '🍝' },
          { name: 'Паста Карбонара', weight: '350 г', description: '', price: 640, emoji: '🍝' }
        ]
      },

      {
        category: 'Гарниры',
        items: [
          { name: 'Картофель фри', weight: '150 г', description: '', price: 250, emoji: '🍟' },
          { name: 'Картофельное пюре', weight: '150 г', description: '', price: 160, emoji: '🥔' },
          { name: 'Картофель по-деревенски', weight: '150 г', description: '', price: 250, emoji: '🥔' },
          { name: 'Аришта армянская лапша', weight: '150 г', description: '', price: 300, emoji: '🍜' },
          { name: 'Ризотто', weight: '150 г', description: '', price: 300, emoji: '🍚' }
        ]
      },

      {
        category: 'Блюда, приготовленные на углях / Сочные шашлыки на мангале',
        items: [
          { name: 'Ассорти из шашлыков', weight: '1000 г', description: '', price: 3300, emoji: '🔥' },
          { name: 'Шашлык из каре ягнёнка', weight: '100 г', description: '', price: 510, emoji: '🍖' },
          { name: 'Шашлык яблочко барашка', weight: '100 г', description: '', price: 510, emoji: '🍖' },
          { name: 'Шашлык из баранины', weight: '100 г', description: '', price: 470, emoji: '🍖' },
          { name: 'Шашлык из баранины «Семечки»', weight: '100 г', description: '', price: 470, emoji: '🍖' },
          { name: 'Шашлык из бараньих яиц', weight: '100 г', description: '', price: 350, emoji: '🍖' },
          { name: 'Шашлык из бараньих почек', weight: '100 г', description: '', price: 300, emoji: '🍖' },
          { name: 'Икибир', weight: '1 шампур', description: '', price: 510, emoji: '🔥' },
          { name: 'Шашлык из свиной шейки', weight: '100 г', description: '', price: 340, emoji: '🍖' },
          { name: 'Шашлык из свиных рёбер', weight: '100 г', description: '', price: 330, emoji: '🍖' },
          { name: 'Антрекот из свинины', weight: '100 г', description: '', price: 330, emoji: '🍖' },
          { name: 'Шашлык из телятины', weight: '100 г', description: '', price: 550, emoji: '🍖' },
          { name: 'Шашлык из говяжьего сердца', weight: '100 г', description: '', price: 235, emoji: '🍖' },
          { name: 'Шашлык из говяжьей печени', weight: '100 г', description: '', price: 245, emoji: '🍖' },
          { name: 'Шашлык из куриных крыльев', weight: '100 г', description: '', price: 225, emoji: '🍗' },
          { name: 'Шашлык из курицы', weight: '100 г', description: '', price: 270, emoji: '🍗' },
          { name: 'Люля из курицы', weight: '180 г', description: '', price: 500, emoji: '🍢' },
          { name: 'Люля из баранины', weight: '180 г', description: '', price: 550, emoji: '🍢' },
          { name: 'Люля из телятины', weight: '180 г', description: '', price: 520, emoji: '🍢' },

          { name: 'Дорадо на мангале', weight: '1 шт', description: '', price: 950, emoji: '🐟' },
          { name: 'Сибас на мангале', weight: '1 шт', description: '', price: 950, emoji: '🐟' },
          { name: 'Форель на мангале', weight: '1 шт', description: '', price: 950, emoji: '🐟' },
          { name: 'Шашлык из семги', weight: '180 г', description: '', price: 1300, emoji: '🐟' },
          { name: 'Картофель на вертеле', weight: '100 г', description: '', price: 175, emoji: '🥔' },
          { name: 'Шампиньоны на вертеле', weight: '100 г', description: '', price: 265, emoji: '🍄' },
          { name: 'Овощи на вертеле', weight: '', description: 'Рагу + 15%', price: 450, emoji: '🥦' }
        ]
      },

      {
        category: 'Закуски для любителей пива',
        items: [
          { name: 'Пивной сет №1', weight: '900 г', description: 'Картофель по-деревенски, кольца кальмара, хрустящие гренки, луковые кольца, сырные палочки', price: 890, emoji: '🍺' },
          { name: 'Пивной сет №2', weight: '1200 г', description: 'Куриные крылья терияки, свиные рёбрышки барбекю, жареные охотничьи колбаски, картофель по-деревенски, кольца кальмара, хрустящие гренки, луковые кольца', price: 1820, emoji: '🍺' },
          { name: 'Сырные палочки с соусом сладкий чили', weight: '150 г', description: '', price: 390, emoji: '🧀' },
          { name: 'Луковые кольца', weight: '150 г', description: '', price: 340, emoji: '🧅' },
          { name: 'Кольца кальмара', weight: '150 г', description: '', price: 520, emoji: '🦑' },
          { name: 'Куриные крылья с соусом терияки', weight: '150 г', description: '', price: 390, emoji: '🍗' },
          { name: 'Свиные рёбрышки под соусом барбекю', weight: '150 г', description: '', price: 490, emoji: '🍖' }
        ]
      },

      {
        category: 'Соусы',
        items: [
          { name: 'Аджика', weight: '50 г', description: '', price: 100, emoji: '🌶️' },
          { name: 'Кетчуп', weight: '50 г', description: '', price: 100, emoji: '🍅' },
          { name: 'Гранатовый', weight: '50 г', description: '', price: 100, emoji: '🍎' },
          { name: 'Шашлычный', weight: '50 г', description: '', price: 100, emoji: '🥣' },
          { name: 'Ткемали', weight: '50 г', description: '', price: 100, emoji: '🥣' },
          { name: 'Хрен', weight: '50 г', description: '', price: 100, emoji: '🥣' },
          { name: 'Сметана', weight: '50 г', description: '', price: 100, emoji: '🥣' },
          { name: 'Чесночный', weight: '50 г', description: '', price: 100, emoji: '🧄' },
          { name: 'Тартар', weight: '50 г', description: '', price: 100, emoji: '🥣' }
        ]
      },

      {
        category: 'Десерты',
        items: [
          { name: 'Тирамису маскарпоне', weight: '120 г', description: '', price: 450, emoji: '🍰' },
          { name: 'Чизкейк', weight: '120 г', description: '', price: 400, emoji: '🍰' },
          { name: 'Штрудель яблочный', weight: '150 г', description: '', price: 400, emoji: '🥧' },
          { name: 'Штрудель вишнёвый', weight: '150 г', description: '', price: 400, emoji: '🥧' },
          { name: 'Шоколадная бомба', weight: '150 г', description: '', price: 450, emoji: '🍫' },
          { name: 'Манго-маракуйя', weight: '150 г', description: '', price: 450, emoji: '🍮' },
          { name: 'Шоколадный фондан', weight: '200 г', description: '', price: 450, emoji: '🍫' },
          { name: 'Варенье из Армении', weight: '150 г', description: '', price: 250, emoji: '🍯' },
          { name: 'Мороженое (шарик, ассорти)', weight: '50 г', description: '', price: 150, emoji: '🍨' },
          { name: 'Фруктовая нарезка', weight: '1000 г', description: '', price: 1450, emoji: '🍓' },
          { name: 'Десерты в ассортименте', weight: '', description: 'Спрашивайте у официанта', price: '', emoji: '🍰' }
        ]
      },

      {
        category: 'Основные блюда под заказ',
        items: [
          { name: 'Хаш', weight: '', description: 'Подаётся с чесноком и кусочками сушёного лаваша', price: 1200, emoji: '🍲' },
          { name: 'Шила по-армянски с домашней курицей', weight: '', description: 'Подаётся со сливочным маслом. На 5 человек', price: 3800, emoji: '🍚' },
          { name: 'Кюфта (армянские праздничные блюда)', weight: '200 г', description: 'Минимальный заказ от 1 кг. Подаётся со сливочным маслом', price: 600, emoji: '🍖' },
          { name: 'Стерлядь от Шефа', weight: '1 кг', description: '', price: 5000, emoji: '🐟' },
          { name: 'Форель по-деревенски', weight: '1 кг', description: 'Целая форель. Подаётся в собственном соку с отварными овощами', price: 3000, emoji: '🐟' },
          { name: 'Ягнёнья лопатка с ариштой', weight: '', description: 'Блюдо на компанию. На 3 человека', price: 4000, emoji: '🍖' },
          { name: 'Эрзрум', weight: '', description: 'Мясо молодого барашка, маринованное в пиве с овощами и сливочным маслом. На 5 человек', price: 4500, emoji: '🍖' }
        ]
      },

      {
        category: 'Шашлык из домашней свинины',
        items: [
          { name: 'Шея', weight: '100 г', description: '', price: 390, emoji: '🍖' },
          { name: 'Ребра', weight: '100 г', description: '', price: 375, emoji: '🍖' },
          { name: 'Антрекот', weight: '100 г', description: '', price: 375, emoji: '🍖' }
        ]
      },

      {
        category: 'Детское меню',
        items: [
          { name: 'Фруктовый салат', weight: '200 г', description: '', price: 390, emoji: '🍓' },
          { name: 'Крем-суп из тыквы', weight: '250 г', description: '', price: 430, emoji: '🎃' },
          { name: 'Суп на курином бульоне с лапшой', weight: '250 г', description: '', price: 350, emoji: '🍲' },
          { name: 'Пицца Пепперони', weight: '400 г', description: '', price: 490, emoji: '🍕' },
          { name: 'Пицца с курицей', weight: '400 г', description: '', price: 450, emoji: '🍕' },
          { name: 'Пицца Цезарь', weight: '400 г', description: '', price: 490, emoji: '🍕' },
          { name: 'Пельмешки с бульоном', weight: '250 г', description: '', price: 290, emoji: '🥟' },
          { name: 'Наггетсы', weight: '150 г', description: '', price: 350, emoji: '🍗' },
          { name: 'Картофель фри', weight: '150 г', description: '', price: 250, emoji: '🍟' },
          { name: 'Картофель по-деревенски', weight: '150 г', description: '', price: 150, emoji: '🥔' },
          { name: 'Макароны с сыром', weight: '150 г', description: '', price: 250, emoji: '🧀' }
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
              'Дорогие друзья, ваше посещение нашего ресторана — большая честь для нас. Ресторан «Жамэль», расположенный в самом центре города, стремится предложить лучшую армянскую кухню: блюда по древним рецептам, авторские позиции от шеф-поваров и тёплую атмосферу. Мы будем рады видеть вас снова!',
            price: '',
            emoji: 'ℹ️'
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
            emoji: '📜'
          }
        ]
      }
    ]
  },

  bar: {
    id: 'bar',
    title: 'Жамэль — Бар',
    subtitle: 'Барное меню (в процессе заполнения)',
    categories: [
      { category: 'Барное меню', items: [{ name: 'Скоро', weight: '', description: 'Пришлите фото барного меню — добавлю в эту вкладку', price: '', emoji: '🍸' }] }
    ]
  },

  lenten: {
    id: 'lenten',
    title: 'Жамэль — Постное',
    subtitle: 'Постное меню (в процессе заполнения)',
    categories: [
      { category: 'Постное меню', items: [{ name: 'Скоро', weight: '', description: 'Пришлите фото постного меню — добавлю в эту вкладку', price: '', emoji: '🌿' }] }
    ]
  }
};

let currentMenuId = 'main';

function priceText(p) {
  if (p === null || p === undefined || p === '') return '';
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
        <div class="item-image">${safeEmoji(item.emoji)}</div>
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

  // стартуем в свернутом режиме на мобильных
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
