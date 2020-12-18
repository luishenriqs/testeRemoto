import React, { useEffect, useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
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

interface Data {
  title: any, 
  poster_path: string,
}

/* ************************************************************************** */

const Dashboard: React.FC = () => {

  const [repository, setRepository] = useState<Repository>({} as Repository);
  const [titles, setTitles] = useState<string[]>([]);
  const [itens, setItens] = useState<Data[]>((() => {
    const storaged = localStorage.getItem('@Carrinho:itens');
    if (storaged) {
      return JSON.parse(storaged);
    }
    return [];
  }));
  const price = 10;
  const total = formatValue(price * titles.length);
  const [totalCost, setTotalCost] = useState('');

    useEffect(() => {
    setTotalCost(total);
  }, [total])

  const history = useHistory();

  
  /* ****************************[DELETE]************************************ */
  async function handleDelete(title: any) {
    const index = titles.indexOf(title);
      titles.splice(index, 1)
      setTitles([...titles])
  }
  /* ************************************************************************ */

  /* ****************************[BUY NOW]*********************************** */
  const handleBuyNow = useCallback(
    async () => {
      localStorage.setItem('@Carrinho:itens', JSON.stringify(itens));
      localStorage.setItem('@Carrinho:total', JSON.stringify(totalCost));

      history.push('/buynow');
    },
    [history, totalCost, itens]
  );

  /* ************************************************************************ */

  /* *************************[ADD OR REMOVE]******************************** */
  async function handleAddOrRemove(title: string, poster_path: string) {
    const item: Data = ({title, poster_path})


    const index = titles.indexOf(title);
    if (index === -1) {
      setTitles([...titles, title])
      setItens([...itens, item])     
    }else {
      titles.splice(index, 1)
      itens.splice(index, 1)
      setTitles([...titles])
      setItens([...itens])
    };
  }
  /* ************************************************************************ */

  
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
            <div className="products">
              {titles ? (
                  titles.map(title => (
                    <div key={`${title}`} className="edit">
                      <button
                        type="button" 
                        onClick={() => handleDelete(`${title}`)}
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
                  {titles ? (
                      titles.map(title => (
                        <h4 key={`${title}`}>{formatValue(price)}</h4>
                      ))
                    ) : (
                    <h2>Loading...</h2> 
                  )}
                </div>
              </div>
              <div className="total">
                <h1>Total:</h1>
                <h4>{total}</h4>
              </div>
            </div>
            <div className="buynow">
              <button
                type="button" 
                onClick={() => handleBuyNow()}
              >
                Finalizar Pedido
              </button>
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
                    onClick={() => handleAddOrRemove(`${movie.title}`, `${movie.poster_path}`)}
                  >
                    <FiShoppingBag size={15} />
                    <span>Adicionar/Excluir"</span>
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
