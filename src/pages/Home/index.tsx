import React from 'react';
import { useEffect, useState } from 'react';
import api from '../../services/api';
import Header from '../../components/Header';

import './style.scss';
interface Games {
  id: number,
  slug: string,
  name: number,
  background_image: string,
  genres: any[],
  platforms: any[],
}

const Home: React.FC = () => {
  const [games, setGames] = useState<Games[]>([]);

  useEffect(() => {
    api.get('/games')
    .then((response) => {
      console.log(response.data.results);
      setGames(response.data.results);
    })
    .catch((err) => {
      console.error('Requisição não deu certo !');
    })
  }, []);

  return (
    <>
    <Header />
      <div className="row">
        <div className="col-lg-12">
          <div className="container">
            <div className="listGames">
              {games.map((game) => {
                return (
                  <div key={game.id} className={`game_item_${game.id} game_item` } >
                    <div className="image">
                      <img className="gameName" src={game.background_image} />
                    </div>
                    <div className="informations">
                      <div className="gameName">{game.name}</div>
                      <div className="gameSlug">{game.slug}</div>
                      <div className="ganeGen">
                        {(game.genres).map((genre) => {
                          return (
                            <div key={genre.id}>
                              {genre.name} 
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;