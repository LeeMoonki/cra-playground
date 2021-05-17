import { screen, render, cleanup, fireEvent } from '@testing-library/react';
import SignupPage from '../../../pages/Signup';

describe('Signup page', () => {
  afterEach(cleanup);

  describe('ID', () => {
    test('아이디를 입력하지 않으면 중복확인 버튼이 비활성화 되고 입력하면 활성화 됩니다.', async () => {
      const { getByTestId } = render(<SignupPage />);
      const $input = getByTestId('inputId');
      const $button = getByTestId('buttonDupcheck');

      expect(($input as HTMLInputElement).value).toBe('');
      expect($button).toBeDisabled();

      fireEvent.change($input, { target: { value: 'inserted id' } });

      expect(($input as HTMLInputElement).value).toBe('inserted id');
      expect($button).not.toBeDisabled();
    });

    test('"아이디를 입력하지 않으면 중복확인 버튼이 비활성화 되고 입력하면 활성화 됩니다." 테스트를 Guiding Principle에 따라 작성합니다.', () => {
      // screen은 query가 document.body에 미리 바운딩된 객체입니다.
      render(<SignupPage />);

      const $input = screen.getByLabelText('ID') as HTMLInputElement;
      const $button = screen.getByRole('button', { name: '중복확인' });

      expect($input.value).toBe('');
      expect($button).toBeDisabled();

      fireEvent.change($input, { target: { value: 'inserted id' } });

      expect($input.value).toBe('inserted id');
      expect($button).not.toBeDisabled();
    });
  });
});
