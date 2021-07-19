import Head from "next/head";
import Link from "next/link"
export default function Home() {
  return (
    <div>
      <head>
        <title>รับรักเขามาแต่เขาเอาคืนไปแล้ว</title>
      </head>
      <div>
        <center>
          <h1>About pages</h1>
          <br />

        <Link href="/"><a>Home</a></Link> |
        <Link href="about"><a>About</a></Link> |
        <Link href="service"><a>Services</a></Link> | 
        <Link href="product/P001"><a>products</a></Link>

        </center>
      </div>
    </div>
  );
}
