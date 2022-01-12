const DOM = (() => {
  const createContainer = (parent, ...classNames) => {
    const container = document.createElement('div');
    parent.appendChild(container);
    classNames.forEach(className => {
      container.classList.add(className);
    })
    
    return container;
  }
  const createSection = (parent) => {
    const section = document.createElement('section');
    parent.appendChild(section);

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
    link.color = color;

    parent.appendChild(link);
  }
  const createTab = (parent, className) => {
    const tab = document.createElement('a');
    tab.classList.add(className);
    tab.textContent = className;
    parent.appendChild(tab);
  }
  const createList = (parent, isItem, ...lis) => {
    const ul = document.createElement('ul');
    parent.appendChild(ul);

    if(isItem) {
      lis.forEach(li => {
        const item = document.createElement('li');
        item.textContent = li.dish;

        const div = createContainer(item, undefined);
        div.textContent = li.price;
        item.appendChild(div);

        parent.appendChild(item);
      })
    } else {
      lis.forEach(li => {
        const item = document.createElement('li');
        item.textContent = li;
        ul.appendChild(item);
      })
    }
  }
  const createImage = (parent, src) => {
    const image = document.createElement('img');
    image.src = src;
    parent.appendChild(image);
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

  return {
  createContainer, 
  createSection, 
  createHeading, 
  createPara,
  createLink,
  createTab,
  createList,
  createImage,
  createIframe,
  createForm,
  createTextArea,
  }
})();

export default DOM;