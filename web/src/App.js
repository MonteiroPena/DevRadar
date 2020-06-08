import React, { useState } from 'react';
import './global.css';
import './App.css';


// Componente: Bloco isolado de HTML, CSS e JS o qual não interfere no restante da aplicação
// Propriedade: Infomações que o componente PAI passa para o componente FILHO
// Estado: Informações mantidas pelo componente (Lembrar imutabilidade)

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <label htmlFor="">Usuário do Github</label>
          <input name="github_username"/>
        </form>
      </aside>
      <main>

      </main>
    </div>
  );
}

export default App;
