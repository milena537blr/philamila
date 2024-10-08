import { Meta, Story } from '@storybook/react';

import { testData } from '../../testing/test-data';

import { DataTable, DataTableProps } from './data-table';

const meta: Meta = {
  title: 'Components/DataTable',
  component: DataTable,
};

export default meta;

const data = testData.exchanges.slice(0, 6);

const columns: DataTableProps<
  (typeof data)[0]
>['columns'] = [
  {
    title: 'Number',
    field: 'number',
  },
  {
    title: 'Location From',
    field: 'locationFrom',
  },
  {
    title: 'Location To',
    field: 'locationTo',
  },
];

const Template: Story<
  DataTableProps<(typeof data)[0]>
> = (props) => <DataTable {...props} />;

export const Default = Template.bind({});

Default.args = {
  columns,
  data,
};

export const Empty = Template.bind({});

Empty.args = {
  columns,
  data: [],
};

export const Loading = Template.bind({});

Loading.args = {
  columns,
  data: [],
  isLoading: true,
};
