import {render, screen} from '@testing-library/react';
import HoverRating from '.';

describe('HoverRating', () => {
  it('should render rating component', () => {
    render(<HoverRating value={3} />);
    const rating = screen.getByRole('radio', {name: '3 Stars'});
    expect(rating).toBeInTheDocument();
  });
});
