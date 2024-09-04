import {
    Box,
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Rating,
    Select,
    TextField,
    Typography
} from "@mui/material";
import {ChangeEvent, useState} from "react";
import {Product} from "../models/model.ts";
import {useAppDispatch} from "../store/store.ts";
import {addProduct} from "../store/productsSlice.ts";
import {Link} from "react-router-dom";

const PRODUCT_IMG = 'template-product.webp'

const CreateProduct = () => {
    const [rating, setRating] = useState<number | null>(5);
    const [category, setCategory] = useState<string>('');
    const [price, setPrice] = useState<number>(0.0);
    const [success, setSuccess] = useState<boolean>(false);
    const dispatch = useAppDispatch();

    const fakePostProduct = async (product: Product) => {
        try {
            const res = await fetch('https://fakestoreapi.com/products',{
                method:"POST",
                body:JSON.stringify(
                    product
                )
            })
            if(!res.ok) throw new Error(`Error: ${res.status}`)
            const data = await res.json();
            console.log('data from post request', data)
            product.id = data.id + Math.ceil(Math.random()*1000); //get unic id
            dispatch(addProduct(product))
            setSuccess(true)
        }
        catch (error) {
            console.log(error)
        }
    }


    const createProduct = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSuccess(false)
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
        const product = {
            title: data['title'].toString(),
            description: data['description'].toString(),
            price: Number(data['price']),
            image: PRODUCT_IMG,
            category: data['category'].toString(),
            rating: {
                rate: Number(data['rating']),
                count: 1
            }
        }
        fakePostProduct(product)
        if(success) e.currentTarget.reset();
    }
    const checkNumber = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const regex = /^[0-9]*$/;
        if (value.match(regex)) {
            setPrice(Number(value));
        }
    }
    return (
        <Box sx={{width:'100%', maxWidth:1140, margin: '0 auto',padding: 2}}>
            <Link to={'/products'}>Вернуться к списку продуктов</Link>
            <Typography paddingBottom={4} align="center" variant="h3">Создать продукт</Typography>
            {success && <Typography align="center" color={'success'}>Продукт успешно создан</Typography>}
            <Box
                component="form"
                name={'createProductForm'}
                onSubmit={(e)=>createProduct(e)}
                sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 300, margin: '0 auto' }}
                autoComplete="off"
            >
                <TextField
                    defaultValue={''}
                    required
                    label="Title"
                    name={'title'}
                />
                <TextField
                    defaultValue={''}
                    required
                    label="Description"
                    name={'description'}
                    multiline
                    rows={4}
                />
               <TextField

                    required
                    label="Price"
                    name={'price'}
                    value={price}
                    onChange={checkNumber}

                />
                <FormControl fullWidth>
                    <InputLabel id="select-category-label">Category</InputLabel>
                    <Select
                        labelId="select-category-label"
                        name={'category'}
                        value={category}
                        label="Category"
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <MenuItem value={'Men\'s clothes'}>Men's clothes</MenuItem>
                        <MenuItem value={'Women\'s clothes'}>Women's clothes</MenuItem>
                        <MenuItem value={'Jewelery'}>Jewelery</MenuItem>
                        <MenuItem value={'Electronics'}>Electronics</MenuItem>
                    </Select>
                </FormControl>
                {/*<TextField*/}
                {/*    required*/}
                {/*    label="Category"*/}
                {/*    name={'Category'}*/}

                {/*/>*/}
                <Typography component="legend">Rating</Typography>
                <Rating
                    value={rating}
                    name={'rating'}
                    onChange={(_event, newValue) => {
                        setRating(newValue);
                    }}
                />
                {/*<TextField*/}
                {/*    required*/}
                {/*    label="Rating"*/}
                {/*    name={'Rating'}*/}
                {/*/>*/}
                <Button  type="submit" variant="contained">Создать</Button>
            </Box>
        </Box>

    );
};

export default CreateProduct;