import { screen, render, cleanup, fireEvent } from '@testing-library/react';
import Counter from '../../../components/counter/Counter';

describe('Counter', () => {
  // You don't need to import or use this, it's done automagically for you!
  afterEach(cleanup);

  it('초기값은 0입니다.', () => {
    render(<Counter />);

    const $count = screen.queryByTestId('count');

    expect($count.textContent).toBe('0');
  });
});
