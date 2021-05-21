import { screen, render, cleanup, fireEvent } from '@testing-library/react';
import SignupPage from '../../../pages/Signup';

describe('Signup page', () => {
  const labelId = '아이디';
  const buttonDup = '중복확인';
  const labelPassword = '비밀번호';
  const labelPasswordConfirm = '비밀번호 확인';
  const buttonSignup = '회원가입';

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

      const $input = screen.getByLabelText(labelId) as HTMLInputElement;
      const $button = screen.getByRole('button', { name: buttonDup });

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

        const $input = screen.getByLabelText(labelPassword) as HTMLInputElement;

        fireEvent.change($input, { target: { value: 'abcd' } });

        const $passwordError = screen.queryByTestId('password-error');

        expect($input.value).toBe('abcd');
        expect($passwordError).not.toBeNull();
      });

      it('만약 적절한 형식의 비밀번호라면 비밀번호 에러를 노출하지 않습니다.', () => {
        render(<SignupPage />);

        const $input = screen.getByLabelText(labelPassword) as HTMLInputElement;
        const password = 'abcd123456678';

        fireEvent.change($input, { target: { value: password } });

        const $passwordError = screen.queryByTestId('password-error');

        expect($input.value).toBe(password);
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

        const $input = screen.getByLabelText(labelPassword) as HTMLInputElement;
        const $inputConfirm = screen.getByLabelText(labelPasswordConfirm) as HTMLInputElement;

        const password = 'abcd123456678';
        const passwordConrifm = 'abcd12345667';

        fireEvent.change($input, { target: { value: password } });
        fireEvent.change($inputConfirm, { target: { value: passwordConrifm } });

        const $passwordError = screen.queryByTestId('password-confirm-error');

        expect($passwordError).not.toBeNull();
      });

      it('기존 비밀번호와 같다면 에러 메세지를 노출하지 않습니다.', () => {
        render(<SignupPage />);

        const $input = screen.getByLabelText(labelPassword) as HTMLInputElement;
        const $inputConfirm = screen.getByLabelText(labelPasswordConfirm) as HTMLInputElement;

        const password = 'abcd12345667';

        fireEvent.change($input, { target: { value: password } });
        fireEvent.change($inputConfirm, { target: { value: password } });

        const $passwordError = screen.queryByTestId('password-confirm-error');

        expect($passwordError).toBeNull();
      });
    });
  });

  describe('회원가입 버튼 활성화', () => {
    // 조건을 미리 준비해놓고 각 테스트 케이스마다 적절한 조건 하나씩만 적용해 테스트합니다.
    const properId = 'abc',
      improperId = '';
    const properPassword = 'abcdefg12345',
      improperPassword = '123';

    it('아이디가 적절하지 않다면 회원가입 버튼을 비활성화 합니다.', () => {
      render(<SignupPage />);

      const $input = screen.getByLabelText(labelId) as HTMLInputElement;
      const $inputPassword = screen.getByLabelText(labelPassword) as HTMLInputElement;
      const $inputConfirm = screen.getByLabelText(labelPasswordConfirm) as HTMLInputElement;

      fireEvent.change($input, { target: { value: improperId } });
      fireEvent.change($inputPassword, { target: { value: properPassword } });
      fireEvent.change($inputConfirm, { target: { value: properPassword } });

      const $button = screen.getByRole('button', { name: buttonSignup });

      expect($button).toBeDisabled();
    });

    it('비밀번호가 적절하지 않다면 회원가입 버튼을 비활성화 합니다.', () => {
      render(<SignupPage />);

      const $input = screen.getByLabelText(labelId) as HTMLInputElement;
      const $inputPassword = screen.getByLabelText(labelPassword) as HTMLInputElement;
      const $inputConfirm = screen.getByLabelText(labelPasswordConfirm) as HTMLInputElement;

      fireEvent.change($input, { target: { value: properId } });
      fireEvent.change($inputPassword, { target: { value: improperPassword } });
      fireEvent.change($inputConfirm, { target: { value: improperPassword } });

      const $button = screen.getByRole('button', { name: buttonSignup });

      expect($button).toBeDisabled();
    });

    it('비밀번호 확인이 적절하지 않다면 회원가입 버튼을 비활성화 합니다.', () => {
      render(<SignupPage />);

      const $input = screen.getByLabelText(labelId) as HTMLInputElement;
      const $inputPassword = screen.getByLabelText(labelPassword) as HTMLInputElement;
      const $inputConfirm = screen.getByLabelText(labelPasswordConfirm) as HTMLInputElement;

      fireEvent.change($input, { target: { value: properId } });
      fireEvent.change($inputPassword, { target: { value: properPassword } });
      fireEvent.change($inputConfirm, { target: { value: properPassword + 'a' } });

      const $button = screen.getByRole('button', { name: buttonSignup });

      expect($button).toBeDisabled();
    });

    it('모든 값이 적절하면 회원가입 버튼을 활성화 합니다.', () => {
      render(<SignupPage />);

      const $input = screen.getByLabelText(labelId) as HTMLInputElement;
      const $inputPassword = screen.getByLabelText(labelPassword) as HTMLInputElement;
      const $inputConfirm = screen.getByLabelText(labelPasswordConfirm) as HTMLInputElement;

      fireEvent.change($input, { target: { value: properId } });
      fireEvent.change($inputPassword, { target: { value: properPassword } });
      fireEvent.change($inputConfirm, { target: { value: properPassword } });

      const $button = screen.getByRole('button', { name: buttonSignup });

      expect($button).not.toBeDisabled();
    });
  });
});
