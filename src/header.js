import DOM from "./DOM";
import logo from "./images/logo.png";

const Header = (() => {
  const _loadBackgroundImg = (parent) => {
    DOM.createContainer(parent, 'background', 'header');
  }
  const _loadLogo = (parent) => {
    DOM.createImage(parent, logo);
  }
  const _loadCenterLogo = (parent) => {
    DOM.createImage(parent, logo, 'center-logo')
  }
  const _loadTitle = (parent) => {
    DOM.createHeading(parent, 'h1', 'THE FRONTYARD.');
  }
  const _loadTabs = (parent) => {
    const tabs = DOM.createContainer(parent, 'tabs');
    DOM.createTab(tabs, 'Home', 'home');

    const dropdown1 = DOM.createContainer(tabs, 'dropdown', 'menu');
    const menu = DOM.createTab(dropdown1, 'Menu', 'menu');
    DOM.createIcon(menu, 'fas', 'fa-caret-down');
    const content1 = DOM.createContainer(dropdown1, 'dropdown-content');
    DOM.createTab(content1, 'Meals', 'meals');
    DOM.createTab(content1, 'Snacks', 'snacks');
    DOM.createTab(content1, 'Drinks', 'drinks');
    const contact = DOM.createTab(tabs, 'Contact', 'contact');
    contact.href = '#footer';
  }
  const load = (parent) => {
    const header = DOM.createContainer(parent, 'header');
    header.id = 'top';
    _loadBackgroundImg(header);
    const _container = DOM.createContainer(header, 'header-head', 'no-animation');
    _loadLogo(_container);
    _loadTitle(_container);
    _loadTabs(_container);
    _loadCenterLogo(header);
    return header;
  } 

  return { load };
})();

export default Header;