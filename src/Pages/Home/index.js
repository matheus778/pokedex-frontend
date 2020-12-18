import React, {useState, useEffect} from 'react';
import './style.css';
import {FiPlus, FiX} from 'react-icons/fi';
import {Link} from 'react-router-dom';
import api from '../../Services/api';

export default function Home() {
  const [pokemons, setPokemons] = useState([]);

  async function buscarPokemons() {
    const response = await api.get('/pokemons');
    setPokemons(response.data)
  }
  
  useEffect(()=>buscarPokemons(),[pokemons])

  function apagarPokemon(id) {
    api.delete(`pokemons/${id}`);
    buscarPokemons();
  }
  return(
    <div className="container">
      <nav className="navbar">
        <h1>Pokedex</h1>
      </nav>

      <main>
        {pokemons.map(poke => (
            <div className="card">
            <div className="card-title">
              {/* <FiX key={poke.id} color="red" className="close-button" size={32}
              onClick={apagarPokemon(poke.id)}/> */}
                  <div onClick={()=>apagarPokemon(poke.id)}>
                    <FiX color="red" className="close-button" size={32}/> 
                  </div>
                <h1>{poke.nome}</h1>
            </div>

            <div className="card-image">
              <img alt="imagem" src={poke.imagem}></img>
            </div>

            <div>
              
              <div className="info-card">
                tipo:{poke.tipo}
                <br/>
                descrição:{poke.descricao}
              </div>

            </div>
          </div>  
        ))}
          
      </main>

      <Link to="/AddPokemon">
        <div className="float-button">
            <FiPlus size={38}/>
        </div>
      </Link>
    </div>
  )
}