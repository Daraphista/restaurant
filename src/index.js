import './style.css';
import './home.css';
import './contact.css';
import HomePage from './home.js';
import MenuPage from './menu';
import ContactPage from './contact';

const content = document.querySelector('#content');
HomePage.load(content); 
const clearPage = () => {
  while(content.firstChild) {
    content.removeChild(content.firstChild);
  }
}

const header = document.querySelector('.header');
window.addEventListener('click', (e) => {
  const homeBtn = document.querySelector('.home');
  
    document.querySelector('.home').addEventListener('click', () => {
      clearPage();
      HomePage.load(content);
    })

    document.querySelector('.menu').addEventListener('click', () => {
      clearPage();
      MenuPage.load(content);
    })
    
    document.querySelector('.contact').addEventListener('click', () => {
      clearPage();
      ContactPage.load(content);
    })
}, false)
