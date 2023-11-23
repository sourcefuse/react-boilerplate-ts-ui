import type {Meta, StoryObj} from '@storybook/react';
import RadioButton, {RadioButtonProps} from 'Components/RadioButton/RadioButton';
import {useState} from 'react';

const meta = {
  title: 'Components/RadioButton',
  component: RadioButton,
  tags: ['autodocs'],
} satisfies Meta<typeof RadioButton>;

export default meta;
type Story = StoryObj<typeof meta>;

const options = [
  {label: `I'm In`, value: 'yes'},
  {label: `I'm Out`, value: 'no'},
];

const Template = ({id, label, options, ...rest}: RadioButtonProps) => {
  const [value, setValue] = useState<string>('');
  return <RadioButton {...rest} id={id} value={value} label={label} onChange={setValue} options={options} />;
};

const RadioButtonTemplate: Omit<Story, 'args'> = {
  render: Template,
};

export const DefaultRadioButton: Story = {
  ...RadioButtonTemplate,
  name: 'Default',
  args: {
    id: 'emailUpdates',
    label: 'Opt in for email Updates',
    options,
  },
};
