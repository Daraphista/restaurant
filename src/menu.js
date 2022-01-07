const _createList = (ul, ...items) => {
  items.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item.substr(0, item.indexOf('Price'));
    ul.appendChild(li);

    const priceDiv = document.createElement('div');
    priceDiv.textContent = item.substr(item.indexOf('Price')+5);
    priceDiv.style.marginLeft = 'auto';
    li.appendChild(priceDiv);

    li.style.display = 'flex';
    li.style.width = 'min(100%, 25rem)';
  })
}
const _createSection = (parent, headerText, ...items) => {
  const section = document.createElement('section');
  section.style.fontSize = '1.5rem';
  parent.appendChild(section);

  const header = document.createElement('h2');
  header.textContent = headerText;
  header.style.marginBottom = '1.25rem';
  section.appendChild(header);

  const ul = document.createElement('ul');
  section.appendChild(ul);
  _createList(ul, ...items);

  return section;
}
const _createColumn = (parent) => {
  const column = document.createElement('div');
  column.style.width = '40%';
  column.style.gap = '4rem';
  column.style.alignItems = 'center';
  parent.appendChild(column);

  return column
}
const loadHeader = (content) => {
  const header = document.createElement('div');
  header.classList.add('header');
  content.appendChild(header);
  
    const logo = document.createElement('img');
    logo.src = '../src/images/logo.png';
    header.appendChild(logo);
  
    const title = document.createElement('h1');
    title.textContent = 'THE FRONTYARD.';
    header.appendChild(title);
  
    const tabs = document.createElement('div');
    header.appendChild(tabs);

      const homeTab = document.createElement('a');
      homeTab.classList.add('home');
      homeTab.textContent = 'home';
      tabs.appendChild(homeTab);

      const menuTab = document.createElement('a');
      menuTab.classList.add('menu');
      menuTab.textContent = 'menu';
      tabs.appendChild(menuTab);

      const contactTab = document.createElement('a');
      contactTab.classList.add('contact');
      contactTab.textContent = 'contact';
      tabs.appendChild(contactTab);
}
const loadMain = (content) => {
  const main = document.createElement('div');
  main.classList.add('main');
  main.style.flexDirection = 'row';
  main.style.justifyContent = 'space-around';
  main.style.paddingBlock = '4rem';
  content.appendChild(main);

    const column1 = _createColumn(main);
    const column2 = _createColumn(main);

      const bestSeller = _createSection(column1, 'BEST SELLER',
      'Beef Biryani Price 249',
      'Chicken Biryani Price 229',
      'Shawarma Rice Price 119',
      'Spicy Miso Ramen Price 129',
      'Curry Ramen Price 129',
      'Beef Gyudon Price 129');

      const pasta = _createSection(column1, 'PASTA',
      'Penne Pasta Price 119',
      'Spaghetti Meatballs Price 119',
      'Carbonara Price 129');

      const sizzling = _createSection(column1, 'SIZZLING',
      'Sizzling Bulalo Price 149',
      'Sizzling Burger Steak Price 119',
      'Sizzling Pares Price 109',
      'Sizzling Sisig Price 139',
      'Sizzling Tapa Price 149');

      const silog = _createSection(column1, 'SILOG',
      'Bagnetsilog Price 109',
      'Tapsilog Price 99',
      'Chicsilog Price 109',
      'Porksilog Price 109',
      'Liemposilog Price 109',
      'Sausagesilog Price 99');

      const pinoyFav = _createSection(column2, 'PINOY FAVORITE',
      'Bulalugaw Price 119',
      'Beef Pares Price 109',
      'Bagnet Pares Price 109',
      'Batil Patong Price 99',
      'Tokwa\'t Baboy Price 129');

      const burger = _createSection(column2, 'BURGER', 
      '8" Hawaiian Pizza Burger Price 399', 
      'Chicken Bun Burger with Fries Price 149', 
      'Cheesy Chicken Burger with Fries Price 119',
      'Frontyard Burger with Fries Price 129');
      
      const grilled = _createSection(column2, 'GRILLED',
      'Chicken Inasal Price',
      'Chicken BBQ Price',
      'Liempo Price',
      'Boodle Bilao Price');

      const pikaPika = _createSection(column2, 'PIKA-PIKA',
      'Mojos Price 129',
      'Fresh Potatoe Fries Price 129',
      'French Fries Overload Price 119',
      'Nachos Overload Price 119',
      'Chicken Skin Price 79',
      'Chicharap Price 69',
      'Streetfood Platter Price 99');
}

const loadMenuPage = (content) => {
  loadHeader(content);
  loadMain(content);
}

export default loadMenuPage;