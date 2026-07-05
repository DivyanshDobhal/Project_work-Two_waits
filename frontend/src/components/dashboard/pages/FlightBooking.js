import React from 'react';
import DashboardLayout from '../DashboardLayout';
import StatsCard from '../StatsCard';
import ChartCard from '../ChartCard';

export default function FlightBooking(){
  return (
    <DashboardLayout>
      <h2>Flight Booking</h2>
      <div className='stats-row'>
        <StatsCard title='Upcoming Flights' value={'7'} icon='✈' />
        <StatsCard title='Completed Flights' value={'12'} icon='✅' />
        <StatsCard title='Price Alerts' value={'2'} icon='⚠' />
        <StatsCard title='Total Spent' value={'$3,850'} icon='💳' />
      </div>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16}}>
        <ChartCard title='Flight Activity' data={[{label:'Jan',value:5},{label:'Feb',value:8},{label:'Mar',value:3}]} />
        <div className='card'><h4>Boarding Pass</h4><p>Download or view your boarding pass here.</p></div>
      </div>
    </DashboardLayout>
  )
}
