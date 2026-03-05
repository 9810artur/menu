// menu-data.js
// Одна страница: переключатель меню (Основное / Барное / Постное) + категории + поиск

const MENUS = {
  main: {
    id: 'main',
    title: 'Основное меню',
    subtitle: 'Традиционная кухня Армении',
    categories: [
      {
        category: 'Холодные закуски',
        items: [
          { name: 'Долма', description: 'Нежные виноградные листья с начинкой из риса и мяса', price: 450, emoji: '🍃' },
          { name: 'Хумус', description: 'Паста из нута с тахини и специями', price: 300, emoji: '🥙' },
          { name: 'Баба гануш', description: 'Пюре из печёных баклажанов с тахини', price: 350, emoji: '🍆' },
          { name: 'Мацун с зеленью', description: 'Армянский йогурт со свежей зеленью', price: 250, emoji: '🥛' }
        ]
      },
      {
        category: 'Салаты',
        items: [
          { name: 'Армянский салат', description: 'Свежие овощи с зеленью и оливковым маслом', price: 350, emoji: '🥗' },
          { name: 'Салат с гранатом', description: 'Микс салата с зёрнами граната и грецким орехом', price: 400, emoji: '🍎' },
          { name: 'Табуле', description: 'Салат с булгуром, помидорами и зеленью', price: 320, emoji: '🥗' }
        ]
      },
      {
        category: 'Горячие блюда',
        items: [
          { name: 'Хаш', description: 'Традиционный армянский суп из говяжьих ножек', price: 800, emoji: '🍲' },
          { name: 'Кюфта', description: 'Мясные шарики из говядины с пряностями', price: 650, emoji: '🍖' },
          { name: 'Тжвжик', description: 'Жареные субпродукты с луком и специями', price: 550, emoji: '🍳' },
          { name: 'Ариса', description: 'Каша из пшеницы с курицей', price: 500, emoji: '🍚' }
        ]
      },
      {
        category: 'Шашлыки',
        items: [
          { name: 'Шашлык из свинины', description: 'Сочный шашлык из маринованной свинины', price: 700, emoji: '🍖' },
          { name: 'Шашлык из баранины', description: 'Ароматный шашлык из баранины', price: 850, emoji: '🍖' },
          { name: 'Шашлык из курицы', description: 'Нежный куриный шашлык', price: 600, emoji: '🍗' },
          { name: 'Люля-кебаб', description: 'Рубленое мясо на шампуре', price: 650, emoji: '🍢' }
        ]
      },
      {
        category: 'Напитки',
        items: [
          { name: 'Тан', description: 'Традиционный армянский напиток на основе мацуна', price: 150, emoji: '🥛' },
          { name: 'Армянский кофе', description: 'Крепкий кофе по-восточному', price: 200, emoji: '☕' },
          { name: 'Компот из сухофруктов', description: 'Домашний компот', price: 180, emoji: '🍹' },
          { name: 'Армянское вино', description: 'Красное/белое вино местного производства', price: 500, emoji: '🍷' },
          { name: 'Армянский коньяк', description: 'Выдержанный коньяк', price: 800, emoji: '🥃' }
        ]
      },
      {
        category: 'Десерты',
        items: [
          { name: 'Пахлава', description: 'Слоёное тесто с орехами и мёдом', price: 350, emoji: '🍰' },
          { name: 'Гата', description: 'Сладкий армянский пирог', price: 300, emoji: '🥐' },
          { name: 'Варенье из абрикосов', description: 'Домашнее варенье', price: 250, emoji: '🍯' }
        ]
      }
    ]
  },

  bar: {
    id: 'bar',
    title: 'Барное меню',
    subtitle: 'Напитки и коктейли',
    categories: [
      {
        category: 'Бар',
        items: [
          { name: 'Барное меню', description: 'Пока не заполнено — добавим по фото', price: '', emoji: '🍸' }
        ]
      }
    ]
  },

  lenten: {
    id: 'lenten',
    title: 'Постное меню',
    subtitle: 'Блюда без продуктов животного происхождения',
    categories: [
      {
        category: 'Постное',
        items: [
          { name: 'Постное меню', description: 'Пока не заполнено — добавим по фото', price: '', emoji: '🌿' }
        ]
      }
    ]
  }
};

let currentMenuId = 'main';

function normalizePrice(price) {
  if (price === null || price === undefined || price === '') return '';
  if (typeof price === 'number') return `${price} ₽`;
  return `${price} ₽`;
}

function safeEmoji(item) {
  const e = item && item.emoji ? String(item.emoji).trim() : '';
  return e || '🍽️';
}

function setHeader(menuObj) {
  const titleEl = document.querySelector('header h1');
  const subEl = document.querySelector('header .subtitle');
  if (titleEl) titleEl.textContent = `📖 ${menuObj.title}`;
  if (subEl) subEl.textContent = menuObj.subtitle;
}

