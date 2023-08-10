import type {Meta, StoryObj} from '@storybook/react';
import Form from 'Components/Forms/Form';
import FormSlider from 'Components/Forms/FormSlider/FormSlider';
import {SliderProps} from 'Components/Slider/Slider';

const meta = {
  title: 'Components/Form/FormSlider',
  component: FormSlider,
  tags: ['autodocs'],
} satisfies Meta<typeof FormSlider>;

export default meta;
type Story = StoryObj<typeof meta>;

const FormSliderTemplate: Omit<Story, 'args'> = {
  render: ({id, label, min, max, ...rest}: SliderProps) => {
    return (
      <Form
        initialValues={{
          [id!]: 4,
        }}
        onSubmit={() => {}}
      >
        <FormSlider id={id} label={label} min={min} max={max} />
      </Form>
    );
  },
};

export const DefaultFormSlider: Story = {
  ...FormSliderTemplate,
  name: 'Default',
  args: {
    id: 'Default',
    label: 'Default',
  },
};

export const RangeFormSlider: Story = {
  ...FormSliderTemplate,
  name: 'Range',
  args: {
    id: 'Range',
    label: 'Range',
    min: 0,
    max: 10,
  },
};
