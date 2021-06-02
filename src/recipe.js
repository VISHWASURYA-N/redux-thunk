import React,{useContext} from 'react';
import { useSelector } from 'react-redux';
import RecipeList from './recipesList';
// import RecipeList from './recipeslist';
const Recipes = () => {
    const data= useSelector(state=>state.edamam);
    const recipes=data.recipe;

    return ( 
        
        <div className="container">
            <div className="row">
            {recipes.map(recipe=>(
            <RecipeList key={recipe.id} {...recipe}/>
            ))}
    
        </div>
        </div>
     );
}
 
export default Recipes;