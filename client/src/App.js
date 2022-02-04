import React, { Fragment, useState, useEffect } from 'react';
import './assets/stylesheets/app.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as service from './services/provider.js'

// components
import Searchbar from './components/Searchbar';
import GelatoList from './components/GelatoList';
import Creategelato from './components/CreateGelato';

const App = () => {
  const [queryString, setQueryString] = useState([]);
  const [gelatos, setGelatos] = useState([]);
  const [modified, setModified] = useState([]);

  const getGelatos = async () => {
      try {
        const jsonData = await service.getGelatos(queryString);
        setGelatos(jsonData);
      } catch (err) {
        console.error(err.message);
      };
  };

  useEffect(() => {
    getGelatos();
  }, [modified, queryString]);

  const search = (query) => {
    setQueryString(query);
  };

  const gelatoModified = (newBody) => {
    setModified(newBody);
  };

  return (
    <Fragment>
      <Searchbar searchFunction={search}/>
      <div className="wrapper">
        <GelatoList gelatos={gelatos} gelatoModified={gelatoModified}/>
      </div>
      <Creategelato gelatoCreated={gelatoModified}/>
    </Fragment>
  )
}

export default App;
