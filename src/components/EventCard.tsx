import React, { useState } from 'react';
import '../styles/EventCard.css';

interface EventCardProps {
  image: string | { default: string };
  number: string;
  tags: string;
  category: string;
  description: string;  // Add this new prop for additional details
}

const EventCard: React.FC<EventCardProps> = ({ image, number, tags, category, description }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const imageUrl = typeof image === 'string' ? image : image.default;

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div 
        className={`event-card ${isHovered ? 'hovered' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={openModal}
      >
        <div className="event-card__img" style={{backgroundImage: `url(${imageUrl})`}}></div>
        <div className="event-card__content">
          <div className="event-card__box event-card__box--c">
            <span className="event-card__box-number">{number}</span>
            <span className="event-card__box-tags">{tags}</span>
          </div>
          <div className="event-card__box event-card__box--d">
            <span className="event-card__box-category">{category}</span>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="event-modal" onClick={closeModal}>
          <div className="event-modal__content" onClick={e => e.stopPropagation()}>
            <img src={imageUrl} alt={category} className="event-modal__image" />
            <div className="event-modal__details">
              <h2>{category}</h2>
              <p className="event-modal__tags">{tags}</p>
              <p className="event-modal__description">{description}</p>
            </div>
            <button className="event-modal__close" onClick={closeModal}>&times;</button>
          </div>
        </div>
      )}
    </>
  );
};

export default EventCard;
