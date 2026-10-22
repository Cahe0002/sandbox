import Image from "next/image";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense fallback="loading...">
      <FetchData />
    </Suspense>
  );
}

const FetchData = async () => {
  const response = await fetch("https://dummyjson.com/products", {
    headers: {
      "x-api-key": process.env.API_KEY,
    },
  });

  const data = await response.json();
  return data.products.map((product, index) => (
    <div key={index}>
      <Image
        src={product.images[0]}
        width={500}
        height={500}
        alt={product.title}
      />
      <div>{product.brand}</div>
    </div>
  ));
};

// export default function Home() {
//   return <FetchData/>;
// }

// const FethData = async () => {
//   const response = await fetch("https://dummyjson.com/products");
//   const productsData = await response.json()
// }
