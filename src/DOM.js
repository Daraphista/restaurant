const DOM = (() => {
  let _sections = 0;
  const createContainer = (parent, ...classNames) => {
    const container = document.createElement('div');
    parent.appendChild(container);
    classNames.forEach(className => {
      container.classList.add(className);
    })
    
    return container;
  }
  const createSection = (parent, ...classNames) => {
    const section = document.createElement('section');
    parent.appendChild(section);
    classNames.forEach(className => {
      section.classList.add(className);
    })

    return section;
  }
  const createHeading = (parent, type, text) => {
    const heading = document.createElement(type);
    heading.textContent = text;
    parent.appendChild(heading);
  }
  const createPara = (parent, text) => {
    const para = document.createElement('p');
    para.textContent = text;
    parent.appendChild(para);
  }
  const createLink = (parent, text, target, href, color) => {
    const link = document.createElement('a');
    link.textContent = text;
    link.target = target;
    link.href = href;
    link.style.color = color;

    parent.appendChild(link);

    return link;
  }
  const createTab = (parent, text, ...classNames) => {
    const tab = document.createElement('a');
    tab.textContent = text;
    parent.appendChild(tab);
    tab.classList.add('tab')
    classNames.forEach(className => {
      tab.classList.add(className);
    })
    
    return tab;
  }
  const createSpan = (parent, className) => {
    const span = document.createElement('span');
    span.classList.add(className);
    parent.appendChild(span);

    return span
  }
  const createList = (parent, isItem, ...lis) => {
    const ul = document.createElement('ul');
    parent.appendChild(ul);

    if(isItem) {
      lis.forEach(li => {
        const item = document.createElement('li');
        item.textContent = li.dish;

        const span = createSpan(item);
        span.textContent = li.price;

        ul.appendChild(item);
      })
    } else {
      lis.forEach(li => {
        const item = document.createElement('li');
        item.textContent = li;
        ul.appendChild(item);
      })
    }
  }
  const Item = (dish, price) => {
    return { dish, price };
  }
  const createImage = (parent, src, id) => {
    const image = document.createElement('img');
    image.src = src;
    image.id = id;
    parent.appendChild(image);

    return image;
  }
  const createIcon = (parent, ...classNames) => {
    const icon = document.createElement('i');
    parent.appendChild(icon);
    classNames.forEach(className => {
      icon.classList.add(className);
    })

    return icon;
  }
  const createIframe = (parent, src, loading) => {
    const iFrame = document.createElement('iframe');
    iFrame.src = src;
    iFrame.loading = loading;
    parent.appendChild(iFrame);
  }
  const createForm = (parent, ...inputs) => {
    const form = document.createElement('form');
    parent.appendChild(form);

    inputs.forEach(inputObj => {
      const label = document.createElement('label');
      label.setAttribute('for', inputObj.id);
      label.textContent = inputObj.labelText;
      form.appendChild(label);

      const input = document.createElement('input');
      input.type = inputObj.type;
      input.id = inputObj.id;
      label.appendChild(input);
    })
  }
  const createTextArea = (parent, rows, cols) => {
    const textArea = document.createElement('textarea');
    textArea.rows = rows;
    parent.appendChild(textArea);
  }
  const loadMenuSection = (parent, headingText, className, image, ...lis) => {
    _sections++;
    const _section = createSection(parent, className);
    _section.classList.add('meals');
    const _split = createContainer(_section, 'split');
    let _text, _img;
    if(_sections % 2 == 0) {
      _text = createContainer(_split, 'text');
      _img = createContainer(_split, 'img', 'right');
    } else {
      _img = createContainer(_split, 'img', 'left');
      _text = createContainer(_split, 'text');
    }
    createHeading(_text, 'h2', headingText)
    createList(_text, true, ...lis);
    createImage(_img, image);

    return _section;
  }
  const createButton = (parent, text, ...classNames) => {
    const button = document.createElement('button');
    button.textContent = text;
    classNames.forEach(className => {
      button.classList.add(className);
    })
    parent.appendChild(button);

    return button
  }

  return {
  createContainer, 
  createSection, 
  createHeading, 
  createPara,
  createLink,
  createTab,
  createSpan,
  createList,
  Item,
  createImage,
  createIcon,
  createIframe,
  createForm,
  createTextArea,
  loadMenuSection,
  createButton,
  }
})();

export default DOM;