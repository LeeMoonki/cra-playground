import { Story, Meta } from '@storybook/react';
import Table, { TableProps } from '../components/table';

export default {
  title: 'Example/Table',
  component: Table,
} as Meta;

const Template: Story<TableProps> = (args) => <Table {...args} />;

export const TableSample = Template.bind({});
TableSample.args = {
  header: [
    { name: 'col1', key: 'col1' },
    { name: 'col3', key: 'col3' },
    { name: 'col2', key: 'col2' },
    { name: 'col4', key: 'col4' },
  ],
  rows: [
    { col1: 'col1-row1', col2: 'col2-row1', col3: 'col3-row1', col4: 'col4-row1' },
    { col1: 'col1-row2', col2: 'col2-row2', col3: 'col3-row2', col4: 'col4-row2' },
    { col1: 'col1-row3', col2: 'col2-row3', col3: 'col3-row3', col4: 'col4-row3' },
  ],
};
