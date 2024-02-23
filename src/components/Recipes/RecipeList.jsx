import { repiceData } from "../../recipe.js";
import Recipe from "./Recipe";
import classes from "./Recipe.module.css";

function RecipeList() {
  return (
    <div className={`${classes.recipeWrapper}`}>
      <h3>Recipe List</h3>
      {repiceData.map((a) => {
        return (
          <Recipe
            key={a.idMeal}
            img={a.strMealThumb}
            name={a.strMeal}
            instructions={a.strInstructions}
          />
        );
      })}
    </div>
  );
}

export default RecipeList;
