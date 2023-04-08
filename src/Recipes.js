import React from "react";
import styles from './recipes.module.css'

function Recipes({ title, calories, image, ingredients }) {
  return (
    <div className={styles.recipes}>
      <h1>{title}</h1>
      <ol>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <p>{calories}</p>
      <img className={styles.image} src={image} alt="" />
    </div>
  );
}

export default Recipes;
