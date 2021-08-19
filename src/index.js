import { print, printHome, printMenu, printContact } from './print'
import './style.css';


print()

var homeButton = document.getElementById('home-button')
homeButton.addEventListener('click',printHome)

var menuButton = document.getElementById('menu-button')
menuButton.addEventListener('click',printMenu)

var contactButton = document.getElementById('contact-button')
contactButton.addEventListener('click',printContact)
// console.log(homeButton.id)


