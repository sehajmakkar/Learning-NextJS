import { Metadata } from "next";

type Props = {
  params: Promise<{ productId: string }>;
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const id = (await params).productId;
  const title = await new Promise((resolve) => {
    setTimeout(() => resolve(`iPhone ${id}`), 100);
  });
  return { title: `Product ${id}` };
};

// we can direclty use async await on server components

export default async function ProductDetails({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  // getting the productId from the params (http://localhost:3000/products/productId)
  // so dynamically rendering the productId in the page according to the url
  // we can use async await here because this is a server component
  const productId = (await params).productId;
  return <h1>Product details of Product {productId}</h1>;
}
