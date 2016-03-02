import React from 'react';

import Recipe from './Recipe.react';

export default class Factory extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isBasicContraption: false,
    }
  }

  componentDidMount() {
    if(this.props.factoryObject.setupcost) {
      this.setState({isBasicContraption: true});
    }
  }

  _renderRecipes() {
    const recipeList = [];
    const factory = this.props.factoryObject;
    const recipeData = this.props.recipes;

    if(this.state.isBasicContraption) {
      recipeList.push(<Recipe recipeData={factory.setupcost}/>);
      if(factory.recipes) {
        factory.recipes.map((recipe)=>{
          recipeList.push(<Recipe recipeData={recipeData[recipe]}/>);
        })
      }
      return recipeList;
    } else {
      if(factory.recipes) {
        factory.recipes.map((recipe)=>{
          recipeList.push(<Recipe recipeData={recipeData[recipe]}/>);
        })
      }
      return recipeList;
    }
  }





  render() {
    const factory = this.props.factoryObject;
    return (
      <div className="small-12 columns">
        <h4 id={factory.name.replace(' ', '_')}><strong>{factory.name}</strong></h4>
        <div className="small-12 columns">
          {
            this._renderRecipes()
          }
        </div>
      </div>
    );
  }


}
