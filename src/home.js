import DOM from "./DOM";
import Header from "./header";

import openingHoursBackground from "./images/opening-hours-background.jpg";

const HomePage = (() => {
  const _loadAboutUs = (parent) => {
    const section = DOM.createSection(parent, 'about-us');
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
    const splitContainer = DOM.createContainer(section, 'split');
    const col1 = DOM.createContainer(splitContainer);
    DOM.createHeading(col1, 'h2', 'Opening Hours');
    DOM.createList(col1, false,
    'Sunday: 10am - 10pm',
    'Monday: Closed',
    'Tuesday: 10am - 10pm',
    'Wednesday: 10am - 10pm',
    'Thursday: 10am - 10pm',
    'Friday: 10am - 10pm',
    'Saturday: 10am - 10pm');
    const col2 = DOM.createContainer(splitContainer);
    DOM.createImage(col2, openingHoursBackground)  
  }
  const _loadLocation = (parent) => {
    const section = DOM.createSection(parent, 'location');
    const div = DOM.createContainer(section);
    DOM.createHeading(div, 'h2', 'Location');
    DOM.createPara(div, `Ramos St, Purok 7, Taggappan, Echague, 
    Isabela, Philippines`);
    DOM.createIframe(div,
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d955.37721381034!2d121.6743222880653!3d16.701443299277294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339aa937c7676921%3A0x761615bda445781d!2sThe%20Frontyard!5e0!3m2!1sen!2sph!4v1640853977731!5m2!1sen!2sph',
    'lazy');
  }
  const _loadMain = (parent) => {
    parent.classList.add('home');
    _loadAboutUs(parent);
    _loadOpeningHours(parent);
    _loadLocation(parent);
  }

  const load = (parent) => {
    _loadMain(parent);
  }
  return { load };
})();

export default HomePage;