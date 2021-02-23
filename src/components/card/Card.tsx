import React from 'react';
import './card.scss';

const Card = ({ pubDate }: { pubDate: number }) => {
  return (
    <article className="card-container">
      <h1>Article on March {pubDate} 2021</h1>
      <p>This is a Card component</p>
    </article>
  );
};

export default Card;
