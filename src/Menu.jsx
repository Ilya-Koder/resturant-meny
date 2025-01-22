import React from "react";
import Dish from "./dish";
import "./global.css";

function Menu({ dishes }) {
  return (
    <div className="menu">
      {dishes.map((dish) => (
        <Dish key={dish.id} dish={dish} />
      ))}
    </div>
  );
}

export default Menu;
