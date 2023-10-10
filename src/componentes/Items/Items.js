import React from 'react'

const Items = ({ data, onItemClick }) => {
  return (
    <div style={{width:"100%"}}>
       <table >
        <thead>
            <tr>
                <th style={{width:"80%"}}>ID</th>
                <th>Partition Key</th>
            </tr>
        </thead>
        <tbody id="data">
          {data.map((item) => (
            <tr key={item.id} onClick={() => onItemClick(item)}>
              <td>{item.id}</td>
              <td>{item.partitionKey}</td>
            </tr>
          ))}
        </tbody>
    </table>
    </div>
  )
}

export default Items
