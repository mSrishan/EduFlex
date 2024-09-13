import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import E1 from '../assets/E1.jpg';
import E2 from '../assets/E2.jpg';
import E3 from '../assets/E3.jpg';

const styles = {
  container: {
    marginTop: '30px',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
    background: 'linear-gradient(135deg, #ffffff, #f8f9fa)',
    position: 'relative',
  },
  row: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '40px',
    justifyContent: 'space-between',
  },
  calendarContainer: {
    flex: '1',
    minWidth: '250px',
    maxWidth: '500px',
    padding: '15px',
    borderRadius: '12px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
    position: 'sticky',
    top: '20px',
    height: 'fit-content',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  eventsContainer: {
    flex: '4',
    minWidth: '400px',
    maxWidth: '700px',
    padding: '18px',
    borderRadius: '12px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  card: {
    border: '1px solid #ddd',
    borderRadius: '12px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    marginBottom: '30px',
    marginTop: '10px',
    padding: '10px',
    textAlign: 'center',
    backgroundColor: '#ffffff',
    overflow: 'hidden',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    maxWidth: '480px',
    flex: '1 1 180px',
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
    },
  },
  cardImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    marginBottom: '10px',
    transition: 'transform 0.3s ease',
  },
  cardTitle: {
    fontSize: '1.1rem',
    fontWeight: 'bold',
    color: '#0044cc',
    margin: '5px 0',
    transition: 'color 0.3s ease',
  },
  cardDetails: {
    fontSize: '0.9rem',
    color: '#555',
    margin: '5px 0',
  },
};

const events = [
  { img: E1, title: 'Exam', date: '2024-09-20', time: '10:00 AM', place: 'Room 101' },
  { img: E2, title: 'Cricket Match', date: '2024-09-22', time: '3:00 PM', place: 'Sports Ground' },
  { img: E3, title: 'Workshop', date: '2024-09-25', time: '1:00 PM', place: 'Hall A' },
];

const EventComponent = () => {
  return (
    <div style={styles.container}>
      <div style={styles.row}>
        <div style={styles.calendarContainer}>
          <h1 className="text-center mb-5">Event Calendar</h1>
          <Calendar />
        </div>
        <div style={styles.eventsContainer}>
          <h1 className="text-left mb-5">Upcoming Events</h1>
          <TransitionGroup>
            {events.map((event, index) => (
              <CSSTransition
                key={index}
                timeout={300}
                classNames="fade"
              >
                <div style={styles.card} className="event-card">
                  <img src={event.img} alt={event.title} style={styles.cardImage} />
                  <div style={styles.cardTitle}>{event.title}</div>
                  <div style={styles.cardDetails}>Date: {event.date}</div>
                  <div style={styles.cardDetails}>Time: {event.time}</div>
                  <div style={styles.cardDetails}>Place: {event.place}</div>
                </div>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
      </div>
    </div>
  );
};

export default EventComponent;
