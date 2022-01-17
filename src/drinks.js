import DOM from "./DOM";
import rh from "./images/redhorse.png";
import sml from "./images/san-mig-light.jpg";
import fundador from "./images/fundador.jpg";
const DrinksPage = (() => {
  const load = (parent) => {
    const firstSection = DOM.loadMenuSection(parent, 'RED HORSE', 'red-horse', rh);
    firstSection.id = 'main';
    DOM.loadMenuSection(parent, 'SAN MIGUEL LIGHT', 'san-mig-light', sml);
    DOM.loadMenuSection(parent, 'FUNDADOR LIGHT', 'fundador', fundador);
  }
  
  return { load }
})()

export default DrinksPage;