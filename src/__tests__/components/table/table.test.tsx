import { render } from '@testing-library/react';
import Table from '../../../components/table';

describe('Table 컴포넌트', () => {
  describe('기본 렌더링', () => {
    let header, rows;

    beforeAll(() => {
      header = [
        { name: 'col1', key: 'col1' },
        { name: 'col2', key: 'col2' },
        { name: 'col3', key: 'col3' },
        { name: 'col4', key: 'col4' },
      ];
      rows = [
        { col1: 'col1-row1', col2: 'col2-row1', col3: 'col3-row1', col4: 'col4-row1' },
        { col1: 'col1-row2', col2: 'col2-row2', col3: 'col3-row2', col4: 'col4-row2' },
        { col1: 'col1-row3', col2: 'col2-row3', col3: 'col3-row3', col4: 'col4-row3' },
      ];
    });

    it('rows 렌더링을 확인합니다.', () => {
      const { container } = render(<Table header={header} rows={rows} />);

      const $rows = container.querySelectorAll('table tr');
      expect($rows.length).toBe(rows.length);

      const firstRow = rows[0];
      const $firstRow = $rows[0].querySelectorAll('td');
      expect($firstRow.length).toBe(Object.entries(firstRow).length);
      expect($firstRow[0].textContent).toBe(firstRow.col1);
    });
  });
});
