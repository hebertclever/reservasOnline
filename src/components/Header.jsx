import React, { useState } from 'react';
import Modal from './Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faSearch } from '@fortawesome/free-solid-svg-icons';

function Header({ setFilter, stays }) {
  console.log('Renderizando componente Header');

  const allCountries = stays.map(stay => stay.country);
  console.log('Todos os países:', allCountries);

  const uniqueCountries = [...new Set(allCountries)];
  console.log('Países únicos:', uniqueCountries);

  const [showModal, setShowModal] = useState(false);
  console.log('Estado inicial do modal:', showModal);

  return (
    <>
      <nav
        onMouseLeave={() => {
          // console.log('Mouse saiu da Header');
          setShowModal(false);
        }}
      >
        <div className="container-logo">
          <FontAwesomeIcon
            className="logo"
            icon={faPlay}
            rotation={270}
          ></FontAwesomeIcon>
          <h1>windbnb</h1>
        </div>

        <div
          className="filter-input"
          onClick={() => {
            // console.log('Mouse Entrou na Header');
            setShowModal(true);
          }}
        >
          <input
            className="input-search"
            type="text"
            placeholder="Helsinki, Finland"
            style={{ color: '#333' }}
            onChange={event => {
              console.log('O valor do input mudou:', event.target.value);
              setFilter(event.target.value);
            }}
          />
          <input
            className="input-number"
            type="number"
            id="quantity"
            placeholder="Add guests"
            name="quantity"
            min={1}
            max={20}
          />
          <div className="input-search-icon">
            {' '}
            <FontAwesomeIcon icon={faSearch} />
          </div>
        </div>
        {showModal && <Modal />}
      </nav>

      <div className="countries">
        <h1>{`Stays in ${uniqueCountries.join(', ')}`}</h1>
        <p>{`${stays.length} +stays`}</p>
      </div>
    </>
  );
}

export default Header;
