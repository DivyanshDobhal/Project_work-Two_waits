import React from 'react';
import './DashboardLayout.css';

export default function StatsCard({title,value,icon}){
  return (
    <div className='card' style={{minWidth:160}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <div>
          <div style={{color:'#64748b',fontSize:12}}>{title}</div>
          <div style={{fontSize:20,fontWeight:700}}>{value}</div>
        </div>
        <div style={{fontSize:28}}>{icon}</div>
      </div>
    </div>
  )
}
