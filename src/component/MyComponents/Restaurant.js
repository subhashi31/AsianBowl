import React , { useState } from 'react'
import Recipe from './recipeApi';
import RecipeCard from './RecipeCard';
import Navbar from './Navbar';
import { RecipePage } from './RecipePage';

export const Restaurant = () => {

  const [recipeData, setRecipeData] = useState(Recipe);

  const filterItem =(type)=>{
    if(type === "AsianBowl")
    { setRecipeData(Recipe);
      return;
    }
    
    
    const updatedList = Recipe.filter((curElem) => {
      return curElem.type === type;
    });
    setRecipeData(updatedList);
    

  };
  
  
  const RecipeFunc =(id)=>{
  
    const updatedList = Recipe.filter((curElem) => {
      return curElem.id === id[0];
    });
    setRecipeData(updatedList);
    
  };

  if(recipeData.length === 1){
    return (
        <>
          <Navbar filterItem={filterItem}/>
          <RecipePage recipeData={recipeData}  />
        </>
      )
  }
 
  else{
     return (
      <>
        <Navbar filterItem={filterItem}/>
        <RecipeCard recipeData={recipeData} RecipeFunc={RecipeFunc} />
      </>
    )
  }
}

export default Restaurant;
