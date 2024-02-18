// import './Grid.scss';
//
// export interface Row {
//   name: string;
// }
//
// export interface Column {
//   name: string;
//   renderInfo: () => string | number;
// }
//
// const EmptyHeaderCell = () => {
//   return (
//     <th className={'tableHeaderCell'}>
//       <span />
//     </th>
//   );
// };
//
// export const Grid = ({ rows, columns }: { rows: Row[]; columns: Column[] }) => {
//   const header = columns.map((column) => {
//     return (
//       <th className={'tableHeaderCell'} key={column.name}>
//         <span>{column.name}</span>
//         <span>{column.renderInfo()}</span>
//       </th>
//     );
//   });
//
//   const bodyRows = rows.map((row) => {
//     return (
//       <tr key={row.name}>
//         <td>{row.name}</td>
//         <td>{row.name}</td>
//         <td>{row.name}</td>
//       </tr>
//     );
//   });
//   return (
//     <table style={{ '--columns-count': columns.length }}>
//       <thead>
//         <tr>
//           <EmptyHeaderCell />
//           {header}
//         </tr>
//       </thead>
//       <tbody>{bodyRows}</tbody>
//     </table>
//   );
// };
