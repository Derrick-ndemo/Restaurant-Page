export function about() {
    content.innerHTML = '';
    let aboutHeading = document.createElement('h2');
    let history = document.createElement('p');
    let mission = document.createElement('p');
    let team = document.createElement('p');
    let awards = document.createElement('p');
    let community = document.createElement('p');
    
    aboutHeading.textContent = "About Us";
    history.textContent = "Established in 2024, Tasty Yumm has been a beloved culinary destination in ohio. From humble beginnings to becoming a cornerstone of the local dining scene, our journey is filled with passion and dedication to culinary excellence.";
    mission.textContent = "At Tasty Yumm, we are committed to delivering exceptional dining experiences by combining innovative cuisine with genuine hospitality. Our mission is to delight every guest with flavors that inspire and service that exceeds expectations.";
    team.textContent = "Get to know the talented individuals who bring our culinary vision to life. From our award-winning chefs to our attentive servers, meet the passionate team behind the scenes.";
    awards.textContent = "We take pride in our achievements, including receiving best hospitality award, which reflect our commitment to culinary innovation and guest satisfaction.";
    community.textContent = "Beyond the kitchen, we believe in giving back to the community that supports us. Learn more about our involvement in local initiatives and charitable causes.";
    
    // Append elements to the content element
    content.appendChild(aboutHeading);
    content.appendChild(history);
    content.appendChild(mission);
    content.appendChild(team);
    content.appendChild(awards);
    content.appendChild(community);
}

// Call the about function
about();