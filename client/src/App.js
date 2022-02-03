import React, { Fragment, useState } from 'react';
import './assets/stylesheets/app.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

// components
import Searchbar from './components/Searchbar';
import GelatoList from './components/GelatoList';

const App = () => {
  const [queryString, setQueryString] = useState([]);

  const search = (query) => {
    setQueryString(query);
  };

  return (
    <Fragment>
      <Searchbar searchFunction={search} />
      <div className="wrapper">
        <GelatoList queryString={queryString}/>
      </div>
    </Fragment>
  )
}

export default App;
