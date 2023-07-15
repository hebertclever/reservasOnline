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
            <p className='type'>{stay.type}</p>
            <p className='type'> {stay.type === "Entire apartment" ? `. ${stay.maxGuests} beds ` : ""} </p>
            <div className='rating'>
                <FontAwesomeIcon className='icon' icon={faStar}></FontAwesomeIcon>
                <p className='icon'>{stay.rating}</p>
            </div>
        </div>         
        <h4>{stay.title}</h4>
    </div>
</div>


  );
}

export default Card;
