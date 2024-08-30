import {Box, Grid2, Rating, Typography} from "@mui/material";

import { useAppSelector} from "../store/store.ts";
import {Link} from "react-router-dom";
// import {useParams} from "react-router-dom";
// import {selectProduct} from "../store/productsSlice.ts";
// import {Product} from "../models/model.ts";
// import {useEffect, useState} from "react";


const ProductPage = () => {
    let product = useAppSelector(state => state.products.selectedProduct);
    // const [loading, setLoading] = useState(false);

    // const fetchProduct = async () => {
    //    try {
    //        const {id} = useParams();
    //        const res = await fetch('https://fakestoreapi.com/products/' + id);
    //        if(!res.ok) throw new Error(`Error: ${res.status}`);
    //        const data:Product = await res.json();
    //        // console.log('data', data)
    //        product = data;
    //        setLoading(false)
    //    }
    //    catch (error) {
    //        setLoading(false)
    //        console.log(error)
    //    }
    // }
    //
    // useEffect(() => {
    //     if(!product) {
    //         setLoading(true)
    //         fetchProduct();
    //     }
    // },[])


    return (

        <Box>
            <Link to={'/'}>Back</Link>
            <Typography variant="h1">Product</Typography>
            {/*{loading ? <div>Loading...</div> :*/}
            <Grid2 container spacing={3}>

                <Grid2 size="grow">
                    <Typography variant="h2">{product!.title}</Typography>
                    <Typography variant="h3">{product.price}</Typography>
                    <Typography variant="h4">{product.category}</Typography>
                    <Typography variant="h5">{product.description}</Typography>
                    <Rating name="read-only" value={product.rating.rate} readOnly/>
                </Grid2>
                <Grid2 size={6}>
                    <img src={product.image} alt={product.title}/>
                </Grid2>
            </Grid2>
        </Box>
    );
};

export default ProductPage;