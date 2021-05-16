import { act, render, cleanup, fireEvent } from '@testing-library/react';
import SignupPage from '../../../pages/Signup';

describe('Signup page', () => {
  afterEach(() => {
    console.log('afterEach');
    cleanup();
  });
  describe('ID', () => {
    test('아이디를 입력하지 않으면 중복확인 버튼이 비활성화 됩니다.', () => {
      //
      const { container, queryByTestId } = render(<SignupPage />);
      const $input = queryByTestId('inputId');
      const $button = queryByTestId('buttonDupcheck');

      act(() => {
        fireEvent.change($input, { target: { value: 'inserted id' } });
      });

      expect(($input as HTMLInputElement).value).toBe('inserted id');
      // expect(($button as HTMLButtonElement).disabled).toBe(true);
    });
  });
});
