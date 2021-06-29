import './App.css';

let json = require('./data/under-10.json');

let total = json.totalizers[0].value / 100;

function App() {
  function shipping(total) {
    if (total > 10) {
      return (
        <div className="freeShipping">
          <h2>Parabéns, sua compra tem frete grátis !</h2>
        </div>
      )
    }
  }

  return (
    <div className="App">
      <div className="flexContainer">
        <h1 className="title">Meu Carrinho</h1>
        <hr />
        {json.items.map(produto => (
          <li className="products" key={produto.id}>
            <div className="imgWrapper"><img src={produto.imageUrl} alt={produto.name} /></div>
            <div className="productDescription">
              <p className="productName">{produto.name}</p>
              <p className="productPrice">R$ {produto.price / 100}</p>
              <p className="productSellingPrice">R$ {produto.sellingPrice / 100}</p>
            </div>
          </li>
        ))}
        <hr />
        <div className="result">
          <h1>Total</h1>
          <h1>R$ {total}</h1>
          <h1>{shipping(total)}</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
