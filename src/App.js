import React from 'react';

import { Redirect } from 'react-router';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Discover from './containers/Discover';
import Movie from './containers/Movie';
import Person from './containers/Person';
import Search from './containers/Search';
import Error from './containers/Error';
import { MainContainer, MainContent } from './components/Layout';
import Sidebar from './components/Sidebar';
import ItemsNavbar from './components/ItemsNavbar';
import NotFound from './containers/NotFound';

const App = () => {
  return (
    <Router>
      <MainContainer>
        <Sidebar />
        <MainContent>
          <ItemsNavbar />
          <Switch>
            <Route
              path='/'
              exact
              render={() => <Redirect from='/' to='/discover/movie/Popular' />}
            />
            <Route
              path='/MovieQi'
              exact
              render={() => (
                <Redirect from='/MovieQi' to='/discover/movie/Popular' />
              )}
            />

            <Route path='/discover/:itemsType/:listType'>
              <Discover />
            </Route>
            <Route path='/search/:itemsType/:query'>
              <Search />
            </Route>
            <Route path='/movie/:id'>
              <Movie />
            </Route>
            <Route path='/person/:id'>
              <Person />
            </Route>
            <Route path='/error'>
              <Error />
            </Route>
            <Route path='/404'>
              <NotFound />
            </Route>
            <Route component={() => <NotFound />} />
          </Switch>
        </MainContent>
      </MainContainer>
    </Router>
  );
};

export default App;
