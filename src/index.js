import { home } from './home.js';
import { menu } from './menu.js';
import { about } from './about.js';
import { contact } from './contact.js';
import './style.css';
import image from './carlos.jpg';

function inject() {
    let content = document.getElementById('content');
    const imgElement = document.createElement('img');
    imgElement.src = image;
    document.body.appendChild(imgElement);
    return content;
}

// Call the inject function
const content = inject();

home();

function addEventListenersToButtons() {
    const buttons = document.querySelectorAll('nav button');

    // Add event listeners to each button
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Get the text content of the button clicked
            const buttonText = button.textContent;

            // Call the corresponding function based on the button clicked
            if (buttonText === 'Home') {
                home();
            } else if (buttonText === 'Menu') {
                menu();
            } else if (buttonText === 'About Us') {
                about();
            } else if (buttonText === 'Contact') {
                contact();
            }
        });
    });
}



addEventListenersToButtons();