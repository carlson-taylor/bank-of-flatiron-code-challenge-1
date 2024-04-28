// export default function Table() {
//     return(
//         <>
//         <Table>
//             <th>
//                 <tr>date</tr>
//                 <tr>description</tr>
//                 <tr>category</tr>
//                 <tr>amount</tr>
//             </th>
//         </Table>
//         </>
//     )
// }
import React from 'react';
// import './index.css';

function MyTable({ item }) {
  return (
    
    <tr style={{ padding: '18px' }}>
      <td style={{ padding: '18px' }}>{item.date}</td>
      <td style={{ padding: '10px' }}>{item.description}</td>
      <td style={{ padding: '40px' }}>{item.category}</td>
      <td style={{ padding: '28px' }}>{item.amount.toFixed(2)}</td>
    </tr>
  );
}

export default MyTable;