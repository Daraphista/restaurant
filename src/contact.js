const _createSection = (parent, headerText) => {
  const section = document.createElement('section');
  parent.appendChild(section);

  const sectionHeader = document.createElement('h2');
  sectionHeader.textContent = headerText;
  section.appendChild(sectionHeader);

  return section;
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
  content.appendChild(main);

    const contactSection = _createSection(main, 'Contact Us')
    contactSection.style.marginTop = '3rem';
    
    const contactSectionDiv = document.createElement('div');
    contactSectionDiv.classList.add('contact-section');
    contactSection.appendChild(contactSectionDiv);

        const mainSectionNumber = document.createElement('p');
        mainSectionNumber.textContent = '0905 800 0375';
        contactSectionDiv.appendChild(mainSectionNumber);

        const mainSectionFbPage = document.createElement('a');
        mainSectionFbPage.textContent = 'Facebook Page';
        mainSectionFbPage.target = '_blank';
        mainSectionFbPage.href = 'https://www.facebook.com/theFrontyardEchague';
        mainSectionFbPage.style.color = '#3167ff';
        contactSectionDiv.appendChild(mainSectionFbPage);

    const reservationSection = _createSection(main, 'Make a reservation');

      const reservationSectionForm = document.createElement('form');
      reservationSection.appendChild(reservationSectionForm);

        const firstNameLabel = document.createElement('label');
        firstNameLabel.setAttribute('for', 'fname');
        firstNameLabel.textContent = 'First Name';
        reservationSectionForm.appendChild(firstNameLabel);

          const firstNameInput = document.createElement('input');
          firstNameInput.type = 'text'
          firstNameInput.id = 'fname';
          firstNameLabel.appendChild(firstNameInput);

        const lastNameLabel = document.createElement('label');
        lastNameLabel.setAttribute('for', 'lname');
        lastNameLabel.textContent = 'Last Name';
        reservationSectionForm.appendChild(lastNameLabel);

          const lastNameInput = document.createElement('input');
          lastNameInput.type = 'text'
          lastNameInput.id = 'lname';
          lastNameLabel.appendChild(lastNameInput);

        const timeLabel = document.createElement('label');
        timeLabel.setAttribute('for', 'time');
        timeLabel.textContent = 'Time';
        reservationSectionForm.appendChild(timeLabel);

          const timeInput = document.createElement('input');
          timeInput.type = 'time'
          timeInput.id = 'time';
          timeLabel.appendChild(timeInput);

        const dateLabel = document.createElement('label');
        dateLabel.setAttribute('for', 'date');
        dateLabel.textContent = 'Date';
        reservationSectionForm.appendChild(dateLabel);

          const dateInput = document.createElement('input');
          dateInput.type = 'date'
          dateInput.id = 'date';
          dateLabel.appendChild(dateInput);

    const suggestionSection = _createSection(main, 'Suggestions');

      const suggestionBox = document.createElement('textarea');
      suggestionBox.rows = '10';
      suggestionBox.style.padding = '1rem';
      suggestionSection.appendChild(suggestionBox);
}

const loadContactPage = (content) => {
  loadHeader(content);
  loadMain(content);
}

export default loadContactPage;