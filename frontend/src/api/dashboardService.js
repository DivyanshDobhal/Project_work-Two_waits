import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE || '/',
  timeout: 4000,
});

function withFallback(promise, fallback){
  return promise.then(r=>r.data).catch(()=>{
    return new Promise(res=> setTimeout(()=>res(fallback),500));
  });
}

export function getWorldwideToursOverview(){
  const fallback = {
    upcoming: 12, completed:24, wishlist:8, rating:4.8,
    topCountries:[{country:'Switzerland',tours:12},{country:'Maldives',tours:10}],
    popular:[{name:'Swiss Alps'},{name:'Bali'}],
  };
  return withFallback(api.get('/api/tours/overview'), fallback);
}

export function getWorldwideToursChart(){
  const fallback = [{label:'Jan',value:20},{label:'Feb',value:34},{label:'Mar',value:26}];
  return withFallback(api.get('/api/tours/chart'), fallback);
}

export function getRecentBookings(){
  const fallback = [{id:'#T-1001',name:'Swiss Alps',date:'2025-08-10',price:'$1,200'}];
  return withFallback(api.get('/api/bookings/recent'), fallback);
}

// other dashboard service stubs can be added similarly

export default {getWorldwideToursOverview,getWorldwideToursChart,getRecentBookings};
