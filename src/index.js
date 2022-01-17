import './style.css';
import './home.css';
import './contact.css';
import './header.css';
import './meals.css'
import DOM from './DOM';
import Header from './header';
import Footer from './footer';
import HomePage from './home.js';
import MealsPage from './meals';
import SnacksPage from './snacks';
import DrinksPage from './drinks';
import ContactPage from './contact';

const clearMain = () => {
  while(main.firstChild) {
    main.removeChild(main.firstChild);
  }
}

const content = document.getElementById('content');
const header = Header.load(content);
const main = DOM.createContainer(content, 'main');
const footer = Footer.load(content);
const dropdowns = Array.from(document.querySelectorAll('.dropdown'));
const tabs = Array.from(document.querySelectorAll('.tab'));
console.log(tabs);
HomePage.load(main);

dropdowns.forEach(dropdown => dropdown.addEventListener('click', (e) => {
  dropdown.classList.toggle('activated');
  if(e.currentTarget == dropdown) {
  }
}))
window.addEventListener('click', (e) => {
  if(e.target.classList.contains('home')
  || e.target.classList.contains('about-us')
  || e.target.classList.contains('opening-hours')
  || e.target.classList.contains('location')) {   
    clearMain();
    HomePage.load(main);
  } else if(e.target.classList.contains('meals')) {
    clearMain();
    MealsPage.load(main);
  } else if(e.target.classList.contains('snacks')) {
    clearMain();
    SnacksPage.load(main);
  } else if(e.target.classList.contains('drinks')) {
    clearMain();
    DrinksPage.load(main);
  } else if(e.target.classList.contains('.contact')) {
    window.location.hash = 'footer';
    document.documentElement.style.scrollBehavior = 'smooth';
  } else if(e.target == document.querySelector('.contact-details .number')) {
    navigator.clipboard.writeText('0905 800 0375');
  }

  dropdowns.forEach(dropdown => {
    if (e.target.closest('.dropdown') != dropdown) {
      dropdown.classList.remove('activated');
    }
  })
})

tabs.forEach(tab => tab.addEventListener('click', e => {
  if (!e.currentTarget.parentNode.classList.contains('dropdown') 
  && !e.currentTarget.classList.contains('contact')
  && e.target.closest('.sitemap.home') == null) {
    document.documentElement.style.scrollBehavior = 'auto';
    window.location.hash = 'top';
    setTimeout(() => {
      document.documentElement.style.scrollBehavior = 'smooth';
      window.location.hash = 'main';
    }, 250);
  } else if (e.currentTarget.classList.contains('contact')) {
    document.documentElement.style.scrollBehavior = 'smooth';
  }
}))

window.addEventListener('scroll', () => {
  const sections = Array.from(document.querySelectorAll('section'));
  document.querySelector('.dropdown').classList.remove('activated');
  const topOfWindow = window.scrollY;
  const mainPosition = main.offsetTop;
  const headerHead = document.querySelector('.header-head');

  if(topOfWindow > mainPosition) {
    headerHead.classList.add('fixed');
    headerHead.classList.remove('no-animation');
  } else {
    headerHead.classList.remove('fixed');
  }

  sections.forEach(section => {
    const sectionPosition = section.offsetTop - 200;
    if(topOfWindow >= sectionPosition) {
      section.classList.add('animate');
    }
  })
})