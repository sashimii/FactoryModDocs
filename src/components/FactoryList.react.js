import React from 'react';
import axios from 'axios';
import YAML from 'yamljs';


import Factory from './Factory.react';


export default class FactoryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'factories': {},
    }
  }

  _renderFactories() {
    let factoryList = [];
    const factories = this.props.factoryData.factories;
    const recipes = this.props.factoryData.recipes;
    Object.keys(factories).forEach((factoryName) => {
      factoryList.push(
        <Factory
          factoryObject={factories[factoryName]}
          recipes={recipes}
        />
      );
    })
    return factoryList;
  }

  render() {
    return (
      <div className="row">
        <div>
          <h3>Factories</h3>
          {
            this._renderFactories()
          }
        </div>
      </div>
    );
  }

}
