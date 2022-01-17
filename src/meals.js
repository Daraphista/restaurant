import DOM from "./DOM";
import ramen from "./images/ramen1.jpg";
import carbonara from "./images/carbonara3.jpg";
import sisig from "./images/sisig3.jpg";
import bagnetsilog from "./images/bagnetsilog.jpg";
const MealsPage = (() => {
  const load = (parent) => {
    const bestSeller = DOM.loadMenuSection(parent, 'BEST SELLER', 'best-seller', ramen,
      DOM.Item('Beef Biryani', '249'),
      DOM.Item('Chicken Biryani', '229'),
      DOM.Item('Spicy Miso Ramen', '129'),
      DOM.Item('Curry Ramen', '129'),
      DOM.Item('Beef Gyudon', '129'),
    );
    bestSeller.id = 'main';
    const pasta = DOM.loadMenuSection(parent, 'PASTA', 'pasta', carbonara,
      DOM.Item('Penne Pasta', '119'),
      DOM.Item('Spaghetti Meatballs', '119'),
      DOM.Item('Carbonara', '129'),
    );
    const sizzling = DOM.loadMenuSection(parent, 'SIZZLING', 'sizzling', sisig,
      DOM.Item('Sizzling Bulalo', '149'),
      DOM.Item('Sizzling Burger Steak', '119'),
      DOM.Item('Sizzling Pares', '109'),
      DOM.Item('Sizzling Sisig', '139'),
      DOM.Item('Sizzling Tapa', '149'),
    );
    const silog = DOM.loadMenuSection(parent, 'SILOG', 'silog', bagnetsilog,
      DOM.Item('Bagnetsilog', '109'),
      DOM.Item('Tapsilog', '99'),
      DOM.Item('Chicsilog', '109'),
      DOM.Item('Porksilog', '109'),
      DOM.Item('Liemposilog', '109'),
    );
  };

  return { load };
})();

export default MealsPage;