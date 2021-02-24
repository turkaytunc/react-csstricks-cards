import React from 'react';
import './card.scss';

const Card = ({ pubDate }: { pubDate: number }) => {
  const textColor = 'green';
  return (
    <article className="card-container">
      <p className="card-header">Article on March {pubDate} 2021</p>
      <p className="card-content">Lorem ipsum dolor sit amet.</p>
      <p className="card-content variable-inject" style={{ ['--text-color' as any]: `${textColor}` }}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem, quibusdam!
      </p>
    </article>
  );
};

export default Card;
