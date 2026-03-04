const menu = [
    {
        name: 'Ակնի',
        description: 'Խորոված միս հավի',
        price: 4500,
    },
    {
        name: 'Ողորմության Պանիր',
        description: 'Հոված երիցուկ',
        price: 3000,
    },
    {
        name: 'Քյուֆտեր',
        description: 'Խորոված միս կառավարիչ',
        price: 5500,
    },
    {
        name: 'Հաց',
        description: 'Չորահաց',
        price: 500,
    },
];

function displayMenu() {
    const menuContainer = document.getElementById('menu');
    menuContainer.innerHTML = '';
    menu.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.innerHTML = `<h3>${item.name}</h3><p>${item.description}</p><p>Price: ${item.price} AMD</p>`;
        menuContainer.appendChild(menuItem);
    });
}

document.addEventListener('DOMContentLoaded', displayMenu);