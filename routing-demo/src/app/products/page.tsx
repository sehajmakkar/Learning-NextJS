import Link from "next/link";

export default function Products() {
  const productId = 100; // this is a dummy product id, you can replace it with a real one like coming from a database or an API as a prop
  return (
    <>
      <Link href="/">Home</Link> <br />
      <h1>Products</h1>
      <ul>
        <li>Product 1</li>
        <li>Product 2</li>
        <li>
          <Link href="/products/3" replace>Product 3</Link>
        </li>
        <li>
          <Link href={`/products/${productId}`}>Product 100</Link>
          {/* this is a dynamic route */}
        </li>
      </ul>
    </>
  );
}
