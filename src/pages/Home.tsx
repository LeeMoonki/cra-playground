import Table from '../components/table';

const header = [
  { name: 'col1', key: 'col1' },
  { name: 'col2', key: 'col2' },
  { name: 'col3', key: 'col3' },
  { name: 'col4', key: 'col4' },
];
const rows = [
  { col1: 'col1-row1', col2: 'col2-row1', col3: 'col3-row1', col4: 'col4-row1' },
  { col1: 'col1-row2', col2: 'col2-row2', col3: 'col3-row2', col4: 'col4-row2' },
  { col1: 'col1-row3', col2: 'col2-row3', col3: 'col3-row3', col4: 'col4-row3' },
];

function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <Table header={header} rows={rows} />
    </div>
  );
}

export default HomePage;
