import React, {useEffect,useState} from 'react';
import DashboardLayout from '../DashboardLayout';
import StatsCard from '../StatsCard';
import ChartCard from '../ChartCard';
import TableCard from '../TableCard';

export default function TravelPlanning(){
  const [loading,setLoading]=useState(true);
  useEffect(()=>{setTimeout(()=>setLoading(false),600)},[]);
  if(loading) return <DashboardLayout><div className='card'>Loading Travel Planner…</div></DashboardLayout>

  return (
    <DashboardLayout>
      <h2>Travel Planning</h2>
      <div className='stats-row'>
        <StatsCard title='Active Plans' value={'5'} icon='🗺' />
        <StatsCard title='Upcoming Trips' value={'3'} icon='✈' />
        <StatsCard title='Saved Plans' value={'2'} icon='💾' />
        <StatsCard title='Budget' value={'$4,250'} icon='💰' />
      </div>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16}}>
        <ChartCard title='Trip Progress' data={[{label:'Booked',value:70},{label:'Planned',value:30},{label:'Open',value:10}]} />
        <div className='card'><h4>Upcoming Trips</h4><ul><li>Europe Trip — Aug 10</li><li>Japan Explorer — Sep 12</li></ul></div>
      </div>
      <TableCard columns={['trip','date','status']} rows={[{trip:'Europe Trip',date:'2025-08-10',status:'Booked'}]} />
    </DashboardLayout>
  )
}
