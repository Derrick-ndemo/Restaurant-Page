export function home() {
    content.innerHTML = '';
    let heading = document.createElement('h1');
    let description = document.createElement('p');
    let reserve = document.createElement('button');
    
    heading.textContent = "Tasty Yumm";
    description.textContent = "Welcome to Tasty Yumm,  where exquisite flavours and warm hospitality awaits you. Step inside our culinary world and embark on a journey of delectable delights";
    reserve.textContent = 'Reserve Now';

    // Append elements to the content element
    content.appendChild(heading);
    content.appendChild(description);
    content.appendChild(reserve);
}

home();
