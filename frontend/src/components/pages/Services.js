import React, { useState } from 'react';
import '../../App.css';
import './Services.css';
import Footer from '../Footer';
import { Link } from 'react-router-dom';

const services = [
  { icon: '🌍', title: 'Worldwide Tours', description: 'Explore curated travel experiences around the world.', route: '/dashboard/worldwide-tours' },
  { icon: '🧳', title: 'Travel Planning', description: 'Personalized itineraries for every traveler.', route: '/dashboard/travel-planning' },
  { icon: '🏨', title: 'Hotel Booking', description: 'Luxury hotels with exclusive pricing.', route: '/dashboard/hotel-booking' },
  { icon: '✈', title: 'Flight Booking', description: 'Domestic and international flights.', route: '/dashboard/flight-booking' },
  { icon: '🛡', title: 'Travel Insurance', description: 'Safe and secure journeys.', route: '/dashboard/travel-insurance' },
  { icon: '📞', title: 'Support', description: '24/7 Customer Support available.', route: '/dashboard/support' },
];

const features = [
  {
    title: 'Trusted by thousands',
    description: 'Travelers rely on our service for dependable, memorable trips.',
  },
  {
    title: 'Secure Booking',
    description: 'Your data and payment information stay protected at every step.',
  },
  {
    title: 'Best Price Guarantee',
    description: 'We compare top suppliers to deliver the best value for every plan.',
  },
  {
    title: 'Experienced Guides',
    description: 'Local experts ensure every route is seamless and unforgettable.',
  },
];

const statistics = [
  { value: '50+', label: 'Countries' },
  { value: '1000+', label: 'Happy Travelers' },
  { value: '500+', label: 'Destinations' },
  { value: '24/7', label: 'Support' },
];

const packages = [
  {
    image: '/images/img-1.jpg',
    title: 'Island Escape',
    location: 'Maldives',
    price: '$3,299',
    rating: '4.9',
  },
  {
    image: '/images/img-3.jpg',
    title: 'Alpine Adventure',
    location: 'Swiss Alps',
    price: '$2,150',
    rating: '4.8',
  },
  {
    image: '/images/img-4.jpg',
    title: 'City Highlights',
    location: 'Tokyo',
    price: '$1,899',
    rating: '4.7',
  },
];

const testimonials = [
  {
    avatar: '/images/img-2.jpg',
    name: 'Amina Patel',
    country: 'India',
    rating: '5.0',
    review: 'The trip was flawless from start to finish. Every detail was taken care of, and the local guide was exceptional.',
  },
  {
    avatar: '/images/img-8.jpg',
    name: 'Lucas Chen',
    country: 'Canada',
    rating: '4.9',
    review: 'A premium experience with thoughtful planning and beautiful destinations. Highly recommend for first-time travelers.',
  },
  {
    avatar: '/images/img-1.jpg',
    name: 'Sofia Torres',
    country: 'Spain',
    rating: '4.8',
    review: 'Customer support was attentive, and the booking experience was smooth. I felt safe and supported the whole way.',
  },
];

const faqs = [
  {
    question: 'How do I book a service?',
    answer: 'Choose your preferred package, contact our team, or use the secure booking form to confirm your travel plans in minutes.',
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'Our cancellation policy varies by package. We offer flexible options and transparent terms so you can travel with confidence.',
  },
  {
    question: 'Can I get a refund?',
    answer: 'Refunds are available depending on the package and timing of the cancellation. We always work to find the best solution for our travelers.',
  },
  {
    question: 'How safe is my trip?',
    answer: 'We partner with trusted suppliers and follow safety guidelines to make sure every journey is secure and comfortable.',
  },
  {
    question: 'Which payment methods do you accept?',
    answer: 'We accept major credit cards, online payments, and local payment providers for most bookings.',
  },
];

