import React from "react";
import styles from "./Dish.module.css";

function Dish({ dish }) {
  return (
    <div className={styles.dishCard}>
      <h2>{dish.tittel}</h2>
      <p className={styles.kategori}>{dish.kategori}</p>
      <p>{dish.ingredienser}</p>
      <p className={styles.price}>{dish.pris}</p>
    </div>
  );
}

export default Dish;
