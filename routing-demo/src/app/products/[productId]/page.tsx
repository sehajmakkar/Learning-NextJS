// we can direclty use async await on server components

export default async function ProductDetails({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const productId = (await params).productId;
  return <h1>Product details of Product {productId}</h1>;
}
