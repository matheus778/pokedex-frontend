import React from 'react';
import './style.css';
import {FiPlus, FiX} from 'react-icons/fi';
import {Link} from 'react-router-dom';

export default function Home() {
  return(
    <div className="container">
      <nav className="navbar">
        <h1>Pokedex</h1>
      </nav>

      <main>
          <div className="card">
            <div className="card-title">
              <FiX color="red" className="close-button" size={32}/>
              <h1>pokemon</h1>
            </div>

            <div className="card-image">
              <img src="https://images-americanas.b2w.io/produtos/01/00/img/1511899/3/1511899345_1SZ.jpg"></img>
            </div>

            <div>
              <textarea readOnly={true}>
                tipo
                descrição
              </textarea>
            </div>
          </div>  
      </main>

      <Link to="/AddPokemon">
        <div className="float-button">
            <FiPlus size={38}/>
        </div>
      </Link>
    </div>
  )
}