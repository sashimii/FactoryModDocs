import React from 'react';

export default class Recipe extends React.Component {

  constructor(props) {
    super(props);
  }

  _mapRecipeDataToList(data) {
    let unorderedList = [];
    if(typeof data === 'object') {
      Object.keys(data).forEach((field)=>{
        const dataItem = data;
        let dataField = field.replace('_', ' ')
        dataField = dataField.charAt(0).toUpperCase() + dataField.slice(1);
        const textToWrite = typeof dataItem[field] !== 'object' ?  dataField + ': ' + dataItem[field].toString() : dataField;
        if(typeof dataItem === 'object') {
          unorderedList.push(
            <li>
              <span>{textToWrite}</span>
              {this._mapRecipeDataToList(dataItem[field])}
            </li>
          );
        } else {

          unorderedList.push(<li><span>{textToWrite}</span> <span>{dataItem[field]} </span></li>)
        }
      });
      return <ul>{unorderedList}</ul>;
    }
    return null;
  }

  _renderRecipeInformation() {
    const recipeData = this.props.recipeData;
    let recipeInfo = this._mapRecipeDataToList(recipeData);

    return recipeInfo;
  }

  render() {

    return (
      <div className="small-12 columns">
        <h5>{this.props.recipeData.name}</h5>
        <ul>
          {
            this._renderRecipeInformation()
          }
        </ul>
      </div>
    );
  }


}
