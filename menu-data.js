// Sample menu data array
const menuData = [
    { id: 1, name: 'Pasta', category: 'Italian' },
    { id: 2, name: 'Sushi', category: 'Japanese' },
    { id: 3, name: 'Tacos', category: 'Mexican' },
    { id: 4, name: 'Burger', category: 'American' },
    { id: 5, name: 'Pizza', category: 'Italian' },
];

// DOM elements
const menuContainer = document.getElementById('menuContainer');
const searchInput = document.getElementById('searchInput');
const categorySelect = document.getElementById('categorySelect');
const scrollToTopButton = document.getElementById('scrollToTopButton');

// Render menu items
function renderMenu(items) {
    menuContainer.innerHTML = '';
    items.forEach(item => {
        const div = document.createElement('div');
        div.className = 'menu-item';
        div.innerHTML = `<h3>${item.name}</h3><p>Category: ${item.category}</p>`;
        menuContainer.appendChild(div);
    });
}

// Filter menu items based on search input and selected category
function filterMenu() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCategory = categorySelect.value;

    const filteredItems = menuData.filter(item => {
        const matchesSearch = item.name.toLowerCase().includes(searchTerm);
        const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    renderMenu(filteredItems);
}

// Add event listeners for search input and category select
searchInput.addEventListener('input', filterMenu);
categorySelect.addEventListener('change', filterMenu);

// Scroll to top button functionality
scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Initial render
renderMenu(menuData);