import './App.css';

let json = require('./data/above-10.json');

function App() {
  return (
    <div className="App">
      <div className="flexContainer">
        <h1 className="title">Meu Carrinho</h1>
        {json.items.map(produto => (
          <li className="products" key={produto.id}>
            <div className="imgWrapper"><img src={produto.imageUrl} alt={produto.name} /></div>
            <div className="productDescription">
              <p>{produto.name}</p>
            </div>
          </li>
        ))}
      </div>
    </div>
  );
}

export default App;
