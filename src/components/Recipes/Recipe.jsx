import PropTypes from "prop-types";
import Model from "../Card/Model";
import classes from "./Recipe.module.css";

function Recipe(props) {
  const { name, img, instructions } = props;

  return (
    <div className={`${classes.recipeImage}`}>
      <div>
        <img src={img} alt="image" />
        <p>{name}</p>
        <Model img={img} name={name} instructions={instructions}>
          Reciep Detail
        </Model>
      </div>
    </div>
  );
}

Recipe.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  instructions: PropTypes.string,
};

export default Recipe;
