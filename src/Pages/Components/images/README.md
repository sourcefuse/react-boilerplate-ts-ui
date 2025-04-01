## SVG Import Handling

By default, this boilerplate allows importing SVGs without any special prefixes:

```tsx
import logo from './logo.svg';

const App = () => <img src={logo} alt="Logo" />;
```

### Using `@farmfe/js-plugin-svgr`

If you choose to use `@farmfe/js-plugin-svgr`, you must import SVGs with the `?url` suffix to get them as URLs:

```tsx
import logo from './logo.svg?url';

const App = () => <img src={logo} alt="Logo" />;
```

Otherwise, SVG files will be converted into React components as per plugin's behaviour.
