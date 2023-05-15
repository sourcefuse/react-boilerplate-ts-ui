import {render, screen} from '@testing-library/react';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
  it('renders the input element', () => {
    render(
      <SearchBar
        componentList={[
          {
            label: 'Test',
            visible: true,
            type: 'title',
          },
        ]}
        updateList={() => {}}
      />,
    );
    const inputElement = screen.getByPlaceholderText('Search Components');
    expect(inputElement).toBeInTheDocument();
  });
});
