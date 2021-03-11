import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadGames, fetchSearch } from '../../actions/gamesAction';
import GameDetail from '../../components/GameDetail';
import Game from '../../components/Game';
import { Games, GameList } from '../../globalStyles';
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { fadeIn } from '../../animations';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const SearchGames = () => {
  const location = useLocation();
  const pathId = location.pathname.split('/')[2];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);
  const { searched } = useSelector((state) => state.games);
  const [textInput, setTextInput] = useState('');

  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };
  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(textInput));
    setTextInput('');
  };
  const clearSearched = () => {
    dispatch({ type: 'CLEAR_SEARCHED' });
  };
  return (
    <>
      <StyledNav variants={fadeIn} initial='hidden' animate='show'>
        <form className='search'>
          <input value={textInput} onChange={inputHandler} type='text' />
          <button onClick={submitSearch} type='submit'>
            Search
          </button>
        </form>
      </StyledNav>
      <GameList variants={fadeIn} initial='hidden' animate='show'>
        <AnimateSharedLayout type='crossfade'>
          <AnimatePresence>
            {pathId && <GameDetail pathId={pathId} />}
          </AnimatePresence>
          {searched.length ? (
            <div className='searched'>
              <h2>Searched Games</h2>
              <Games>
                {searched.map((game) => (
                  <Game
                    name={game.name}
                    released={game.released}
                    id={game.id}
                    image={game.background_image}
                    key={game.id}
                  />
                ))}
              </Games>
            </div>
          ) : (
            ''
          )}
        </AnimateSharedLayout>
      </GameList>
    </>
  );
};

const StyledNav = styled(motion.nav)`
  padding: 3rem 5rem;
  text-align: center;
  input {
    width: 30%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
  }
  button {
    font-size: 1.5rem;
    border: none;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background: #ff7676;
    color: white;
  }
`;

export default SearchGames;
