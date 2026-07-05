import React from 'react';
import DashboardLayout from '../DashboardLayout';
import StatsCard from '../StatsCard';
import TableCard from '../TableCard';

export default function Support(){
  return (
    <DashboardLayout>
      <h2>Support</h2>
      <div className='stats-row'>
        <StatsCard title='Open Tickets' value={'5'} icon='📨' />
        <StatsCard title='Resolved' value={'12'} icon='✅' />
        <StatsCard title='Satisfaction' value={'4.9'} icon='⭐' />
        <StatsCard title='Live Chats' value={'2'} icon='💬' />
      </div>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16}}>
        <div className='card'><h4>Recent Messages</h4><p>No unread messages.</p></div>
        <div className='card'><h4>Create Ticket</h4><p>Quick ticket creation action.</p></div>
      </div>
      <TableCard columns={['id','subject','status']} rows={[{id:'#S-1001',subject:'Booking Confirmation',status:'Open'}]} />
    </DashboardLayout>
  )
}
