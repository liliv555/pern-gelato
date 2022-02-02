import React, { Fragment } from 'react';
import './assets/stylesheets/app.scss';

// components
import Searchbar from './components/Searchbar';
import GelatoList from './components/GelatoList';

function App() {
  return (
    <Fragment>
      <Searchbar />
      <GelatoList />
    </Fragment>
  )
}

export default App;
