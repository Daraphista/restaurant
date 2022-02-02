import DOM from "./DOM";
const Footer = (() => {
  const load = (parent) => {
    const footer = DOM.createContainer(parent, 'footer');
    footer.id = 'footer';

    const sitemap1 = DOM.createSection(footer, 'sitemap', 'home');
    const div = DOM.createContainer(sitemap1);
    const heading = DOM.createTab(div, 'Home', 'heading');
    heading.style.fontWeight = '700';
    const aboutUs = DOM.createTab(div, 'About Us', 'about-us');
    aboutUs.href = '#main';
    const openingHours = DOM.createTab(div, 'Opening Hours', 'opening-hours');
    openingHours.href = '#opening-hours';
    const location = DOM.createTab(div, 'Location', 'location');
    location.href = '#location';
    
    const section = DOM.createSection(footer);
    DOM.createHeading(section, 'h2', 'Have a question?');
    DOM.createPara(section, 'Reach out to us through these platforms!');
    
    const contactDetails = DOM.createContainer(section, 'contact-details');
    const cellNo = DOM.createLink(contactDetails, 'Cell Number', '', '#footer', 'white');
    cellNo.classList.add('number');
    DOM.createIcon(cellNo, 'far', 'fa-clipboard');
    cellNo.title = 'Copy number to clipboard';
    DOM.createLink(contactDetails, 'Facebook Page', '_blank', 'https://www.facebook.com/theFrontyardEchague', '#1a74e4');
    
    
    const socials = DOM.createContainer(section, 'socials');
    const author = DOM.createContainer(socials);
    DOM.createPara(author, 'by Angelo Mendoza and Andrei De la Cruz');
    
    const sitemap2 = DOM.createSection(footer, 'sitemap');
    const div2 = DOM.createContainer(sitemap2);
    const heading2 = DOM.createTab(div2, 'Menu', 'heading');
    heading2.style.fontWeight = '700';
    DOM.createTab(div2, 'Meals', 'meals');
    DOM.createTab(div2, 'Snacks', 'snacks');
    DOM.createTab(div2, 'Drinks', 'drinks');
  }

  return { load };
})();

export default Footer;