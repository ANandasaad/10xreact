import React from "react";
import { recipes } from "../utils/constant";

const Recipe = () => {
  const list = recipes.map((m) => (
    <div key={m.id}>
        <h2>{m.name}</h2>
      {m.ingredients.map((list) => (
        <p key={list}>{list}</p>
      ))}
    </div>
  ));
  console.log(list);

  return (
    <>
      <h1>Recipe</h1>
      <div>{list}</div>
    </>
  );
};

export default Recipe;
