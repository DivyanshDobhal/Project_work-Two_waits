import React from 'react';
import './DashboardLayout.css';

function SimpleBarChart({data=[]}){
  const max = Math.max(...data.map(d=>d.value),1);
  return (
    <div style={{display:'flex',gap:8,alignItems:'end',height:120}}>
      {data.map((d,i)=> (
        <div key={i} title={`${d.label}: ${d.value}`} style={{flex:1,background:'#01bf71',height:`${(d.value/max)*100}%`,borderRadius:6}} />
      ))}
    </div>
  )
}

export default function ChartCard({title,data}){
  return (
    <div className='card'>
      <div style={{marginBottom:12,fontWeight:700}}>{title}</div>
      <SimpleBarChart data={data} />
    </div>
  )
}
