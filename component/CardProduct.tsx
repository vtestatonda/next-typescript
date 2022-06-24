import { CardProps } from "../models/props";
import style from "./product.module.css";

export const CardProduct = (props: CardProps) => {
  //props ya es parte de la logica de la funcion, se colocan las propiedades que las trae de la carpeta props
  return (
    <div className={style.card}>
      <h2 className={style.title}>{props.product.name}</h2>
      <b>${props.product.price}</b>
    </div>
  );
};
