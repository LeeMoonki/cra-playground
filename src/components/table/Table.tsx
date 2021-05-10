import { useMemo } from 'react';

export interface BaseTableHeader {
  name: string;
  key: string;
}

function Table<TableHeader extends BaseTableHeader = BaseTableHeader>({
  header,
  rows,
}: {
  header: TableHeader[];
  rows: {
    [key in typeof header[number]['key']]: string;
  }[];
}) {
  const headerKeys = useMemo<typeof header[number]['key'][]>(
    () => header.map((h) => h.key as TableHeader['key']),
    [header]
  );

  if (header.length === 0 || rows.length === 0) {
    return null;
  }

  return (
    <table>
      <thead>
        <tr>
          {header.map((h, index) => {
            return <th key={index}>{h.name}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => {
          return (
            <tr key={index}>
              {headerKeys.map((headerKey, tdindex) => {
                return (
                  <td key={`${index}${tdindex}`}>
                    <span>{row[headerKey]}</span>
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