export default function Services() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className='services-page'>
      <section className='services-hero'>
        <div className='services-hero-inner'>
          <div className='services-badge'>WHAT WE OFFER</div>
          <h1>Our Services</h1>
          <div className='services-divider' />
          <p>
            We provide world-class travel experiences with premium services designed to make every journey unforgettable.
          </p>
        </div>
      </section>

      <section className='services-section'>
        <div className='services-stack'>
          <div className='services-headline'>
            <h2 className='services-section-title'>Travel Services Built for You</h2>
            <p className='services-subtitle'>From planning to booking and support, our suite of travel services keeps your trip seamless and memorable.</p>
          </div>

          <div className='services-grid' aria-label='Travel services'>
            {services.map((service) => (
              <article className='services-card' key={service.title}>
                <div className='service-icon' aria-hidden='true'>{service.icon}</div>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
                <Link to={service.route} className='btn btn--outline'>Open</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className='services-section'>
        <div className='services-stack'>
          <div className='services-headline'>
            <h2 className='services-section-title'>Why Choose Us</h2>
            <p className='services-subtitle'>A trusted travel partner with the experience, security, and value to bring your next trip to life.</p>
          </div>

          <div className='feature-grid'>
            {features.map((feature) => (
              <article className='feature-card' key={feature.title}>
                <div className='feature-title'>
                  <span aria-hidden='true'>✔</span>
                  <h3>{feature.title}</h3>
                </div>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className='services-section'>
        <div className='services-stack'>
          <div className='services-headline'>
            <h2 className='services-section-title'>Proven Travel Success</h2>
            <p className='services-subtitle'>Our numbers reflect the trust and satisfaction of travelers who choose us again and again.</p>
          </div>

          <div className='stats-grid'>
            {statistics.map((stat) => (
              <aside className='stat-card' key={stat.label}>
                <div className='stat-value'>{stat.value}</div>
                <div className='stat-label'>{stat.label}</div>
              </aside>
            ))}
          </div>
        </div>
      </section>

      <section className='services-section'>
        <div className='services-stack'>
          <div className='services-headline'>
            <h2 className='services-section-title'>Featured Packages</h2>
            <p className='services-subtitle'>Handpicked travel packages designed to bring you the best value, comfort, and adventure.</p>
          </div>

          <div className='packages-grid'>
            {packages.map((pkg) => (
              <article className='package-card' key={pkg.title}>
                <img src={pkg.image} alt={pkg.title} className='package-image' loading='lazy' />
                <div className='package-info'>
                  <h3>{pkg.title}</h3>
                  <p>{pkg.location}</p>
                  <div className='package-meta'>
                    <span>{pkg.price}</span>
                    <span className='package-rating' aria-label={`Rated ${pkg.rating} out of 5`}>
                      ⭐ {pkg.rating}
                    </span>
                  </div>
                  <button type='button'>Book Now</button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className='services-section'>
        <div className='services-stack'>
          <div className='services-headline'>
            <h2 className='services-section-title'>Traveler Testimonials</h2>
            <p className='services-subtitle'>Real stories from our clients who have explored the world with confidence and comfort.</p>
          </div>

          <div className='testimonials-grid'>
            {testimonials.map((testimonial) => (
              <article className='testimonial-card' key={testimonial.name}>
                <div className='testimonial-top'>
                  <img src={testimonial.avatar} alt={`${testimonial.name} avatar`} className='testimonial-avatar' loading='lazy' />
                  <div className='customer-meta'>
                    <p className='customer-name'>{testimonial.name}</p>
                    <p className='customer-country'>{testimonial.country}</p>
                    <div className='rating-stars' aria-label={`Rating ${testimonial.rating}`}>
                      <span>⭐</span>
                      <span>{testimonial.rating}</span>
                    </div>
                  </div>
                </div>
                <p className='testimonial-review'>{testimonial.review}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className='services-section'>
        <div className='services-stack'>
          <div className='services-headline'>
            <h2 className='services-section-title'>Frequently Asked Questions</h2>
            <p className='services-subtitle'>Answers to the most common questions about booking, safety, and service terms.</p>
          </div>

          <div className='faq-grid'>
            {faqs.map((item, index) => (
              <div className='faq-item' key={item.question}>
                <button
                  type='button'
                  className='faq-question'
                  aria-expanded={openFaq === index}
                  aria-controls={`faq-answer-${index}`}
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                >
                  <span>{item.question}</span>
                  <span className='faq-toggle'>{openFaq === index ? '–' : '+'}</span>
                </button>
                {openFaq === index && (
                  <div className='faq-answer' id={`faq-answer-${index}`}>
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='services-section cta-section'>
        <div className='services-stack cta-card'>
          <div className='services-headline'>
            <h2 className='cta-heading'>Ready for your next adventure?</h2>
            <p className='cta-copy'>Book your journey with confidence. Our team is ready to help you plan every detail of a remarkable trip.</p>
          </div>
          <div className='cta-buttons'>
            <a className='btn btn--primary' href='/sign-up'>Book Now</a>
            <a className='btn btn--outline' href='/sign-up'>Contact Us</a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
