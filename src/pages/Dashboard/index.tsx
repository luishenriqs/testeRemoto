import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { FiShoppingBag } from 'react-icons/fi';
import GettingDates from '../../utils/gettingDates';
import formatValue from '../../utils/formatValue';
import { WorkSpace, Container, MovieContainer, Carrinho } from './styles';

/* ***************************[INTERFACES]*********************************** */
interface Repository {
  page: number;
  total_results: number;
  total_pages: number;
  results: MovieData[];
}
interface MovieData {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface Movies {
  title: string
  id?: string
  price: number
}

/* ************************************************************************** */

const Dashboard: React.FC = () => {
  const [repository, setRepository] = useState<Repository>({} as Repository);
  const [carrinho, setCarrinho] = useState<Movies[]>([]);
  const price = 10;

  async function Add(title: any) {
    const index = carrinho.indexOf(title);
    if (index === -1) {
      setCarrinho([...carrinho, title])
    }else {
      carrinho.splice(index, 1)
      setCarrinho([...carrinho])
    };
  }

  async function Del(title: any) {
    const index = carrinho.indexOf(title);
      carrinho.splice(index, 1)
      setCarrinho([...carrinho])
  }

  
  /* ***********************[API_KEY FROM TMDB]****************************** */
  const api_key = '2964b6cd71e6a379510ab626bdca951e';
  /* ************************************************************************ */

  /* *********************[Capturando últimos 30 dias]*********************** */
  const { initialDate } = GettingDates();
  const { todayDate } = GettingDates();
  /* ************************************************************************ */

  /* *****************[MOST POPULAR OF THE LAST 30 DAYS]********************* */
  useEffect(() => {
    api
      .get(
        `/discover/movie?api_key=${api_key}&primary_release_date.gte=${initialDate}&primary_release_date.lte=${todayDate}&language=pt-BR&sort_by=popularity.desc`,
      )
      .then(response => {
        setRepository(response.data);
      });
  }, [initialDate, todayDate]);

  const { results } = repository;

  /* ************************************************************************ */
  return (
    <>
      <WorkSpace>
        <Container>
          <Carrinho>
            <h1>MEU CARRINHO:</h1>
            <div className="produtos">
              {carrinho ? (
                  carrinho.map(title => (
                    <div className="edit">
                      <button
                        type="button" 
                        onClick={() => Del(`${title}`)}
                      >
                        Excluir
                      </button>
                      <h2 key={`${title}`}>{title}</h2>
                    </div>
                  ))
                ) : (
                <h2>Loading...</h2> 
              )}
            </div>
            <div className="balance">
              <div className="subTotal">
                <h1>Sub-total:</h1>
                <div className="prices">
                  {carrinho ? (
                      carrinho.map(title => (
                        <h4 key={`${title}`}>{formatValue(price)}</h4>
                      ))
                    ) : (
                    <h2>Loading...</h2> 
                  )}
                </div>
              </div>
              <div className="total">
                <h1>Total:</h1>
                <h4>{formatValue(price * carrinho.length)}</h4>
              </div>
            </div>
          </Carrinho>
          <h1>FILMES DO MÊS</h1>
          <MovieContainer>
            {results ? (
              results.map(movie => (
                <div className="box" key={movie.id}>
                  <img
                    src={`http://image.tmdb.org/t/p/w342/${movie.poster_path}`}
                    alt={movie.title}
                  />
                  <strong>{movie.title}</strong>
                  <button
                    type="button" 
                    onClick={() => Add(`${movie.title}`)}
                  >
                    <FiShoppingBag size={15} />
                    <span>Adicionar no carrinho"</span>
                  </button>
                  <div className="price">
                    <span>{formatValue(price)}</span>
                  </div>
               </div>
              ))
            ) : (
              <h1>Loading...</h1> 
            )}
          </MovieContainer>
        </Container>
      </WorkSpace>
    </>
  );
};

export default Dashboard;
