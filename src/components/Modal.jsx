import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';
import CounterInput from './CounterInput'; // Importando o componente CounterInput. Ajuste o caminho de acordo com a sua estrutura de pastas.

const Modal = () => { 
    console.log("Modal renderizado!");
    return (
        <>
        <div className="modal" >
            <div className="modal-search">
                <input type="text" name="location" id="" placeholder="location"/>
                <input type="text" name="guests" id="" placeholder="guests" />
                <button>
                    <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                </button>
            </div>
            <div className="guests">
                <div></div>
                <div className="guests-number">
                    <div>
                        <h3>Adults</h3>
                        <p>Ages 13 or above</p>
                        <div>
                            <CounterInput /> 
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
        </>
    )
}

export default Modal;
