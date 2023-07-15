import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function Card({ stay }) {
  return (
    <div className="card">
    <img src={stay.photo} alt={stay.title} />
    <div>
        <div className='card-primeira-descricao'>
            {stay.superHost && <p><strong>SUPER HOST</strong></p>}
            <p>{stay.type}</p>
            <p> {stay.type === "Entire apartment" ? `. beds ${stay.maxGuests}` : ""} </p>
            <div className='rating'>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <p>{stay.rating}</p>
            </div>
        </div>         
        <h4>{stay.title}</h4>
    </div>
</div>


  );
}

export default Card;
