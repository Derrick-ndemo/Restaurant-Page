export function contact() {
    content.innerHTML = '';
    let contactHeading = document.createElement('h2');
    let address = document.createElement('p');
    let phoneNumber = document.createElement('p');
    let email = document.createElement('p');
    
    contactHeading.textContent = "Contact Us";
    address.textContent = "123 Main Street, City, Country";
    phoneNumber.textContent = "Phone: +123 456 789";
    email.textContent = "Email: info@example.com";
    
    // Append elements to the content element
    content.appendChild(contactHeading);
    content.appendChild(address);
    content.appendChild(phoneNumber);
    content.appendChild(email);
}

// Call the contact function
contact();