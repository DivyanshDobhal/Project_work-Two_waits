import React from 'react';
import './DashboardLayout.css';

export default function TableCard({columns=[],rows=[]}){
  return (
    <div className='card'>
      <table className='table'>
        <thead>
          <tr>{columns.map(c=> <th key={c}>{c}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((r,idx)=> (
            <tr key={idx}>{columns.map((c,i)=> <td key={i}>{r[c] ?? ''}</td>)}</tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
