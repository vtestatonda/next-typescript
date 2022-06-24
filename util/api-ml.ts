import { ProductModel } from "../models/product";

export const getDataML = async (term: string): Promise<ProductModel[]> => {
  //creamos una funcion asincronica donde tiene de parametro de ingreso el termino que va a ser texto y que va a devolver una promesa un productmodel
  const response = await fetch(
    `https://api.mercadolibre.com/sites/MLA/search?${term}`
  );
  // hacemos el fetch a la api
  const data = await response.json();
  //esperamos los datos de la api
  const products: ProductModel[] = data.results.map((element, index) => {
    return {
      id: index,
      name: element.title,
      price: element.price,
    };
  });
  //esparciamos la api, por cada elemento vamos a generar un nuevo array. Eso se guarda en una constante producto
  return products;
};
