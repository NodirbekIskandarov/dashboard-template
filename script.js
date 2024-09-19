const menuList = document.getElementById('menu-list');
let previousSelectedItem = null; // Avvalgi tanlangan element
let originalOrder = Array.from(menuList.children).map(item => item.dataset.defaultOrder); // Menyu tartibi

// Menu itemga bosilganda ishlash
menuList.addEventListener('click', function(event) {
    const item = event.target.closest('.menu-item'); // Click qilingan elementni olish
    if (!item || item === previousSelectedItem) return; // Agar tanlangan element o'zgarilmasa, hech narsa qilmang

    // Agar avvalgi tanlangan element bo'lsa
    if (previousSelectedItem) {
        // Avvalgi tanlangan elementni o'z joyiga qaytaramiz
        const previousIndex = originalOrder.indexOf(previousSelectedItem.dataset.defaultOrder);
        const currentIndex = originalOrder.indexOf(item.dataset.defaultOrder);

        // Avvalgi elementni o'z joyiga qaytarish
        menuList.insertBefore(previousSelectedItem, menuList.children[previousIndex + 1]);
    }

    // Tanlangan elementni yuqoriga ko'taramiz
    menuList.insertBefore(item, menuList.firstChild);

    // Yangi tanlangan elementni saqlaymiz
    previousSelectedItem = item;
});

// Menyu sahifasi yuklanganda original tartibni saqlab olish
window.addEventListener('load', function() {
    previousSelectedItem = null; // Avvalgi tanlangan elementni tozalaymiz
});