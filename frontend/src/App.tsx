import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';
import { sampleProducts } from './data';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <header>Header</header>
        <main>
          <ul>
            {sampleProducts.map((product) => (
              <li key={product.slug}>
                <img src={product.image} alt={product.name} />
                <h2>{product.name}</h2>
                <p>{product.price} Euro</p>
              </li>
            ))}
          </ul>
        </main>
        <footer>Footer</footer>
      </div>
    </>
  );
}

export default App;
