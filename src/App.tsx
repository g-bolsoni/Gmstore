import { useEffect, useState } from 'react';
import api from './services/api';
interface Games {
  id: number,
  slug: string,
  name: number,
  background_image: string,
  genres: any[],
  platforms: any[],
}

export function App() {
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
      <ul className="listGames">
        {games.map((game) => {
          return (
            <li key={game.id} >
              <div className="gameName">{game.name}</div>
              <div className="gameSlug">{game.slug}</div>
              <img className="gameName" src={game.background_image} />
              <div className="ganeGen">
                {(game.genres).map((genre) => {
                  return (
                    <div key={genre.id}>
                      {genre.name} 
                    </div>
                  );
                })}
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}