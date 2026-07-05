import React, {useEffect,useState} from 'react';
import DashboardLayout from '../DashboardLayout';
import StatsCard from '../StatsCard';
import ChartCard from '../ChartCard';
import TableCard from '../TableCard';
import * as svc from '../../../api/dashboardService';

export default function WorldwideTours(){
  const [overview,setOverview]=useState(null);
  const [chart,setChart]=useState([]);
  const [bookings,setBookings]=useState([]);

  useEffect(()=>{
    let mounted=true;
    svc.getWorldwideToursOverview().then(d=> mounted && setOverview(d));
    svc.getWorldwideToursChart().then(d=> mounted && setChart(d));
    svc.getRecentBookings().then(d=> mounted && setBookings(d));
    return ()=> mounted=false;
  },[]);

  if(!overview) return <DashboardLayout><div className='card'>Loading Worldwide Tours…</div></DashboardLayout>

  return (
    <DashboardLayout>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <h2>Worldwide Tours</h2>
      </div>

      <div className='stats-row'>
        <StatsCard title='Upcoming Tours' value={overview.upcoming} icon='🌍' />
        <StatsCard title='Completed' value={overview.completed} icon='✅' />
        <StatsCard title='Wishlist' value={overview.wishlist} icon='💚' />
        <StatsCard title='Avg Rating' value={overview.rating} icon='⭐' />
      </div>

      <div style={{display:'grid',gridTemplateColumns:'2fr 1fr',gap:16,marginBottom:16}}>
        <ChartCard title='Monthly Tours' data={chart} />
        <div style={{display:'flex',flexDirection:'column',gap:12}}>
          <div className='card'><h4>Top Countries</h4>{overview.topCountries.map(c=> <div key={c.country}>{c.country} — {c.tours} tours</div>)}</div>
          <div className='card'><h4>Quick Actions</h4><div className='quick-actions'><a className='quick-btn' href='/services'>Book Tour</a><a className='quick-btn' href='/services'>Explore Packages</a></div></div>
        </div>
      </div>

      <TableCard columns={['id','name','date','price']} rows={bookings} />

    </DashboardLayout>
  )
}
