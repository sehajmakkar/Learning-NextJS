// directly in app so
// root url
// "/" route

// this is children for root layout
import Link from "next/link";
import "./globals.css";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">home page</h1>
      <p>Welcome to the home page!</p>
      <Link href="/">Home</Link> <br />
      <Link href="/about">About</Link> <br />
      <Link href="/products">Products</Link>
      <br />
      <Link href="articles/breaking-news-123?lang=en">Read in ENGLISH</Link>
      <Link href="articles/breaking-news-123?lang=fr">Read in FRENCH</Link>
    </>
  );
}
