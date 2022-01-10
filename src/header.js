import DOM from "./DOM";
import logo from "./images/logo.png";
const Header = (() => {
  const _loadLogo = (parent) => {
    DOM.createImage(parent, logo);
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
    _loadLogo(_header);
    _loadTitle(_header);
    _loadTabs(_header);
  }

  return { load };
})();

export default Header;