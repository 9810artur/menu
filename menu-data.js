// Жамэль — меню (одна страница)
// Переключение: Основное / Барное / Постное
// Фильтрация по категориям + поиск

const MENUS = {
  main: {
    id: 'main',
    title: 'Жамэль',
    subtitle: 'Смесь традиционной армянской кухни с нотками европейской',
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
          { name: 'Компот из сухофруктов', description: 'Домашний компот', price: 180, emoji: '🍹' }
        ]
      },
      {
        category: 'Десерты',
        items: [
          { name: 'Пахлава', description: 'Слоёное тесто с орехами и мёдом', price: 350, emoji: '🍰' },
          { name: 'Гата', description: 'Сладкий армянский пирог', price: 300, emoji: '🥐' }
        ]
      }
    ]
  },

  bar: {
    id: 'bar',
    title: 'Жамэль — Бар',
    subtitle: 'Барное меню (в процессе заполнения)',
    categories: [
      { category: 'Бар', items: [{ name: 'Скоро', description: 'Пришлите фото барного меню — добавлю', price: '', emoji: '🍸' }] }
    ]
  },

  lenten: {
    id: 'lenten',
    title: 'Жамэль — Постное',
    subtitle: 'Постное меню (в процессе заполнения)',
    categories: [
      { category: 'Постное', items: [{ name: 'Скоро', description: 'Пришлите фото постного меню — добавлю', price: '', emoji: '🌿' }] }
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

function renderMenu(categories) {
  const container = document.getElementById('menuContainer');
  if (!container) return;

  container.innerHTML = '';

  categories.forEach(cat => {
    const section = document.createElement('section');
    section.className = 'category-section';

    const h2 = document.createElement('h2');
    h2.className = 'category-title';
    h2.textContent = cat.category;
    section.appendChild(h2);

    const grid = document.createElement('div');
    grid.className = 'menu-grid';

    cat.items.forEach(item => {
      const card = document.createElement('div');
      card.className = 'menu-item';

      const p = priceText(item.price);

      card.innerHTML = `
        <div class="item-image">${safeEmoji(item.emoji)}</div>
        <h3 class="item-name">${item.name || ''}</h3>
        <p class="item-description">${item.description || ''}</p>
        ${p ? `<p class="item-price">${p}</p>` : ''}
      `;

      grid.appendChild(card);
    });

    section.appendChild(grid);
    container.appendChild(section);
  });
}

// --- Category nav ---
function rebuildCategoryButtons(menuObj) {
  const navContainer = document.querySelector('.menu-nav .container');
  if (!navContainer) return;

  navContainer.innerHTML = '';

  const allBtn = document.createElement('button');
  allBtn.className = 'nav-btn active';
  allBtn.dataset.category = 'all';
  allBtn.textContent = 'Всё меню';
  navContainer.appendChild(allBtn);

  menuObj.categories.forEach(c => {
    const b = document.createElement('button');
    b.className = 'nav-btn';
    b.dataset.category = c.category;
    b.textContent = c.category;
    navContainer.appendChild(b);
  });

  // handlers
  const btns = navContainer.querySelectorAll('.nav-btn');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const cat = btn.dataset.category;
      if (cat === 'all') renderMenu(menuObj.categories);
      else renderMenu(menuObj.categories.filter(x => x.category === cat));
    });
  });
}

// --- Menu switch (main/bar/lenten) ---
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

  // Вставляем ПЕРЕД nav категориями (внутри <nav class="menu-nav">)
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

  // reset search
  const searchInput = document.getElementById('searchInput');
  if (searchInput) searchInput.value = '';

  renderMenu(menuObj.categories);
}

// --- search ---
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
        items: c.items.filter(i =>
          (i.name || '').toLowerCase().includes(q) ||
          (i.description || '').toLowerCase().includes(q)
        )
      }))
      .filter(c => c.items.length > 0);

    renderMenu(filtered);
  });
}

// --- scroll top ---
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
  initSearch();
  initScrollToTop();
  setMenu('main');
});
