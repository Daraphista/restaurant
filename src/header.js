import DOM from "./DOM";
import logo from "./images/logo.png";
// import backgroundImg from "./images/about-us-background2.jpg"

const Header = (() => {
  const _loadBackgroundImg = (parent) => {
    DOM.createContainer(parent, 'background', 'header');
  }
  const _loadLogo = (parent) => {
    DOM.createImage(parent, logo);
  }
  const _loadCenterLogo = (parent) => {
    // const container = DOM.createContainer(parent, 'center-logo')
    // _loadLogo(container);
    DOM.createImage(parent, logo, 'center-logo')
  }
  const _loadTitle = (parent) => {
    DOM.createHeading(parent, 'h1', 'THE FRONTYARD.');
  }
  const _loadTabs = (parent) => {
    const tabs = DOM.createContainer(parent, 'tabs');
    DOM.createTab(tabs, 'home');
    DOM.createTab(tabs, 'menu');
    DOM.createTab(tabs, 'contact');
  }
  const load = (parent) => {
    const _header = DOM.createContainer(parent, 'header');
    _loadBackgroundImg(_header);
    const _container = DOM.createContainer(_header, 'header-head', 'no-animation');
    _loadLogo(_container);
    _loadTitle(_container);
    _loadTabs(_container);
    _loadCenterLogo(_header);
  } 

  return { load };
})();

export default Header;