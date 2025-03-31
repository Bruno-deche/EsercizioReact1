import React from 'react';
import styles from './card.module.css';
import cardImage  from '../assets/cardImage.png';


const Card = ({ image = cardImage, title, description }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.cardImage} />
      <div className={styles.cardContent}>
        <h2>{title}</h2>
        <p>{description} ciao</p>
      </div>
    </div>
  );
};

export default Card;