const menu = [
    {
        category: 'Холодные закуски',
        items: [
            {
                name: 'Долма',
                description: 'Нежные листья винограда с фаршем',
                price: 500
            },
            {
                name: 'Хумус',
                description: 'Паста из нута с тахини',
                price: 300
            },
            {
                name: 'Баба гануш',
                description: 'Пюре из баклажанов с тахини',
                price: 350
            }
        ]
    },
    {
        category: 'Салаты',
        items: [
            {
                name: 'Салат из свежих овощей',
                description: 'Сочетание свежих овощей с оливковым маслом',
                price: 250
            },
            {
                name: 'Греческий салат',
                description: 'Салат с фетой и оливками',
                price: 400
            }
        ]
    },
    {
        category: 'Горячие блюда',
        items: [
            {
                name: 'Хаш',
                description: 'Традиционное армянское блюдо из говядины',
                price: 800
            },
            {
                name: 'Кюфта',
                description: 'Фрикадельки из говядины и риса',
                price: 600
            },
            {
                name: 'Шашлыки',
                description: 'Мясо, запеченное на гриле',
                price: 900
            }
        ]
    },
    {
        category: 'Напитки',
        items: [
            {
                name: 'Тан',
                description: 'Ферментированный молочный напиток',
                price: 150
            },
            {
                name: 'Кофе',
                description: 'Ароматный кофе',
                price: 200
            },
            {
                name: 'Вино',
                description: 'Армянское красное вино',
                price: 500
            },
            {
                name: 'Коньяк',
                description: 'Армянский коньяк',
                price: 700
            }
        ]
    },
    {
        category: 'Десерты',
        items: [
            {
                name: 'Пахлава',
                description: 'Сладкое слоеное тесто с орехами',
                price: 250
            },
            {
                name: 'Гата',
                description: 'Сладкий пирог с маслом и орехами',
                price: 300
            }
        ]
    }
];

function displayMenu(menuData) {
    console.log('Меню ресторана:');
    menuData.forEach(category => {
        console.log(`\n${category.category}:`);
        category.items.forEach(item => {
            console.log(`- ${item.name}: ${item.description} (Цена: ${item.price} AMD)`);
        });
    });
}

function searchMenu(menuData, query) {
    return menuData.flatMap(category => 
        category.items.filter(item => item.name.includes(query) || item.description.includes(query))
    );
}

function filterMenuByCategory(menuData, categoryName) {
    const category = menuData.find(category => category.category === categoryName);
    return category ? category.items : [];
}