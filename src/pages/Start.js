import { Link } from 'react-router-dom';

function Start() {

  return (
    <div className="flexContainer">
      <h1 className="mainText">Escolha seu carrinho:</h1>
      <div className="link">
        <Link to={{ pathname: "/cart", state: { cart: 1 } }} ><button className="button">Carrinho 1</button></Link>
      </div>
      <div className="link">
        <Link to={{ pathname: "/cart", state: { cart: 2 } }} ><button className="button">Carrinho 2</button></Link>
      </div>
    </div>
  )
}

export default Start;