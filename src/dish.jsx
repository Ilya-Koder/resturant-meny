import React from "react";

function Dish({ dish }) {
  return (
    <div className="dishCard">
      <h2>{dish.tittel}</h2>
      <p>{dish.pris}</p>
      <p>{dish.ingredienser}</p>
      <p>{dish.kategori}</p>
    </div>
  );
}

export default Dish;
