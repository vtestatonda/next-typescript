import { createContext, useState } from "react";
import { ProductModel } from "../models/product";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState<ProductModel[]>([]);
  const [listProduct, setListProduct] = useState<ProductModel[]>([
    { id: 1, name: "shoes", price: 9999 },
    { id: 2, name: "shoes2", price: 111 },
    { id: 3, name: "shoes3", price: 123 },
  ]);

  return (
    <CartContext.Provider value={{ cart, setCart, listProduct }}>
      {children}
    </CartContext.Provider>
  );
};
