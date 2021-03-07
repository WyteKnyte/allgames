import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar } from './components'
import GlobalStyle from './globalStyles'
import Home from './pages/HomePage/Home';
import SearchGames from './pages/SearchGames/SearchGames';
import PopularGames from './pages/PopularGames/PopularGames';
import AboutUs from './pages/AboutUs/AboutUs';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/search-game'>
          <SearchGames/>
        </Route>
        <Route path='/about-us'>
          <AboutUs/>
        </Route>
        <Route path={["/game/:id", "/"]}>
        <PopularGames/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
