import {Box,  Grid2} from "@mui/material";
import ProductCard from "./Product-card.tsx";
import {useEffect, useState} from "react";
import {Product} from "../models/model.ts";


const Products = () => {
   const [products, setProducts] = useState<Product[]>([]);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(null);

   useEffect(()=>{
       setLoading(true);
       const fetchData = async () => {
           try{
               const res = await fetch('https://fakestoreapi.com/products');
               if(!res.ok) throw new Error(`Error: ${res.status}`);
               const data = await res.json();
               setProducts(data);
               setLoading(false);
           }
           catch(error){
               setError(error.message);
               setProducts([])
               setLoading(false)
           }
       }
       fetchData();
   }, [])
    return (
        <Box sx={{ flexGrow: 1 }}>
            {loading ? <h1>Loading...</h1> : error ? <h1>{error}</h1> : null}
            <Grid2 container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                {products.map((product, index) => (
                   <ProductCard title={product.title} description={product.description} image={product.image} price={product.price} key={{index}}/>
                ))}
            </Grid2>
        </Box>
    );
};

export default Products;