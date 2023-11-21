/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { GameWrapper, GameTitle, GameDescription, GenreSelec, ShowMoreButtont, GameImage, GenreInfo, GamesPageWrapper, GamesPageTitle, GenreSelectLabel } from './Games.styled';

const GameComponent = ({ game }) => {
  return (
    <GameWrapper key={game._id}>
      <GameTitle>{game.commonGameName}</GameTitle>
      <GameDescription>{game.gameDescription}</GameDescription>
      <GameImage src={game.gameImage} alt={game.commonGameName} />
      <GenreInfo>Genre: {game.genre}</GenreInfo>
      <GenreInfo>{game.inTop ? 'In Top' : 'Not in Top'}</GenreInfo>
    </GameWrapper>
  );
};

const GamesPage = () => {
  const [genre, setGenre] = useState(''); 
  const [games, setGames] = useState([]); 
  const [page, setPage] = useState(1); 
  const [gamesToShow, setGamesToShow] = useState(9); 
  const [totalGames, setTotalGames] = useState(0);

  useEffect(() => {
    const fetchMoreGames = async () => {
      try {
        const response = await axios.post('https://api.miraplay.cloud/games/by_page', {
          page,
          isFreshGamesFirst: true,
          genre,
          gamesToShow,
        });

        const { games: newGames, gamesListLength } = response.data;

        setGames((prevGames) => [...prevGames, ...newGames]);
        setTotalGames(gamesListLength);
if(games.length >= gamesListLength) {
    setGamesToShow(0);
}
      } 
      catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchMoreGames();
  }, [page, genre, gamesToShow, games.length]);

  const handleGenreChange = (newGenre) => {
    setGenre(newGenre);
    setGames([]);
    setPage(1);
  };

  const handleShowMore = () => {
    setPage((prevPage) => prevPage + 1);
    fetchMoreGames();
  };

  return (
    <GamesPageWrapper>
      <GamesPageTitle>Games Page</GamesPageTitle>
      <GenreSelectLabel htmlFor="genre">Select Genre:</GenreSelectLabel>
      <GenreSelec id="genre" onChange={(e) => handleGenreChange(e.target.value)} value={genre}>
        {["", "ALL", "FREE", "MOBA", "SHOOTERS", "LAUNCHERS", "MMORPG", "STRATEGY", "FIGHTING", "RACING", "SURVIVAL", "ONLINE"].map((genreOption) => (
          <option key={genreOption} value={genreOption}>{genreOption}</option>
        ))}
      </GenreSelec>

      <div>
        {games.map((game) => (
          <GameComponent key={game._id} game={game} />
        ))}
      </div>

      {gamesToShow > 0 && totalGames > gamesToShow && (
        <ShowMoreButtont onClick={handleShowMore}>Show More</ShowMoreButtont>
      )}
    </GamesPageWrapper>
  );
};

export default GamesPage;
