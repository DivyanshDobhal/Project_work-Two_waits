import React from 'react';
import DashboardLayout from '../DashboardLayout';
import StatsCard from '../StatsCard';
import TableCard from '../TableCard';

export default function HotelBooking(){
  return (
    <DashboardLayout>
      <h2>Hotel Booking</h2>
      <div className='stats-row'>
        <StatsCard title='Upcoming Stays' value={'6'} icon='🏨' />
        <StatsCard title='Completed' value={'10'} icon='✅' />
        <StatsCard title='Saved Hotels' value={'3'} icon='💾' />
        <StatsCard title='Total Spent' value={'$2,160'} icon='💳' />
      </div>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16}}>
        <div className='card'><h4>Recommendations</h4><p>Top hotels curated for you.</p></div>
        <div className='card'><h4>Offers</h4><p>Exclusive member deals.</p></div>
      </div>
      <TableCard columns={['id','hotel','date','price']} rows={[{id:'#H-100',hotel:'Grand Bali',date:'2025-05-20',price:'$420'}]} />
    </DashboardLayout>
  )
}
