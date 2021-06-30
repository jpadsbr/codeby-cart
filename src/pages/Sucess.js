import { Link } from 'react-router-dom'

function Sucess() {
  return (
    <div className="flexContainer">
      <h1 className="mainText">Sucesso! Sua compra foi concluída!</h1>
      <h1 className="mainText">Deseja voltar ao início?</h1>
      <div className="link">
        <Link to="/start"><button className="button">Voltar</button></Link>
      </div>
    </div>
  )
}

export default Sucess;