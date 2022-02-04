import React, { Fragment, useState, useEffect } from 'react';
import fagyi from './assets/fagyi.png'
import './assets/stylesheets/app.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

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
        const response = await fetch(`http://localhost:5000/gelatos?title=${queryString}`);
        const jsonData = await response.json();
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
      {/* <img className="fagyi" src={fagyi} alt={"logo"}/>  */}
      <div className="wrapper">
        <GelatoList gelatos={gelatos} gelatoModified={gelatoModified}/>
      </div>
      <Creategelato gelatoCreated={gelatoModified}/>
    </Fragment>
  )
}

export default App;
