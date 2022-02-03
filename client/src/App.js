import React, { Fragment } from 'react';
import './assets/stylesheets/app.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

// components
import Searchbar from './components/Searchbar';
import GelatoList from './components/GelatoList';

function App() {
  return (
    <Fragment>
      <Searchbar />
      <div className="wrapper">
        <GelatoList />
      </div>
    </Fragment>
  )
}

export default App;
