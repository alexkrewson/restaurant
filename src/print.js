
import Rice from './rice.jpg';

var contentDiv = document.getElementById('content');
var activeTab = ''

const clearList = (parent) => {
    while (parent.firstChild) {
        parent.removeChild(parent.lastChild);
    }
}

const printHome = () => {
    activeTab = 'home';

    var tabContent = document.getElementById('tab-content');
    clearList(tabContent)

    var homeDiv = document.createElement('div');
    homeDiv.id = 'home-div'

    var homeHeader = document.createElement('h1');
    homeHeader.id = 'home-header';
    homeHeader.innerHTML = 'Mashmakers Home';
    var homeP = document.createElement('p');
    homeP.innerHTML = "Here at Mashmakers, we mix many ingredients into a bowl and sell it to you."
    tabContent.appendChild(homeDiv);
    homeDiv.appendChild(homeHeader);
    homeDiv.appendChild(homeP);


    var homeButton = document.getElementById('home-button');
    homeButton.setAttribute('class', 'button-active');

    var menuButton = document.getElementById('menu-button');
    menuButton.setAttribute('class', 'button-inactive');

    var contactButton = document.getElementById('contact-button');
    contactButton.setAttribute('class', 'button-inactive');

}

const printMenu = () => {

    activeTab = 'menu'

    var tabContent = document.getElementById('tab-content');
    clearList(tabContent)

    var menuDiv = document.createElement('div');
    menuDiv.id = 'menu-div'

    var menuHeader = document.createElement('h1');
    menuHeader.id = 'menu-header';
    menuHeader.innerHTML = 'Mashmakers Menu';
    tabContent.appendChild(menuDiv);
    menuDiv.appendChild(menuHeader)

    var menuList = document.createElement('ul');
    var li1 = document.createElement('li');
    li1.innerHTML = 'Rice Mash'
    var li2 = document.createElement('li');
    li2.innerHTML = 'Quinoa Mash'
    var li2 = document.createElement('li');
    li2.innerHTML = 'Tortilla Chip Mash'
    var li3 = document.createElement('li');
    li3.innerHTML = 'Burrito Mash'
    var li4 = document.createElement('li');
    li4.innerHTML = 'Pizza Mash'
    var li5 = document.createElement('li');
    li5.innerHTML = 'Mystery Mash'
    



    menuList.appendChild(li1)
    menuList.appendChild(li2)
    menuList.appendChild(li3)
    menuList.appendChild(li4)
    menuList.appendChild(li5)
    

    menuDiv.appendChild(menuList)

    var homeButton = document.getElementById('home-button');
    homeButton.setAttribute('class', 'button-inactive');

    var menuButton = document.getElementById('menu-button');
    menuButton.setAttribute('class', 'button-active');

    var contactButton = document.getElementById('contact-button');
    contactButton.setAttribute('class', 'button-inactive');
}

const printContact = () => {

    activeTab = 'contact'

    var tabContent = document.getElementById('tab-content');
    clearList(tabContent)

    var contactDiv = document.createElement('div');
    contactDiv.id = 'contact-div'

    var contactHeader = document.createElement('h1');
    contactHeader.id = 'contact-header';
    contactHeader.innerHTML = 'Mashmakers Contact';
    tabContent.appendChild(contactDiv);
    contactDiv.appendChild(contactHeader)

    var contactP = document.createElement('p');
    contactP.innerHTML = 'If you need to contact me, simply get my number from a friend.'
    contactDiv.appendChild(contactP)

    var homeButton = document.getElementById('home-button');
    homeButton.setAttribute('class', 'button-inactive');

    var menuButton = document.getElementById('menu-button');
    menuButton.setAttribute('class', 'button-inactive');

    var contactButton = document.getElementById('contact-button');
    contactButton.setAttribute('class', 'button-active');
}

const print = () => {

    const myRice = document.createElement('img');
    myRice.src = Rice;
    myRice.id = ('background-pic');
    contentDiv.appendChild(myRice);



    var buttonContainer = document.createElement('div');
    buttonContainer.id = 'button-container';

    var homeButton = document.createElement('a');
    homeButton.id = 'home-button';
    homeButton.setAttribute('class', 'button-inactive')
    homeButton.innerHTML = 'Home'
    homeButton.setAttribute('class', 'button-inactive');
    // homeButton.addEventListener('click', printHome, false)

    var menuButton = document.createElement('a');
    menuButton.id = 'menu-button';
    menuButton.setAttribute('class', 'button-inactive')
    menuButton.innerHTML = 'Menu'
    // menuButton.addEventListener('click', printMenu, false)

    var contactButton = document.createElement('a');
    contactButton.id = 'contact-button';
    contactButton.innerHTML = 'Contact'
    contactButton.setAttribute('class', 'button-inactive')
    // contactButton.addEventListener('click', printContact, false)



    buttonContainer.appendChild(homeButton);
    buttonContainer.appendChild(menuButton);
    buttonContainer.appendChild(contactButton);




    const tabContent = document.createElement('div');
    tabContent.id = 'tab-content';



    contentDiv.appendChild(buttonContainer);
    contentDiv.appendChild(tabContent);


    printHome()
};

export { print, printHome, printMenu, printContact }