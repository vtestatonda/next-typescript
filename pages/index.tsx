import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartProvider";
import Head from "next/head";
import { CardProduct } from "../component/CardProduct";
import { getDataML } from "../util/api-ml";
import { ListComponent } from "../component/ListComponent";

export default function Home(props) {
  console.log(props);
  const { listProduct } = useContext(CartContext);
  //llamo listproduct del context "cartcontext"

  const [listProducts, setListProducts] = useState<any>(
    props.productos.results
  );
  console.log(listProducts);
  return (
    <div>
      <Head>
        <title>{props.title}</title>
      </Head>
      <Image src="/vercel.svg" height={200} width={200} alt="" />
      <h1>Ecommerce </h1>
      <h3>Productos destacados</h3>
      <ListComponent productos={props.productos} />
      <div>
        {listProduct[0].name} - ${listProduct[0].price}
      </div>

      <Link href="/list">
        <a>iVer productos</a>
      </Link>
      <style jsx>
        {`
          .class {
            background: "red";
          }
        `}
      </style>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: "soy la home del static generation",
      productos: await getDataML("q=zapatillas"),
    },
  };
}
