import { notFound } from "next/navigation";

export default async function ReviewDetails({
  params,
}: {
  params: Promise<{productId: string, reviewId: string }>;

}) {
  const {productId, reviewId} = await params;
  if(parseInt(reviewId) > 1000){
    return notFound();
  }
  return <h1>Product {productId} <br />
  Review {reviewId}</h1>;
}
