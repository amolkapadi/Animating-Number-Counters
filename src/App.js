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
    <div className="container d-flex flex-column justify-content-center  min-vh-100">
      <h1 className="text-center mb-4">Animating Number Counters React Js</h1>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 ">
        {cardData.map(card => (
          <div key={card.id} className="col pb-5">
            <div className="card text-center p-5">
              <img src={card.img} alt={card.title} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <span className="count-up">
                  <CountUp start={card.start} end={card.end} duration={card.duration} />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
