import React from 'react';
import SearchBar from './SearchBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPollH } from '@fortawesome/free-solid-svg-icons';

function Header({ setFilter, stays }) {
  // Extrai todos os países dos dados de estadia
  const allCountries = stays.map(stay => stay.country);

  // Cria um array de países únicos
  const uniqueCountries = [...new Set(allCountries)];

  return (
    <>
      <nav>
        <div className="container-logo">
          <FontAwesomeIcon
            className="logo"
            icon={faPlay}
            rotation={270}
          ></FontAwesomeIcon>
          <h1>windbnb</h1>
        </div>

        <input
          type="text"
          placeholder="Search by city..."
          onChange={event => setFilter(event.target.value)}
        />
      </nav>
      <div className="countries">
        <h1>{`Stays in ${uniqueCountries.join(', ')}`}</h1>
        <p>{`${stays.length} +stays`}</p>
      </div>
    </>
  );
}

export default Header;
