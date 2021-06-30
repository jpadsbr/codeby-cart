import { Link, useLocation } from 'react-router-dom';

function Cart() {
  let location = useLocation();

  let json = require(`../data/cart${location.state.cart}.json`);
  let total = json.totalizers[0].value / 100;

  function shipping(total) {
    if (total > 10) {
      return (
        <div className="freeShipping">
          <h2>Parabéns, sua compra tem frete grátis!</h2>
        </div>
      )
    }
  }

  return (
    <div className="flexContainer">
      <h1 className="mainText">Meu Carrinho</h1>
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
      </div>
      {shipping(total)}
      <hr />
      <div className="link">
        <Link to="/sucess"><button className="button">Finalizar Compra</button></Link>
      </div>
    </div>
  );
}

export default Cart;