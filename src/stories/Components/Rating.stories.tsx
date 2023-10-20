import type {Meta, StoryObj} from '@storybook/react';
import Rating, {RatingProps} from 'Components/Rating';
import {useState} from 'react';

const meta = {
  title: 'Components/Rating',
  component: Rating,
  tags: ['autodocs'],
} satisfies Meta<typeof Rating>;
const RATING_TWO = 2;
export default meta;
type Story = StoryObj<typeof meta>;

const Template = ({name, label}: RatingProps) => {
  const [value, setValue] = useState(RATING_TWO);
  const [hover, setHover] = useState(-1);

  return (
    <Rating
      name={name}
      onChangeActive={(event, newHover) => {
        setHover(newHover);
      }}
      onChange={(event, newValue) => {
        if (newValue) setValue(newValue);
      }}
      precision={0.5}
      hover={hover}
      value={value}
      label={label}
    />
  );
};

const RatingTemplate: Omit<Story, 'args'> = {
  render: Template,
};

export const DefaultRating: Story = {
  ...RatingTemplate,
  name: 'Default',
  args: {
    name: 'rating-story',
  },
};

export const RatingWithLabel: Story = {
  ...RatingTemplate,
  name: 'Label',
  args: {
    ...DefaultRating.args,
    label: true,
  },
};
