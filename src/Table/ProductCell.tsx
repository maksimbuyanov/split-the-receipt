import { CellContext, ColumnMeta } from '@tanstack/react-table';
import { TableSchema } from '../TableSchema.ts';
import cn from './Cell.module.scss';

export const Cell = (props: CellContext<TableSchema, string>) => {
  const { id: rowId } = props.cell.row.original;
  const { id: colId } = props.cell.column;
  const { participant, cost } = props.column.columnDef.meta as ColumnMeta<TableSchema, string>;

  if (participant.has(rowId) /** если в ячейку пришла инфа, что она есть в participant */) {
    const onRemove = () => {
      props.table.options.meta?.removePayer({ colId, rowId });
    };
    return (
      <div onClick={onRemove} className={cn.fully}>
        {cost / participant.size}
      </div>
    );
  }

  // When the input is blurred, we'll call our table meta's updateData function
  const onClick = () => {
    props.table.options.meta?.addPayer({ colId, rowId });
  };

  return (
    <div onClick={onClick} className={cn.empty}>
      Не участвует
    </div>
  );
};
