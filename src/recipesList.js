import React from 'react'

const RecipeList = ({recipe}) => {
console.log(recipe)
    return (
       <div className="card col-lg-5 m-1" >
        <img src={recipe.image} alt="food" className="card-img-top img-fluid img-border-rounded-circle"/>
        <div className="card-body">
        <div className="card-title h3"> NAME:{recipe.label}</div>
        <div className="card-subtitle h4">CALORIES:{Math.round(recipe.calories)}</div>
        </div>
        </div>

     
      );
}
 
export default RecipeList;
