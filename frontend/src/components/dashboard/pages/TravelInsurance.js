import React from 'react';
import DashboardLayout from '../DashboardLayout';
import StatsCard from '../StatsCard';
import TableCard from '../TableCard';

export default function TravelInsurance(){
  return (
    <DashboardLayout>
      <h2>Travel Insurance</h2>
      <div className='stats-row'>
        <StatsCard title='Active Policies' value={'3'} icon='🛡' />
        <StatsCard title='Pending Claims' value={'1'} icon='📄' />
        <StatsCard title='Expired' value={'0'} icon='⏰' />
        <StatsCard title='Coverage' value={'$1,250'} icon='💰' />
      </div>
      <TableCard columns={['policy','status','expiry']} rows={[{policy:'Global Protect',status:'Active',expiry:'2025-12-12'}]} />
    </DashboardLayout>
  )
}
