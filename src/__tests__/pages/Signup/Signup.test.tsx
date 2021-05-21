import { screen, render, cleanup, fireEvent } from '@testing-library/react';
import SignupPage from '../../../pages/Signup';

describe('Signup page', () => {
  afterEach(cleanup);

  describe('ID', () => {
    it('아이디를 입력하지 않으면 중복확인 버튼이 비활성화 되고 입력하면 활성화 됩니다.', async () => {
      const { getByTestId } = render(<SignupPage />);
      const $input = getByTestId('inputId');
      const $button = getByTestId('buttonDupcheck');

      expect(($input as HTMLInputElement).value).toBe('');
      expect($button).toBeDisabled();

      fireEvent.change($input, { target: { value: 'inserted id' } });

      expect(($input as HTMLInputElement).value).toBe('inserted id');
      expect($button).not.toBeDisabled();
    });

    it('"아이디를 입력하지 않으면 중복확인 버튼이 비활성화 되고 입력하면 활성화 됩니다." 테스트를 Guiding Principle에 따라 작성합니다.', () => {
      // screen은 query가 document.body에 미리 바운딩된 객체입니다.
      render(<SignupPage />);

      const $input = screen.getByLabelText('아이디') as HTMLInputElement;
      const $button = screen.getByRole('button', { name: '중복확인' });

      expect($input.value).toBe('');
      expect($button).toBeDisabled();

      fireEvent.change($input, { target: { value: 'inserted id' } });

      expect($input.value).toBe('inserted id');
      expect($button).not.toBeDisabled();
    });
  });

  describe('Password', () => {
    describe('비밀번호', () => {
      it('비밀번호가 비어있다면 에러 메세지를 노출하지 않습니다.', () => {
        render(<SignupPage />);

        const $passwordError = screen.queryByTestId('password-error');

        expect($passwordError).toBeNull();
      });

      it('만약 적절한 형식의 비밀번호가 아니라면 비밀번호 에러를 노출합니다.', () => {
        render(<SignupPage />);

        const $input = screen.getByLabelText('비밀번호') as HTMLInputElement;

        fireEvent.change($input, { target: { value: 'abcd' } });

        const $passwordError = screen.queryByTestId('password-error');

        expect($input.value).toBe('abcd');
        expect($passwordError).not.toBeNull();
      });

      it('만약 적절한 형식의 비밀번호라면 비밀번호 에러를 노출하지 않습니다.', () => {
        render(<SignupPage />);

        const $input = screen.getByLabelText('비밀번호') as HTMLInputElement;

        fireEvent.change($input, { target: { value: 'abcd123456678' } });

        const $passwordError = screen.queryByTestId('password-error');

        expect($input.value).toBe('abcd123456678');
        expect($passwordError).toBeNull();
      });
    });

    describe('비밀번호 확인', () => {
      it('비밀번호 확인이 비어있다면 에러 메세지를 노출하지 않습니다.', () => {
        render(<SignupPage />);

        const $passwordError = screen.queryByTestId('password-confirm-error');

        expect($passwordError).toBeNull();
      });

      it('기존 비밀번호와 다르다면 에러 메세지를 노출합니다.', () => {
        render(<SignupPage />);

        const $input = screen.getByLabelText('비밀번호') as HTMLInputElement;
        const $inputConfirm = screen.getByLabelText('비밀번호 확인') as HTMLInputElement;

        fireEvent.change($input, { target: { value: 'abcd123456678' } });
        fireEvent.change($inputConfirm, { target: { value: 'abcd12345667' } });

        const $passwordError = screen.queryByTestId('password-confirm-error');

        expect($passwordError).not.toBeNull();
      });

      it('기존 비밀번호와 같다면 에러 메세지를 노출하지 않습니다.', () => {
        render(<SignupPage />);

        const $input = screen.getByLabelText('비밀번호') as HTMLInputElement;
        const $inputConfirm = screen.getByLabelText('비밀번호 확인') as HTMLInputElement;

        fireEvent.change($input, { target: { value: 'abcd123456678' } });
        fireEvent.change($inputConfirm, { target: { value: 'abcd123456678' } });

        const $passwordError = screen.queryByTestId('password-confirm-error');

        expect($passwordError).toBeNull();
      });
    });
  });
});
