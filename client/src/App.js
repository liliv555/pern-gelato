import React, { Fragment, useState } from 'react';
import './assets/stylesheets/app.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

// components
import Searchbar from './components/Searchbar';
import GelatoList from './components/GelatoList';
import Creategelato from './components/CreateGelato';

const App = () => {
  const [queryString, setQueryString] = useState([]);
  const [created, setCreated] = useState([]);

  const search = (query) => {
    setQueryString(query);
  };

  const gelatoCreated = (newBody) => {
    setCreated(newBody);
  };

  return (
    <Fragment>
      <Searchbar searchFunction={search}/>
      <div className="wrapper">
        <GelatoList queryString={queryString} created={created}/>
      </div>
      <Creategelato gelatoCreated={gelatoCreated}/>
    </Fragment>
  )
}

export default App;
