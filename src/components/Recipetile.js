import React from "react";
import "./file.css";

function Recipetile({ recipe }) {
  return (
    recipe["recipe"]["image"].match(/\.(jpeg|jpg|gif|png)$/) != null && (
      <div className="recipeTile">
        <img
          className="recipeTile__image"
          src={recipe["recipe"]["image"]}
          alt="img"
          onClick={() => window.open(recipe["recipe"]["url"])}
        />
        <p className="recipeTile__name">{recipe["recipe"]["label"]}</p>
      </div>
    )
  );
}

export default Recipetile;