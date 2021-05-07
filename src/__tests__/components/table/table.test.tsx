import { render } from '@testing-library/react';
import Table from '../../../components/table';

describe('Table 컴포넌트', () => {
  it('렌더링을 확인합니다.', () => {
    const { container } = render(<Table />);

    expect(container.querySelector('table')).toBeTruthy();
  });
});
