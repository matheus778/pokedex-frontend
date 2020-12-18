import React from 'react';
import api from '../../Services/api';
import { FiArrowLeft } from 'react-icons/fi';
import {Link} from 'react-router-dom';
import './style.css';

export default function AddPokemon() {
  
  function cadastrarPokemon() {
    let nome = document.querySelector("#nome").value;
    let tipo = document.querySelector("#tipo").value;
    let descricao = document.querySelector("#descricao").value;
    let imagem = document.querySelector("#imagem").value;

    const data = {
      nome: nome,
      tipo: tipo,
      descricao: descricao,
      imagem: imagem
    };
    api.post('/pokemons', data).then(res =>{
      alert('cadastro efetuado com sucesso')
    })
  }
  
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
        <div className="form-content">
          <input id="nome" placeholder="nome"/>
          <input id="tipo" placeholder="tipo"/>
          <input id="descricao" placeholder="descricão"/>
          <input id="imagem" placeholder="imagem url"/>
          <button onClick={()=>(cadastrarPokemon())}>Cadastrar</button>
        </div>
      </main>
    </div>
  );
}