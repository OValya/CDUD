import {Box,  Grid2} from "@mui/material";
import ProductCard from "./Product-card.tsx";
import {useEffect, useState} from "react";
import {Product} from "../models/model.ts";
import {useAppDispatch, useAppSelector} from "../store/store.ts";
import {setProducts} from "../store/productsSlice.ts";


const Products = () => {
   // const [products, setProducts] = useState<Product[]>([]);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(null);
   const dispatch = useAppDispatch();
   const products = useAppSelector(state => state.products.products);
   const favoriteProducts = useAppSelector(state => state.products.favoriteProducts);


   useEffect(()=>{
       setLoading(true);
       const fetchData = async () => {
           try{
               const res = await fetch('https://fakestoreapi.com/products');
               if(!res.ok) throw new Error(`Error: ${res.status}`);
               const data = await res.json();
               dispatch(setProducts(data));
               //setProducts(data);
               setLoading(false);
           }
           catch(error){
               setError(error.message);
               // setProducts([])
               dispatch(setProducts([]))
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
                   <ProductCard id={product.id} isFavorite={favoriteProducts.includes(product.id)} title={product.title} description={product.description} image={product.image} price={product.price} key={{index}}/>
                ))}
            </Grid2>
        </Box>
    );
};

export default Products;