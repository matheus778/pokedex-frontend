import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import {Link} from 'react-router-dom';
import './style.css';

export default function AddPokemon() {
  return(
    <div className="container-form"> 
       <nav className="navbar">
         <Link to="/"id="arrow-icon">
              <FiArrowLeft color="black" size={32}/>
         </Link>
        <h1>Pokedex</h1>
      </nav>
      <h1>Adicionar novo pokemon</h1>
      <main className="form">
        <form>
          <input placeholder="nome"/>
          <input placeholder="tipo"/>
          <input placeholder="descricão"/>
          <input placeholder="imagem url"/>
          <button>Cadastrar</button>
        </form>
      </main>
    </div>
  );
}