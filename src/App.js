// App.js
import React from 'react';
import CountUp from 'react-countup';
import projectImg from './img/project.png';
import clientImg from './img/client.png';
import deliverImg from './img/handshake.png';
import awardsImg from './img/trophy.png';
import './App.css';

const App = () => {
  const cardData = [
    { id: 1, title: 'Project', start: 0, end: 100, duration: 2, img: projectImg },
    { id: 2, title: 'Happy Client', start: 0, end: 30, duration: 2.5, img: clientImg },
    { id: 3, title: 'Project Deliver', start: 0, end: 30, duration: 3, img: deliverImg },
    { id: 4, title: 'Awards Received', start: 0, end: 10, duration: 3, img: awardsImg },
  ];

  return (
    <div className="App">
      <h1>Animating Number Counters React Js</h1>
      <div className="count-up-cards">
        {cardData.map(card => (
          <div key={card.id} className="card">
            <img src={card.img} alt={card.title} className="card-img" />
            <h3>{card.title}</h3>
            <span style={{ fontSize: '3rem' }}>
  <CountUp start={card.start} end={card.end} duration={card.duration} />
</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
