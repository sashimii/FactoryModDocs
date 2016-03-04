import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import App from './components/App';
import FactoryList from './components/FactoryList.react';
import YAML from 'yamljs';

import Mapper from './components/mapper'

import axios from 'axios';


axios.get('https://raw.githubusercontent.com/Civcraft/FactoryMod/master/configCivcraft.yml')
  .then((res) => {
    let factoryList = YAML.parse(res.data);
    // console.log(factoryList);
    // let factoryMapper = new Mapper(res.data);
    // let cleanData = factoryMapper.getCleanData();
    const FactoryWrapper = () => { return <FactoryList factoryData={factoryList}/>;}
    ReactDOM.render(
      (<Router history={hashHistory}>
        <Route path="/" component={FactoryWrapper}/>
      </Router>), document.getElementById('content')
    );
  })
  .catch((e) => {
    const error = e.toString();
    console.log(e);
    ReactDOM.render(
      (
        <div>
          <h1>Something went wrong</h1>
          <p>{error}</p>
        </div>
      ), document.getElementById('content')
    );
  });
