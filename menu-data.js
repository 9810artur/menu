// Данные меню
const menu = [
    {
        category: 'Холодные закуски',
        items: [
            {
                name: 'Долма',
                description: 'Нежные виноградные листья с начинкой из риса и мяса',
                price: 450,
                emoji: '🍃'
            },
            {
                name: 'Хумус',
                description: 'Паста из нута с тахини и специями',
                price: 300,
                emoji: '🥙'
            },
            {
                name: 'Баба гануш',
                description: 'Пюре из печеных баклажанов с тахини',
                price: 350,
                emoji: '🍆'
            },
            {
                name: 'Мацун с зеленью',
                description: 'Армянский йогурт со свежей зеленью',
                price: 250,
                emoji: '🥗'
            }
        ]
    },
    {
        category: 'Салаты',
        items: [
            {
                name: 'Армянский салат',
                description: 'Свежие овощи с зеленью и оливковым маслом',
                price: 350,
                emoji: '🥗'
            },
            {
                name: 'Салат с гранатом',
                description: 'Микс салата с зернами граната и грецким орехом',
                price: 400,
                emoji: '🥗'
            },
            {
                name: 'Табуле',
                description: 'Салат с булгуром, помидорами и зеленью',
                price: 320,
                emoji: '🥗'
            }
        ]
    },
    {
        category: 'Горячие блюда',
        items: [
            {
                name: 'Хаш',
                description: 'Традиционный армянский суп из говяжьих ножек',
                price: 800,
                emoji: '🍲'
            },
            {
                name: 'Кюфта',
                description: 'Мясные шарики из говядины с п��яностями',
                price: 650,
                emoji: '🍖'
            },
            {
                name: 'Тжвжик',
                description: 'Жареные субпродукты с луком и специями',
                price: 550,
                emoji: '🍳'
            },
            {
                name: 'Ариса',
                description: 'Каша из пшеницы с курицей',
                price: 500,
                emoji: '🍚'
            }
        ]
    },
    {
        category: 'Шашлыки',
        items: [
            {
                name: 'Шашлык из свинины',
                description: 'Сочный шашлык из маринованной свинины',
                price: 700,
                emoji: '🍖'
            },
            {
                name: 'Шашлык из баранины',
                description: 'Ароматный шашлык из баранины',
                price: 850,
                emoji: '🍖'
            },
            {
                name: 'Шашлык из курицы',
                description: 'Нежный куриный шашлык',
                price: 600,
                emoji: '����'
            },
            {
                name: 'Люля-кебаб',
                description: 'Рубленое мясо на шампуре',
                price: 650,
                emoji: '🍖'
            }
        ]
    },
    {
        category: 'Напитки',
        items: [
            {
                name: 'Тан',
                description: 'Традиционный армянский напиток на основе мацуна',
                price: 150,
                emoji: '🥛'
            },
            {
                name: 'Армянский кофе',
                description: 'Крепкий кофе по-восточному',
                price: 200,
                emoji: '☕'
            },
            {
                name: 'Компот из сухофруктов',
                description: 'Домашний компот',
                price: 180,
                emoji: '🍹'
            },
            {
                name: 'Армянское вино',
                description: 'Красное/белое вино местного производства',
                price: 500,
                emoji: '🍷'
            },
            {
                name: 'Армянский коньяк',
                description: 'Выдержанный коньяк',
                price: 800,
                emoji: '🥃'
            }
        ]
    },
    {
        category: 'Десерты',
        items: [
            {
                name: 'Пахлава',
                description: 'Слоеное тесто с орехами и медом',
                price: 350,
                emoji: '🍰'
            },
            {
                name: 'Гата',
                description: 'Сладкий армянский пирог',
                price: 300,
                emoji: '🥐'
            },
            {
                name: 'Варенье из абрикосов',
                description: 'Домашнее варенье',
                price: 250,
                emoji: '🍯'
            }
        ]
    }
];

// Отображение меню
function displayMenu(data = menu) {
    const container = document.getElementById('menuContainer');
    container.innerHTML = '';

    data.forEach(category => {
        const section = document.createElement('div');
        section.className = 'category-section';
        
        const title = document.createElement('h2');
        title.className = 'category-title';
        title.textContent = category.category;
        section.appendChild(title);

        const grid = document.createElement('div');
        grid.className = 'menu-grid';

        category.items.forEach(item => {
            const card = document.createElement('div');
            card.className = 'menu-item';
            card.innerHTML = `
                <div class="item-image">${item.emoji || '🍽️'}</div>
                <h3 class="item-name">${item.name}</h3>
                <p class="item-description">${item.description}</p>
                <p class="item-price">${item.price} ₽</p>
            `;
            grid.appendChild(card);
        });

        section.appendChild(grid);
        container.appendChild(section);
    });
}

// Фильтрация по категориям
function filterByCategory(category) {
    if (category === 'all') {
        displayMenu(menu);
    } else {
        const filtered = menu.filter(cat => cat.category === category);
        displayMenu(filtered);
    }
}

// Поиск по меню
function searchMenu(query) {
    if (!query) {
        displayMenu(menu);
        return;
    }

    const filtered = menu.map(category => {
        const items = category.items.filter(item => 
            item.name.toLowerCase().includes(query.toLowerCase()) ||
            item.description.toLowerCase().includes(query.toLowerCase())
        );
        return { ...category, items };
    }).filter(category => category.items.length > 0);

    displayMenu(filtered);
}

// Обработчики событий
document.addEventListener('DOMContentLoaded', () => {
    // Показать меню при загрузке
    displayMenu();

    // Кнопки категорий
    const navBtns = document.querySelectorAll('.nav-btn');
    navBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            navBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const category = btn.dataset.category;
            filterByCategory(category);
        });
    });

    // Первая кнопка активна
    if (navBtns.length > 0) {
        navBtns[0].classList.add('active');
    }

    // Поиск
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchMenu(e.target.value);
        });
    }

    // Кнопка "Наверх"
    const scrollBtn = document.getElementById('scrollToTop');
    if (scrollBtn) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollBtn.classList.add('show');
            } else {
                scrollBtn.classList.remove('show');
            }
        });

        scrollBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});