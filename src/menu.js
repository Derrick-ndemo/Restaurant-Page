export function menu() {
    content.innerHTML = '';
    let menuHeading = document.createElement('h2');
    let menuItem1 = document.createElement('div');
    let menuItem2 = document.createElement('div');
    let menuItem3 = document.createElement('div');
    // Create more menu items as needed
    
    menuHeading.textContent = "Menu";
    menuItem1.textContent = "Appetizers: Item 1, Item 2, Item 3";
    menuItem2.textContent = "Mains: Item 1, Item 2, Item 3";
    menuItem3.textContent = "Desserts: Item 1, Item 2, Item 3";
    // Set content for each menu item
    
    // Append elements to the content element
    content.appendChild(menuHeading);
    content.appendChild(menuItem1);
    content.appendChild(menuItem2);
    content.appendChild(menuItem3);
    // Append more menu items as needed
}

// Call the menu function
menu();