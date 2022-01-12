import './style.css';
import './home.css';
import './menu.css'
import './contact.css';
import './header.css';
import Header from './header';
import HomePage from './home.js';
import MenuPage from './menu';
import ContactPage from './contact';

const content = document.getElementById('content');

Header.load(content);

const main = document.createElement('div');
main.classList.add('main');
content.appendChild(main);

HomePage.load(main);

window.addEventListener('scroll', () => {
  const topOffWindow = window.scrollY;
  const mainPosition = main.offsetTop;
  const headerHead = document.querySelector('.header-head');

  if(topOffWindow > mainPosition) {
    headerHead.classList.add('fixed');
    headerHead.classList.remove('no-animation');
  } else {
    headerHead.classList.remove('fixed');
  }
})