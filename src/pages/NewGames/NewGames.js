import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadGames } from '../../actions/gamesAction';
import GameDetail from '../../components/GameDetail';
import Game from '../../components/Game';
import { Games, GameList } from '../../globalStyles';
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { fadeIn } from '../../animations';
import Navbar from '../../components/Navbar/Navbar';

const NewGames = () => {
  const location = useLocation();
  const pathId = location.pathname.split('/')[2];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);
  const { newGames } = useSelector((state) => state.games);

  return (
    <>
      {!pathId && <Navbar />}
      <GameList variants={fadeIn} initial='hidden' animate='show'>
        <AnimateSharedLayout>
          <AnimatePresence>
            {pathId && <GameDetail pathId={pathId} />}
          </AnimatePresence>
          <h2 style={{ textAlign: 'center' }}>New Games</h2>
          <Games>
            {newGames.map((game) => (
              <Game
                name={game.name}
                released={game.released}
                id={game.id}
                image={game.background_image}
                key={game.id}
              />
            ))}
          </Games>
        </AnimateSharedLayout>
      </GameList>
    </>
  );
};

export default NewGames;
