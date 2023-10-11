// import React from 'react'

// const Items = ({ data, onItemClick }) => {
//   return (
//     <div style={{ width: "100%" }}>
//   <table style={{ borderCollapse: "collapse", width: "100%" }}>
//     <thead>
//       <tr>
//         <th style={{ width: "50%", border: "0.25px solid black"}}>ID</th>
//         <th style={{ border: "0.25px solid #000" }}>Partition Key</th>
//       </tr>
//     </thead>
//     <tbody id="data">
//       {data.map((item) => (
//         <tr
//           key={item.id}
//           onClick={() => onItemClick(item)}
//           style={{ borderBottom: "0.25px solid black" }}
//         >
//           <td style={{ border: "0.25px solid black" ,textAlign:"center",cursor:"pointer" }}>{item._id}</td>
//           <td style={{ border: "0.25px solid black" ,textAlign:"center" }}>{item.name}</td>
//         </tr>
//       ))}
//     </tbody>
//   </table>
// </div>

//   )
// }

// export default Items

import React from 'react'

const Items = ({ data, onItemClick }) => {
  return (
    <div style={{ width: "100%", height: "400px", overflowY: "scroll" }}>
      <table style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th style={{ width: "50%", border: "0.25px solid black" }}>ID</th>
            <th style={{ border: "0.25px solid #000" }}>Movie Name</th>
          </tr>
        </thead>
        <tbody id="data">
          {data.map((item) => (
            <tr
              key={item.id}
              onClick={() => onItemClick(item)}
              style={{ borderBottom: "0.25px solid black" }}
            >
              <td style={{ border: "0.25px solid black", textAlign: "center", cursor: "pointer" }}>{item._id}</td>
              <td style={{ border: "0.25px solid black", textAlign: "center" }}>{item.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Items
