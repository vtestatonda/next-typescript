import { ProductModel } from "../../models/product";
import { getDataML } from "../../util/api-ml";

const DetailProduct = (props) => {
  console.log(props);
  return <div>{props.producto.name}</div>;
};
export default DetailProduct;

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: "zapatillas" } },
      { params: { id: "botas" } },
      { params: { id: "consola" } },
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const response = await getDataML(`q=${params.id}`);
  return {
    props: {
      title: params.id,
      producto: response[0],
    },
  };
}

// export async function getServerSideProps(context) {
//   let data: ProductModel = { id: 3, name: "shirt", price: 555 };
//   return {
//     props: {
//       producto: data,
//     },
//   };
// }
