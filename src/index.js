import './style.css';
import loadHomePage from './home.js';
import loadMenuPage from './menu';
import loadContactPage from './contact';

const content = document.querySelector('#content');
loadHomePage(content); 
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
      loadHomePage(content);
    })

    document.querySelector('.menu').addEventListener('click', () => {
      clearPage();
      loadMenuPage(content);
    })
    
    document.querySelector('.contact').addEventListener('click', () => {
      clearPage();
      loadContactPage(content);
    })
}, false)
