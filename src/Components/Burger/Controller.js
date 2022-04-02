import React from "react";

import AddButton from "./AddButton";
import style from "./controller.module.css";

const Controller = (props) => {
  return (
    <>
      <div className={style.ingredients_selector}>
        <h5>Add Ingredients</h5>
        <div>
          <AddButton
            label="Patty"
            clickHandler={() => props.addIngredientHandler("patty")}
          />
          <AddButton
            label="Lettuce"
            clickHandler={() => props.addIngredientHandler("lettuce")}
          />
          <AddButton
            label="Tomato"
            clickHandler={() => props.addIngredientHandler("tomato")}
          />
          <AddButton
            label="Cheese"
            clickHandler={() => props.addIngredientHandler("cheese")}
          />
          <AddButton
            label="Bun"
            clickHandler={() => props.addIngredientHandler("bun")}
          />
        </div>
      </div>
      <div className={style.ingredients_map}>
        {props.ingredients.map((item, index) => {
          return <div key={index}>{item}</div>;
        })}
      </div>
    </>
  );
};

export default Controller;
