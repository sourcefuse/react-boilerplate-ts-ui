import type {Meta, StoryObj} from '@storybook/react';
import {ResponsiveLoginPage} from './ResponsiveLoginPage';
import {ThemeProvider, createTheme} from '@mui/material';

const meta = {
  title: 'Examples/ResponsiveLoginPage',
  component: ResponsiveLoginPage,
} satisfies Meta<typeof ResponsiveLoginPage>;

export default meta;
type Story = StoryObj<typeof meta>;

const theme = createTheme();

const Template = () => {
  return (
    <ThemeProvider theme={theme}>
      <ResponsiveLoginPage />
    </ThemeProvider>
  );
};

const ResponsiveLoginPageTemplate: Omit<Story, 'args'> = {
  render: Template,
};

export const LoginPage: Story = {
  ...ResponsiveLoginPageTemplate,
  args: {},
};
