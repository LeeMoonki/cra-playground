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
  return (
    <table>
      <tbody>
        {rows.length > 0 &&
          rows.map((row, index) => {
            return <tr key={index}></tr>;
          })}
      </tbody>
    </table>
  );
}

export default Table;
