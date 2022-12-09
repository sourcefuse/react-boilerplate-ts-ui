import {
  buttonImg,
  checkboxImg,
  dropdownImg,
  inputImg,
  modalImg,
  navigationImg,
  radioButtonImg,
  toggleImg,
} from './images';

const componentList = [
  {name: 'Buttons', imageUrl: buttonImg, variants: 10, link: 'button'},
  {name: 'Modal', imageUrl: modalImg, variants: 4, link: 'modal'},
  {name: 'Inputs', imageUrl: inputImg, variants: 6, link: 'input'},
  {
    name: 'Dropdown / Autofill',
    imageUrl: dropdownImg,
    variants: 4,
    link: 'dropdown-autocomplete',
  },
  {name: 'Radio Buttons', imageUrl: radioButtonImg, variants: 2, link: 'radio-button'},
  {
    name: 'Toggle Buttons / Switches',
    imageUrl: toggleImg,
    variants: 4,
    link: 'toggle-button',
  },
  {name: 'Checkboxes', imageUrl: checkboxImg, variants: 2, link: 'checkbox'},
  {name: 'Navigation', imageUrl: navigationImg, variants: 9, link: 'navigation'},
];

export default componentList;
