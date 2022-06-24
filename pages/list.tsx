import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { CardProduct } from "../component/CardProduct";
import { ListComponent } from "../component/ListComponent";
import { getDataML } from "../util/api-ml";

const List = (props) => {
  //llamo listproduct del context "cartcontext"

  const [listProducts, setListProducts] = useState<any>(
    props.productos.results
  );

  return (
    <div>
      <Head>
        <title> {props.title}</title>
      </Head>
      soy la pagina de productos
      <ListComponent productos={props.productos} />
      <Link href="/">
        <a>ir a la home</a>
      </Link>
    </div>
  );
};

export default List;

export async function getStaticProps() {
  return {
    props: {
      title: "soy la home del static generation",
      productos: await getDataML("q=zapatillas"),
    },
  };
}
