import React from 'react';
import { Link } from 'react-router-dom';
import './DashboardLayout.css';

export function Sidebar({ base='/dashboard' }) {
  return (
    <aside className='dashboard-sidebar'>
      <div style={{fontWeight:800,marginBottom:16}}>TRVL</div>
      <nav className='sidebar-nav'>
        <Link to={`${base}/worldwide-tours`} className='sidebar-item'>Worldwide Tours</Link>
        <Link to={`${base}/travel-planning`} className='sidebar-item'>Travel Planning</Link>
        <Link to={`${base}/hotel-booking`} className='sidebar-item'>Hotel Booking</Link>
        <Link to={`${base}/flight-booking`} className='sidebar-item'>Flight Booking</Link>
        <Link to={`${base}/travel-insurance`} className='sidebar-item'>Travel Insurance</Link>
        <Link to={`${base}/support`} className='sidebar-item'>Support</Link>
      </nav>
    </aside>
  );
}

export function Topbar({ children }) {
  return (
    <div className='topbar'>
      <div style={{display:'flex',gap:12,alignItems:'center'}}>
        <button className='card' style={{padding:'8px 12px'}}>☰</button>
        <div className='breadcrumb'>Dashboard / <strong>Overview</strong></div>
      </div>
      <div style={{display:'flex',gap:12,alignItems:'center'}}>
        <div className='card' style={{padding:'8px 12px'}}>🔔</div>
        <div className='card' style={{padding:'6px 10px',borderRadius:999}}>JD</div>
      </div>
    </div>
  );
}

export default function DashboardLayout({ children }) {
  return (
    <div className='dashboard-shell'>
      <Sidebar />
      <main className='dashboard-content'>
        <Topbar />
        {children}
      </main>
    </div>
  );
}
