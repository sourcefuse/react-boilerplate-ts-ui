import {render, screen, within, fireEvent} from '@testing-library/react';
import React, {useState} from 'react';
import TransferList from './TransferList';

const MockTransferList = () => {
  const [left, setLeft] = useState([
    {value: 'li1', label: 'Left item 1'},
    {value: 'li2', label: 'Left item 2'},
    {value: 'li3', label: 'Left item 3'},
    {value: 'li4', label: 'Left item 4'},
  ]);
  const [right, setRight] = useState([
    {value: 'ri1', label: 'Right item 1'},
    {value: 'ri2', label: 'Right item 2'},
    {value: 'ri3', label: 'Right item 3'},
    {value: 'ri4', label: 'Right item 4'},
  ]);
  return <TransferList left={left} right={right} setLeft={setLeft} setRight={setRight} />;
};
describe('TransferList', () => {
  it('should be rendered', () => {
    render(<MockTransferList />);

    const leftCustomList = screen.getByTestId('left');
    expect(leftCustomList).toBeVisible();
    const leftSideList = within(leftCustomList).getByRole('list');
    const leftListItems = within(leftSideList).getAllByRole('button');
    expect(leftListItems.length).toBe(4);
    const rightCustomList = screen.getByTestId('right');
    expect(rightCustomList).toBeVisible();
    const rightSideList = within(rightCustomList).getByRole('list');
    const rightListItems = within(rightSideList).getAllByRole('button');
    expect(rightListItems.length).toBe(4);
    const transferListActions = screen.getByTestId('transferListActions');
    const actionButtons = within(transferListActions).getAllByRole('button');
    expect(actionButtons.length).toBe(4);
    const moveRightButton = within(transferListActions).getByRole('button', {name: /move selected right/i});
    expect(moveRightButton).toBeDisabled();
    const moveLeftButton = within(transferListActions).getByRole('button', {name: /move selected left/i});
    expect(moveLeftButton).toBeDisabled();
    const moveAllRightButton = within(transferListActions).getByRole('button', {name: /move all right/i});
    expect(moveAllRightButton).toBeEnabled();
    const moveAllLeftButton = within(transferListActions).getByRole('button', {name: /move all left/i});
    expect(moveAllLeftButton).toBeEnabled();
  });

  it('should be able to move the item from left to right', () => {
    render(<MockTransferList />);

    const leftCustomList = screen.getByTestId('left');
    const leftSideList = within(leftCustomList).getByRole('list');
    const leftListItem = within(leftSideList).getByRole('button', {name: /left item 1/i});
    fireEvent.click(leftListItem);
    const moveRightButton = screen.getByRole('button', {name: /move selected right/i});
    expect(moveRightButton).toBeEnabled();
    fireEvent.click(moveRightButton);
    const leftListItems = within(leftSideList).getAllByRole('button');
    const EXPECTED_LEFT_LIST_ITEMS = 3;
    expect(leftListItems.length).toBe(EXPECTED_LEFT_LIST_ITEMS);
    const rightCustomList = screen.getByTestId('right');
    const rightSideList = within(rightCustomList).getByRole('list');
    const rightListItems = within(rightSideList).getAllByRole('button');
    const EXPECTED_RIGHT_LIST_ITEMS = 5;
    expect(rightListItems.length).toBe(EXPECTED_RIGHT_LIST_ITEMS);
  });

  it('should be able to move the item from right to left', () => {
    render(<MockTransferList />);

    const rightCustomList = screen.getByTestId('right');
    const rightSideList = within(rightCustomList).getByRole('list');
    const rightListItem = within(rightSideList).getByRole('button', {name: /right item 1/i});
    fireEvent.click(rightListItem);
    const moveLeftButton = screen.getByRole('button', {name: /move selected left/i});
    expect(moveLeftButton).toBeEnabled();
    fireEvent.click(moveLeftButton);
    const rightListItems = within(rightSideList).getAllByRole('button');
    const EXPECTED_RIGHT_LIST_ITEMS = 3;
    expect(rightListItems.length).toBe(EXPECTED_RIGHT_LIST_ITEMS);
    const leftCustomList = screen.getByTestId('left');
    const leftSideList = within(leftCustomList).getByRole('list');
    const leftListItems = within(leftSideList).getAllByRole('button');
    const EXPECTED_LEFT_LIST_ITEMS = 3;
    expect(leftListItems.length).toBe(EXPECTED_LEFT_LIST_ITEMS);
  });

  it('should be able to move all items from left to right', () => {
    render(<MockTransferList />);

    const moveAllRightButton = screen.getByRole('button', {name: /move all right/i});
    fireEvent.click(moveAllRightButton);

    const leftCustomList = screen.getByTestId('left');
    const leftSideList = within(leftCustomList).getByRole('list');
    const leftListItems = within(leftSideList).queryAllByRole('button');
    expect(leftListItems.length).toBe(0);

    const rightCustomList = screen.getByTestId('right');
    const rightSideList = within(rightCustomList).getByRole('list');
    const rightListItems = within(rightSideList).queryAllByRole('button');
    expect(rightListItems.length).toBe(8);
  });

  it('should be able to move all items from right to left', () => {
    render(<MockTransferList />);

    const moveAllLeftButton = screen.getByRole('button', {name: /move all left/i});
    fireEvent.click(moveAllLeftButton);

    const rightCustomList = screen.getByTestId('right');
    const rightSideList = within(rightCustomList).getByRole('list');
    const rightListItems = within(rightSideList).queryAllByRole('button');
    expect(rightListItems.length).toBe(0);

    const leftCustomList = screen.getByTestId('left');
    const leftSideList = within(leftCustomList).getByRole('list');
    const leftListItems = within(leftSideList).queryAllByRole('button');
    expect(leftListItems.length).toBe(8);
  });
});
