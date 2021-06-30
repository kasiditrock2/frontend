import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
const Products = () => {
  const router = useRouter();
  const pathData = router.query;
  return (
    
      <center>
       <h1> Product ID:{pathData.id}</h1>
      <br />
      <Link href="/"><a>Home</a></Link> |
        <Link href="about"><a>About</a></Link> |
        <Link href="service"><a>Services</a></Link> | 
        <Link href="product/P001"><a>products</a></Link>
        </center>
        
   
  );
};
export default Products;
