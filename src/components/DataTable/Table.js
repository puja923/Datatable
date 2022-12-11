import React from 'react'
import {columns, rows} from '../../data';

const Table = () => {
  return (
    <>
    <table border={1} cellSpacing={4} cellPadding={5}>
        <thead>
            <tr>
                {columns.map((item,index)=>(
                    <th>{item}</th>
                ))}
            </tr>
        </thead>
        <tbody>
         
            {rows.map((item,index)=>{
              return(
                <tr>
                  <td>{item.id}</td>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                  <td>{item.email}</td>
                  <td>{item.gender}</td>
                  <td>{item.ip_address}</td>
          </tr>
          );
              })}
        </tbody>
    </table>
    </>
  )
}

export default Table