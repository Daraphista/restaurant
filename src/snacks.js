import DOM from "./DOM";
import cater from "./images/cater2.jpg";
import burger from "./images/burger.jpg";
import bbq from "./images/filipino-bbq.jpg";
import pikaPika from "./images/super-bowl.jpg";
const SnacksPage = (() => {
  const load = (parent) => {
    const pinoyFav = DOM.loadMenuSection(parent, 'PINOY FAVORITE', 'pinoy-favorite', cater,
      DOM.Item('Bulalugaw', '119'),
      DOM.Item('Beef Pares', '109'),
      DOM.Item('Bagnet Pares', '109'),
      DOM.Item('Batil Patong', '99'),
      DOM.Item('Tokwa\'t Baboy', '129'),
    );
    pinoyFav.id = 'main';
    DOM.loadMenuSection(parent, 'BURGER', 'burger', burger,
      DOM.Item('8" Hawaiian Pizza Burger', '399'),
      DOM.Item('Chicken Bun Burger with Fries', '149'),
      DOM.Item('Cheesy Chicken Burger with Fries', '119'),
      DOM.Item('Frontyard Burger with Fries', '129'),
    );
    const grilled = DOM.loadMenuSection(parent, 'GRILLED', 'grilled', bbq,
      DOM.Item('Chicken Inasal', '129'),
      DOM.Item('Chicken BBQ', '149'),
      DOM.Item('Liempo', '229'),
    );
    DOM.loadMenuSection(parent, 'PIKA-PIKA', 'pika-pika', pikaPika,
      DOM.Item('Mojos', '129'),
      DOM.Item('Potatoe Fries', '129'),
      DOM.Item('French Fries Overload', '119'),
      DOM.Item('Nachos Overload', '119'),
      DOM.Item('Chicken Skin', '79'),
    );
  }

  return { load };
})();

export default SnacksPage;