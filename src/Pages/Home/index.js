import React from 'react';
import './style.css'

export default function Home() {
  return(
    <div className="container">
      <nav className="navbar">
        <h1>Pokedex</h1>
      </nav>

      <main>
          <div className="card">

            <div className="card-title">
              <h1>pokemon</h1>
            </div>

            <div className="card-image">
              <img src="https://images-americanas.b2w.io/produtos/01/00/img/1511899/3/1511899345_1SZ.jpg"></img>
            </div>

            <div>
              <h3>tipo</h3>
              <h3>descrição</h3>
            </div>
          </div>
          
      </main>
    </div>
  )
}