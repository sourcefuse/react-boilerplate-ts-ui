import type {Meta, StoryObj} from '@storybook/react';
import Slider from 'Components/Slider/Slider';

const meta = {
  title: 'Components/Slider',
  component: Slider,
  tags: ['autodocs'],
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const defaultSlider: Story = {
  name: 'Default',
  args: {},
};

export const smallSlider: Story = {
  name: 'Small',
  args: {
    size: 'small',
  },
};