// --- Переключатель меню (Основное/Барное/Постное) ---
function ensureMenuSwitch() {
  // Вставляем переключатель перед навигацией категорий (внутрь .menu-nav)
  const navContainer = document.querySelector('.menu-nav .container');
  if (!navContainer) return;

  // Если уже есть — не создаём второй раз
  if (document.getElementById('menuSwitch')) return;

  const switchWrap = document.createElement('div');
  switchWrap.id = 'menuSwitch';
  switchWrap.style.display = 'flex';
  switchWrap.style.gap = '10px';
  switchWrap.style.flexWrap = 'wrap';
  switchWrap.style.marginBottom = '12px';

  const makeBtn = (id, text) => {
    const b = document.createElement('button');
    b.className = 'nav-btn';
    b.dataset.menuId = id;
    b.textContent = text;
    b.addEventListener('click', () => {
      setCurrentMenu(id);
    });
    return b;
  };

  switchWrap.appendChild(makeBtn('main', '🍽️ Основное'));
  switchWrap.appendChild(makeBtn('bar', '🍷 Барное'));
  switchWrap.appendChild(makeBtn('lenten', '🌿 Постное'));

  // Вставляем перед кнопками категорий
  navContainer.parentElement.insertBefore(switchWrap, navContainer);

  updateMenuSwitchActive();
}

function updateMenuSwitchActive() {
  const buttons = document.querySelectorAll('#menuSwitch .nav-btn');
  buttons.forEach(btn => {
    const isActive = btn.dataset.menuId === currentMenuId;
    btn.classList.toggle('active', isActive);
  });
}

// --- Кнопки категорий (строим заново под текущее меню) ---
function buildCategoryNav(menuObj) {
  const navContainer = document.querySelector('.menu-nav .container');
  if (!navContainer) return;

  navContainer.innerHTML = '';

  const allBtn = document.createElement('button');
  allBtn.className = 'nav-btn active';
  allBtn.dataset.category = 'all';
  allBtn.textContent = 'Всё меню';
  navContainer.appendChild(allBtn);

  menuObj.categories.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'nav-btn';
    btn.dataset.category = cat.category;
    btn.textContent = cat.category;
    navContainer.appendChild(btn);
  });

  // Обработчики категорий
  const navBtns = navContainer.querySelectorAll('.nav-btn');
  navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      navBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const category = btn.dataset.category;
      filterByCategory(category);
    });
  });
}

function displayCategories(categories) {
  const container = document.getElementById('menuContainer');
  if (!container) return;

  container.innerHTML = '';

  categories.forEach(category => {
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

      const priceText = normalizePrice(item.price);

      card.innerHTML = `
        <div class="item-image">${safeEmoji(item)}</div>
        <h3 class="item-name">${item.name}</h3>
        <p class="item-description">${item.description || ''}</p>
        ${priceText ? `<p class="item-price">${priceText}</p>` : ''}
      `;

      grid.appendChild(card);
    });

    section.appendChild(grid);
    container.appendChild(section);
  });
}

// --- Фильтрация/поиск ---
function getCurrentMenu() {
  return MENUS[currentMenuId] || MENUS.main;
}

function filterByCategory(category) {
  const menuObj = getCurrentMenu();
  if (category === 'all') {
    displayCategories(menuObj.categories);
  } else {
    const filtered = menuObj.categories.filter(c => c.category === category);
    displayCategories(filtered);
  }
}

function searchMenu(query) {
  const menuObj = getCurrentMenu();

  if (!query) {
    displayCategories(menuObj.categories);
    return;
  }

  const q = query.toLowerCase();

  const filtered = menuObj.categories
    .map(category => {
      const items = category.items.filter(item =>
        (item.name || '').toLowerCase().includes(q) ||
        (item.description || '').toLowerCase().includes(q)
      );
      return { ...category, items };
    })
    .filter(category => category.items.length > 0);

  displayCategories(filtered);
}

function setCurrentMenu(menuId) {
  if (!MENUS[menuId]) return;
  currentMenuId = menuId;

  const menuObj = getCurrentMenu();
  setHeader(menuObj);
  buildCategoryNav(menuObj);
  updateMenuSwitchActive();

  // сброс поиска
  const searchInput = document.getElementById('searchInput');
  if (searchInput) searchInput.value = '';

  displayCategories(menuObj.categories);
}

// --- Scroll to top ---
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

document.addEventListener('DOMContentLoaded', () => {
  ensureMenuSwitch();
  initScrollToTop();

  // Поиск
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchMenu(e.target.value);
    });
  }

  // старт
  setCurrentMenu('main');
});"}
