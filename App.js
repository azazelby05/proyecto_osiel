import { useState } from 'react';

function App() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <h1>Hola, mundo</h1>
      <button onClick={() => setContador(contador + 1)}>
        Clics: {contador}
      </button>
    </div>
  );
}

export default App;
