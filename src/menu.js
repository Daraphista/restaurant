import DOM from "./DOM";
import Header from "./header";
const MenuPage = (() => {
  const _Item = (dish, price) => {
    return { dish, price };
  }
  const _loadSection = (parent, headingText, ...lis) => {
    const section = DOM.createSection(parent);
    DOM.createHeading(section, 'h2', headingText);
    DOM.createList(section, true, ...lis);
  }
  const _loadMain = (parent) => {
    const main = DOM.createContainer(parent, 'main');

    const col1 = DOM.createContainer(main, 'column');
    _loadSection(col1, 'BEST SELLER',
    _Item('Beef Biryani', '249'),
    _Item('Chicken Biryani', '229'),
    _Item('Shawarma Rice', '119'),
    _Item('Spicy Miso Ramen', '129'),
    _Item('Curry Ramen', '129'),
    _Item('Beef Gyudon', '129'),
    );
    _loadSection(col1, 'PASTA',
    _Item('Penne Pasta', '119'),
    _Item('Spaghetti Meatballs', '119'),
    _Item('Carbonara', '129')
    );
    _loadSection(col1, 'SIZZLING',
    _Item('Sizzling Bulalo', '149'),
    _Item('Sizzling Burger Steak', '119'),
    _Item('Sizzling Pares', '109'),
    _Item('Sizzling Sisig', '139'),
    _Item('Sizzling Tapa', '149')
    );
    _loadSection(col1, 'SILOG',
    _Item('Bagnetsilog', '109'),
    _Item('Tapsilog', '99'),
    _Item('Chicsilog', '109'),
    _Item('Porksilog', '109'),
    _Item('Liemposilog', '109'),
    _Item('Sausagesilog', '99'),
    );

    const col2 = DOM.createContainer(main, 'column');
    _loadSection(col2, 'PINOY FAVORITE',
    _Item('Bulalugaw', '119'),
    _Item('Beef Pares', '109'),
    _Item('Bagnet Pares', '109'),
    _Item('Batil Patong', '99'),
    _Item('Tokwa\'t Baboy', '129'),
    );
    _loadSection(col2, 'BURGER',
    _Item('8" Hawaiian Pizza Burger', '399'),
    _Item('Chicken Bun Burger with Fries', '149'),
    _Item('Cheesy Chicken Burger with Fries', '119'),
    _Item('Frontyard Burger with Fries', '129'),
    );
    _loadSection(col2, 'GRILLED',
    _Item('Chicken Inasal', ''),
    _Item('Chicken BBQ', ''),
    _Item('Liempo', ''),
    _Item('Boodle Bilao', ''),
    );
    _loadSection(col2, 'PIKA-PIKA',
    _Item('Mojos', '129'),
    _Item('Fresh Potatoe Fries', '129'),
    _Item('French Fries Overload', '119'),
    _Item('Nachos Overload', '119'),
    _Item('Chicken Skin', '79'),
    _Item('Chicharap', '69'),
    _Item('Streetfood Platter', '99'),
    );

  }

  const load = (parent) => {
    Header.load(parent)
    _loadMain(parent);
  }
  return { load }
})()

export default MenuPage;