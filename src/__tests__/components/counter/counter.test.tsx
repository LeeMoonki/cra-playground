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

  it('증가 버튼을 클릭하면 값이 한 단위 증가합니다.', () => {
    render(<Counter />);

    const $count = screen.queryByTestId('count');
    const $buttonIncrease = screen.queryByRole('button', { name: '증가' });

    fireEvent.click($buttonIncrease);

    expect($count.textContent).toBe('1');
  });

  it('감소 버튼을 클릭하면 값이 한 단위 감소합니다.', () => {
    render(<Counter />);

    const $count = screen.queryByTestId('count');
    const $buttonDecrease = screen.queryByRole('button', { name: '감소' });

    fireEvent.click($buttonDecrease);

    expect($count.textContent).toBe('-1');
  });

  it('초기화 버튼을 클릭하면 값을 초기화합니다.', () => {
    render(<Counter />);

    const $count = screen.queryByTestId('count');
    const $buttonIncrease = screen.queryByRole('button', { name: '증가' });
    const $buttonReset = screen.queryByRole('button', { name: '초기화' });

    fireEvent.click($buttonIncrease);
    fireEvent.click($buttonIncrease);

    fireEvent.click($buttonReset);

    expect($count.textContent).toBe('0');
  });
});
