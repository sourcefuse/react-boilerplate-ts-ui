import {addons} from '@storybook/manager-api';
import {themes} from '@storybook/theming';
import arcTheme from './arcTheme';

addons.setConfig({
  theme: arcTheme,
});
