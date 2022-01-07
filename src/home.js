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
      
        const aboutUs = document.createElement('div');
        aboutUs.classList.add('about-us');
        main.appendChild(aboutUs);
      
          const aboutUsSection = document.createElement('section');
          aboutUs.appendChild(aboutUsSection);
      
            const aboutUsHeader = document.createElement('h2');
            aboutUsHeader.textContent = 'About Us';
            aboutUsSection.appendChild(aboutUsHeader);
      
            const aboutUsPara = document.createElement('p');
            aboutUsPara.textContent = `The Frontyard is one of the best resto-bars in Echague,
            Isabela, Philippines. The place is open-air and has a
            magnificently charming tropical design. It's the perfect
            place to hang out on a hard day's night, opening a cold
            one with the boys/gals and laying back while snacking on
            a sizzling plate of sisig. If you're not the type for
            beers, so maybe you want a place to eat lunch with the
            workmates? It's perfect for that too! The heat is hardly
            ever an inconvenience here because of the fresh breeze
            that's always blowing. So what are you waiting for?
            Come and eat, drink, and unwind at the Frontyard today!`;
            aboutUsSection.appendChild(aboutUsPara);
      
        const openingHours = document.createElement('div');
        openingHours.classList.add('opening-hours');
        main.appendChild(openingHours);
      
          const openingHoursSection = document.createElement('section');
          openingHours.appendChild(openingHoursSection);
      
            const openingHoursDiv = document.createElement('div');
            openingHoursSection.appendChild(openingHoursDiv);
      
              const openingHoursDivHeader = document.createElement('h2');
              openingHoursDivHeader.textContent = 'Opening Hours';
              openingHoursDiv.appendChild(openingHoursDivHeader);
      
              const openingHoursDivList = document.createElement('ul');
              openingHoursDiv.appendChild(openingHoursDivList);
      
                const li1 = document.createElement('li');
                li1.textContent = 'Sunday: 10am - 10am';
                openingHoursDivList.appendChild(li1);
      
                const li2 = document.createElement('li');
                li2.textContent = 'Monday: Closed';
                openingHoursDivList.appendChild(li2);
      
                const li3 = document.createElement('li');
                li3.textContent = 'Tuesday: 10am - 10am';
                openingHoursDivList.appendChild(li3);
      
                const li4 = document.createElement('li');
                li4.textContent = 'Wednesday: 10am - 10am';
                openingHoursDivList.appendChild(li4);
      
                const li5 = document.createElement('li');
                li5.textContent = 'Thursday: 10am - 10am';
                openingHoursDivList.appendChild(li5);
      
                const li6 = document.createElement('li');
                li6.textContent = 'Friday: 10am - 10am';
                openingHoursDivList.appendChild(li6);
      
                const li7 = document.createElement('li');
                li7.textContent = 'Saturday: 10am - 10am';
                openingHoursDivList.appendChild(li7);
      
            const openingHoursImg = document.createElement('img');
            openingHoursImg.src = '/src/images/opening-hours-background.jpg';
            openingHoursSection.appendChild(openingHoursImg);
      
        const location = document.createElement('div');
        location.classList.add('location');
        main.appendChild(location);
      
          const locationSection = document.createElement('section');
          location.appendChild(locationSection);
      
            const locationSectionDiv = document.createElement('div');
            locationSection.appendChild(locationSectionDiv);
      
              const locationSectionDivHeader = document.createElement('h2');
              locationSectionDivHeader.textContent = 'Location';
              locationSectionDiv.appendChild(locationSectionDivHeader);
      
              const locationSectionDivPara = document.createElement('p');
              locationSectionDivPara.textContent = `Ramos St, Purok 7, Taggappan, Echague, Isabela,
              Philippines`;
              locationSectionDiv.appendChild(locationSectionDivPara);
      
            const locationSectionIframe = document.createElement('iframe');
            locationSectionIframe.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d955.37721381034!2d121.6743222880653!3d16.701443299277294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339aa937c7676921%3A0x761615bda445781d!2sThe%20Frontyard!5e0!3m2!1sen!2sph!4v1640853977731!5m2!1sen!2sph'
            locationSectionIframe.loading = 'lazy';
            locationSection.appendChild(locationSectionIframe);
  }
  const loadFooter = (content) => {
    const footer = document.createElement('div');
    const footerPara = document.createElement('p');
  }

  const loadHomePage = (content) => {
    loadHeader(content);
    loadMain(content);
    loadFooter(content);
  }

export default loadHomePage

