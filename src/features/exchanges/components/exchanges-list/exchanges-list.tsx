import { Box } from '@chakra-ui/react';

import {
  DataTable,
  DataTableProps,
} from '@/components/data-table';
import { Link } from '@/components/link';

import { Exchange } from '../../types';

type ExchangeListType = 'dashboard' | 'public';

export type ExchangesListProps = {
  type: ExchangeListType;
  exchanges: Exchange[];
  isLoading?: boolean;
  customerId: string;
};

const getTableColumns = (
  customerId: string,
  type: ExchangeListType
) => {
  const tableColumns: DataTableProps<Exchange>['columns'] =
    [
      {
        title: 'Position',
        field: 'position',
      },
      {
        title: 'Department',
        field: 'department',
      },
      {
        title: 'Location',
        field: 'location',
      },
      {
        title: '',
        field: 'id',
        render: ({ entry: { id } }) => {
          return (
            <Link
              href={
                type === 'public'
                  ? `/customers/${customerId}/exchanges/${id}`
                  : `/dashboard/exchanges/${id}`
              }
            >
              View
            </Link>
          );
        },
      },
    ];

  return tableColumns;
};

export const ExchangesList = ({
  exchanges,
  isLoading,
  customerId,
  type,
}: ExchangesListProps) => {
  const tableColumns = getTableColumns(customerId, type);

  return (
    <Box data-testid="exchanges-list">
      <DataTable
        isLoading={isLoading || false}
        data={exchanges}
        columns={tableColumns}
      />
    </Box>
  );
};
