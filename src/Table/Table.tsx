import { Table as TableType } from '@tanstack/table-core';
import { flexRender } from '@tanstack/react-table';

export const Table = <T = unknown,>({
  getHeaderGroups,
  getRowModel,
  getAllColumns,
  getVisibleFlatColumns,
}: TableType<T>) => {
  if (!getRowModel().rows.length && getVisibleFlatColumns().length === 1) return null;
  return (
    <section>
      <table
        /* @ts-expect-error*/
        style={{ '--columns-count': getAllColumns().length - 1 }}
      >
        <thead>
          {getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <th key={header.id}>
                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};
