import DOM from "./DOM"
import Header from "./header";
const ContactPage = (() => {
  const _Input = (labelText, type, id) => {
    return { labelText, type, id };
  }
  const _loadContactSection = (parent) => {
    const section = DOM.createSection(parent);
    DOM.createHeading(section, 'h2', 'Contact Us');

    const details = DOM.createContainer(section, 'contact-section');
    DOM.createPara(details, '0905 800 0375');
    DOM.createLink(details, 
      'Facebook Page', 
      '_blank',
      'https://www.facebook.com/theFrontyardEchague',
      '#3167ff',
    )
  }
  const _loadReservationSection = (parent) => {
    const section = DOM.createSection(parent);
    DOM.createHeading(section, 'h2', 'Make a reservation');

    DOM.createForm(section,
      _Input('First Name', 'text', 'fname'),
      _Input('Last Name', 'text', 'lname'),
      _Input('Time', 'time', 'time'),
      _Input('Date', 'date', 'date'),  
    )
  }
  const _loadSuggestionSection = (parent) => {
    const section = DOM.createSection(parent);
    DOM.createHeading(section, 'h2', 'Suggestions');
    DOM.createTextArea(section, '10', undefined);
  }
  const _loadMain = (parent) => {
    const main = DOM.createContainer(parent, 'main', 'contact');
    _loadContactSection(main);
    _loadReservationSection(main);
    _loadSuggestionSection(main);
  }

  const load = (parent) => {
    // Header.load(parent);
    _loadMain(parent);
  }
  return { load }
})()

export default ContactPage;