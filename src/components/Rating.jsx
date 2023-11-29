import React from 'react';
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';

const Rating = ({ value, text }) => {
    const roundedValue = Math.floor(value);

    const renderStar = (starValue) => {
        switch (starValue) {
            case 1:
                return <FaStar />;
            case 0.5:
                return <FaStarHalfAlt />;
            default:
                return <FaRegStar />;
        }
    };

    return (
        <div className='rating'>
            {[1, 2, 3, 4, 5].map((starValue) => (
                <span key={starValue}>{renderStar(value >= starValue ? 1 : value - starValue + 1)}</span>
            ))}
            <span className="rating-text">{text && text}</span>
        </div>
    );
};

export default Rating;
