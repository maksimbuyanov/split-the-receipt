import cn from './Test.module.scss';
import { createColumnHelper, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { useCallback, useMemo, useState } from 'react';
import { TableHeaderCell } from './Table/TableHeaderCell.tsx';
import { AddColumn, AddRow } from './FormControlls.tsx';
import { Table } from './Table/Table.tsx';
import './Grid/Grid.scss';
import { Cell } from './Table/ProductCell.tsx';
import { TableSchema } from './TableSchema.ts';

const columnHelper = createColumnHelper<TableSchema>();

interface MyColumn {
  name: string;
  cost: number;
  participant: Set<string>;
}

export const Result = () => null;

const App = () => {
  const [columnConfig, setColumnConfig] = useState<Array<MyColumn>>([
    {
      name: 'milk',
      cost: 700,
      participant: new Set(),
    },
    {
      name: 'beer123',
      cost: 300,
      participant: new Set(),
    },
    {
      name: 'beer1234',
      cost: 300,
      participant: new Set(),
    },
    {
      name: 'beer12345',
      cost: 300,
      participant: new Set(),
    },
    {
      name: '25',
      cost: 300,
      participant: new Set(),
    },
    {
      name: '25w',
      cost: 300,
      participant: new Set(),
    },
    {
      name: '25we',
      cost: 300,
      participant: new Set(),
    },
    {
      name: '25wer',
      cost: 300,
      participant: new Set(),
    },
    {
      name: '25wert',
      cost: 300,
      participant: new Set(),
    },
    {
      name: '25werta',
      cost: 300,
      participant: new Set(),
    },
    {
      name: '25werta3',
      cost: 300,
      participant: new Set(),
    },
    {
      name: 'er',
      cost: 300,
      participant: new Set(),
    },
    {
      name: 'dfer',
      cost: 300,
      participant: new Set(),
    },
    {
      name: 'dferer',
      cost: 300,
      participant: new Set(),
    },
    {
      name: 'ddferer',
      cost: 300,
      participant: new Set(),
    },
    {
      name: 'ddfereree',
      cost: 300,
      participant: new Set(),
    },
    {
      name: 'tt',
      cost: 300,
      participant: new Set(),
    },
    {
      name: 'beer121',
      cost: 300,
      participant: new Set(),
    },
  ]);

  const columns = useMemo(() => {
    return [
      columnHelper.accessor('label', {
        header: () => null,
        cell: (info) => {
          return <span style={{ position: 'sticky', left: 0, zIndex: 2 }}>{info.renderValue()}</span>;
        },
      }),
      ...columnConfig.map(({ cost, name, participant }) => {
        return columnHelper.accessor(name, {
          meta: {
            participant,
            cost,
          },

          header: () => {
            return <TableHeaderCell name={name} cost={cost} />;
          },
          cell: Cell,
        });
      }),
    ];
  }, [columnConfig]);

  const [initialData, setInitialData] = useState<TableSchema[]>([
    {
      label: 'aaa',
      id: 'one',
    },
    {
      label: 'bbb',
      id: 'two',
    },
    {
      label: 'ccc',
      id: 'three',
    },
  ]);

  const table = useReactTable({
    data: initialData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    meta: {
      columnConfig,

      removePayer: ({ colId, rowId }) => {
        setColumnConfig((prevState) => {
          return prevState.map((product) => {
            if (product.name !== colId) {
              return product;
            }

            product.participant.delete(rowId);

            return product;
          });
        });
      },
      addPayer: ({ colId, rowId }) => {
        setColumnConfig((prevState) => {
          return prevState.map((product) => {
            if (product.name !== colId) {
              return product;
            }

            product.participant.add(rowId);

            return product;
          });
        });
      },
    },
  });

  const updateColumn = useCallback((name: string, cost: number) => {
    setColumnConfig((prev) => {
      const newColumn: MyColumn = {
        name: name as any,
        cost: cost,
        participant: new Set(),
      };
      return [...prev, newColumn];
    });
  }, []);

  const updateRow = useCallback((label: string) => {
    setInitialData((prevState) => {
      return [
        ...prevState,
        {
          label,
          id: label,
        },
      ];
    });
  }, []);

  const showResult = () => {
    console.log(
      initialData.map(({ label, id }) => {
        const totalP = columnConfig.reduce((total, { cost, participant }) => {
          if (participant.has(id)) {
            console.log(id);
            return (total += cost / participant.size);
          }
          return total;
        }, 0);
        return {
          label,
          totalP,
        };
      }),
    );
  };

  return (
    <div className={cn.container}>
      <AddColumn onUpdate={updateColumn} />
      <AddRow onUpdate={updateRow} />

      <Table {...table} />
      <button onClick={showResult}>asd</button>
      <Result />
    </div>
  );
};

export default App;
