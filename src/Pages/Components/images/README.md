# Image Assets

This folder contains SVG images used in the project.

## SVG Import Behavior

In this project, we are exporting multiple SVG images as **URLs** instead of React components.

### **Why Import as a URL?**

```ts
import buttonImg from './button.svg?url';
import checkboxImg from './checkbox.svg?url';
import dropdownImg from './dropdown.svg?url';
import inputImg from './input.svg?url';
import modalImg from './modal.svg?url';
import navigationImg from './navigation.svg?url';
import radioButtonImg from './radio-button.svg?url';
import toggleImg from './toggle.svg?url';

export {buttonImg, checkboxImg, dropdownImg, inputImg, modalImg, navigationImg, radioButtonImg, toggleImg};
```

### **Reasons for Using `?url`**

- In **Vite**, SVGs are already treated as URLs when imported, so we don't need the `svgr()` plugin.
- In **Farm**, SVG imports behave as **React components** by default, which causes errors when using them inside `<img>` tags.
- To maintain **consistency with and Farm**, we explicitly import SVGs as URLs using `?url`.

### **How to Use the Exported Images**

You can import and use these images in your components like this:

```tsx
import {buttonImg} from '../img';

export default function Button() {
  return <img src={buttonImg} alt={name} />;
}
```

### **Using Image URLs in Components**

If you are passing image URLs as props in a component like `ComponentViewItem`, ensure that the image is imported correctly:

```tsx
import componentLists from '../Components/ComponentList';

<ComponentViewItem imageUrl={imageUrl} name={name} variants={variants} link={link} />;
```

This ensures that SVGs work consistently across different build tools without additional configuration.
