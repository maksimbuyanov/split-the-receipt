export const TableHeaderCell = ({ name, cost }: { name: string; cost: number }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <span>{name}</span>
      <span>{cost}</span>
    </div>
  );
};
