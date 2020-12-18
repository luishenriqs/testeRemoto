import React from 'react';
import { Link } from 'react-router-dom';
import FormContainer from '../../components/FormContainer';
import { Container } from '../Dashboard/styles';
import { WorkSpace, MovieContainer } from './styles';

interface ObjData {
  title?: string;
  poster_path?: string;
}

/* ****************[CAPTURA DOS DADOS DO CARRINHO]*************************** */
const BuyNow: React.FC = () => {
  const itens = localStorage.getItem('@Carrinho:itens');
  const total = localStorage.getItem('@Carrinho:total');

  let dados: ObjData[] = [];

  if (itens) {
    dados = JSON.parse(itens)
  }

  /* ****************************[DELETE]************************************ */
  async function handleDeleteAll() {
    localStorage.setItem('@Carrinho:itens', JSON.stringify(''));
    localStorage.setItem('@Carrinho:total', JSON.stringify(''));
  }
  /* ************************************************************************ */
  /* ************************************************************************ */
  return (
    <>
      <WorkSpace>
        <Container>
          <MovieContainer>
            <div className="head">
              <div id="titleArea">
                <button 
                  type="button"
                  onClick={() => handleDeleteAll()}
                >
                  <Link to="/">Voltar</Link>
                </button>
                <h1 className="title">Meu Carrinho</h1>
              </div>
              <div id="totalArea">
                <h1 className="pageTotal">{total}</h1>
              </div>
              <div id="paymentArea">
                <FormContainer>{total}</FormContainer>
              </div>           
            </div>
            <div id="itens">
              {dados ? (
                dados.map(movie => (
                  <div className="box" key={movie.title}>
                    <img
                      src={`http://image.tmdb.org/t/p/w154/${movie.poster_path}`}
                      alt={movie.title}
                    />
                    <h2>{movie.title}</h2>
                  </div>
                ))
              ) : (
                <h1>Carrinho de pedidos vazio.</h1>
              )}
            </div>       
          </MovieContainer>
        </Container>
      </WorkSpace>
    </>
  );
};

export default BuyNow;
