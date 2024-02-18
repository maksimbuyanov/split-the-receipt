import '@tanstack/react-table';

declare module '@tanstack/react-table' {
  interface ColumnMeta<TData extends RowData, TValue> {
    participant: Set<string>;
    cost: number;
  }

  interface TableMeta<TData extends RowData> {
    removePayer: (arg: { colId: string; rowId: string }) => void;
    addPayer: (arg: { colId: string; rowId: string }) => void;
    columnConfig: Array<MyColumn>;
  }
}
