import DOM from "./DOM";
import openingHoursBackground from "./images/opening-hours-background.jpg";
import ramen from "./images/ramen1.jpg";
import carbonara from "./images/carbonara3.jpg";
import sisig from "./images/sisig3.jpg";
import bagnetsilog from "./images/bagnetsilog.jpg";
import cater from "./images/cater2.jpg";
import burger from "./images/burger.jpg";
import bbq from "./images/filipino-bbq.jpg";
import pikaPika from "./images/super-bowl.jpg";

const HomePage = (() => {
  const _loadAboutUs = (parent) => {
    const section = DOM.createSection(parent, 'about-us');
    section.id = 'main';
    const div = DOM.createContainer(section);
    DOM.createHeading(div, 'h2', 'About Us');
    DOM.createPara(div,
    `The Frontyard is one of the best resto-bars in Echague,
    Isabela, Philippines. The place is open-air and has a
    magnificently charming tropical design. It's the perfect
    place to hang out on a hard day's night, opening a cold
    one with the boys/gals and laying back while snacking on
    a sizzling plate of sisig. If you're not the type for
    beers, so maybe you want a place to eat lunch with the
    workmates? It's perfect for that too! The heat is hardly
    ever an inconvenience here because of the fresh breeze
    that's always blowing. So what are you waiting for?
    Come and eat, drink, and unwind at the Frontyard today!`);
  }
  const _loadOpeningHours = (parent) => {
    const section = DOM.createSection(parent, 'opening-hours');
    section.id = 'opening-hours';
    const splitContainer = DOM.createContainer(section, 'split');
    const col1 = DOM.createContainer(splitContainer);
    const container = DOM.createContainer(col1, 'text');
    DOM.createHeading(container, 'h2', 'Opening Hours');
    DOM.createList(container, true,
      DOM.Item('Sunday', '10am - 10pm'),
      DOM.Item('Monday', 'Closed'),
      DOM.Item('Tuesday', '10am - 10pm'),
      DOM.Item('Wednesday', '10am - 10pm'),
      DOM.Item('Thursday', '10am - 10pm'),
      DOM.Item('Friday', '10am - 10pm'),
      DOM.Item('Saturday', '10am - 10pm'),
    )
    const col2 = DOM.createContainer(splitContainer, 'img', 'right');
    DOM.createImage(col2, openingHoursBackground)  
  }
  const _loadLocation = (parent) => {
    const section = DOM.createSection(parent, 'location');
    section.id = 'location';
    const div = DOM.createContainer(section);
    DOM.createHeading(div, 'h2', 'Location');
    DOM.createPara(div, `Ramos St, Purok 7, Taggappan, Echague, 
    Isabela, Philippines`);
    DOM.createIframe(div,
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d955.37721381034!2d121.6743222880653!3d16.701443299277294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339aa937c7676921%3A0x761615bda445781d!2sThe%20Frontyard!5e0!3m2!1sen!2sph!4v1640853977731!5m2!1sen!2sph',
    'lazy');
  }
  const _loadGallery = (parent) => {
    const section = DOM.createSection(parent, 'gallery')
    section.id = 'gallery';
    const carousel = DOM.createContainer(section, 'carousel');
    const images = [
      ramen,
      carbonara,
      sisig,
      bagnetsilog,
      cater,
      burger,
      bbq,
      pikaPika
    ]
    images.forEach(image => {
      DOM.createImage(carousel, image);
    })
    let selectedImage = 0;
    const buttonRight = DOM.createButton(section, undefined, 'button', 'right');
    DOM.createIcon(buttonRight, 'fas', 'fa-arrow-right');
    let distance = 0;
    buttonRight.addEventListener('click', e => {
      if(selectedImage < images.length - 3) {
        selectedImage++;
        distance -= 430;
        carousel.style.transform = `translateX(${distance}px)`;
      }
    })
    const buttonLeft = DOM.createButton(section, undefined, 'button', 'left');
    DOM.createIcon(buttonLeft, 'fas', 'fa-arrow-left');
    buttonLeft.addEventListener('click', e => {
      if(selectedImage > 0) {
        selectedImage--;
        distance += 430;
        carousel.style.transform = `translateX(${distance}px)`;
      }
    })
  }
  const _loadMain = (parent) => {
    parent.classList.add('home');
    _loadAboutUs(parent);
    _loadOpeningHours(parent);
    _loadLocation(parent);
    _loadGallery(parent);
  }

  const load = (parent) => {
    _loadMain(parent);
  }
  return { load };
})();

export default HomePage;