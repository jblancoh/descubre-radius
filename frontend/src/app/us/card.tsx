// Card.tsx
import React from 'react';
import Image from 'next/image';
import styles from './page.module.css';

interface CardProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  details: string[];
  textColor: string;
}

const Card: React.FC<CardProps> = ({ title, subtitle, imageSrc, details, textColor }) => {
  return (
    <div className={styles.card}>
      {/* Wrapper for Image */}
      <div className={styles.cardImageWrapper}>
        <img src={imageSrc} alt="Card Image" className={styles.cardImage} />
      </div>

      {/* Card Content */}
      <div className={styles.cardContent}>
        <div className={styles.cardTitle} style={{ color: textColor }}>{title}</div>
        <div className={styles.cardSubtitle} style={{ color: textColor }}>{subtitle}</div>
        
        <div className={styles.cardDetails} style={{ color: textColor }}>
          {details.map((detail, index) => (
            <div key={index} className={styles.cardDetailItem}>
              {detail}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
