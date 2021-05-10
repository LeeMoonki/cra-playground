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
              {row &&
                Object.entries<string>(row).map(([, v], tdindex) => {
                  return <td key={`${index}${tdindex}`}>{v}</td>;
                })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
