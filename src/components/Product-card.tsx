import { Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography} from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {Delete} from "@mui/icons-material";
import {useAppDispatch} from "../store/store.ts";
import {addFavoriteProduct, deleteProduct, selectProduct} from "../store/productsSlice.ts";
import {useNavigate} from "react-router-dom";
import {Product} from "../models/model.ts";


interface PropsType{
    product: Product;
    isFavorite: boolean;
}

const ProductCard = (props: PropsType) => {
    // const [isFavorite, setIsFavorite] = useState(false);
    const {product, isFavorite} = props;
    const dispatch = useAppDispatch();
    const setFavorite=()=>{
        dispatch(addFavoriteProduct(product.id))
    }
    const deleteProductHandler = () => {
        dispatch(deleteProduct(product.id))
    }
    const navigate = useNavigate();
    const selectProductHandler = () => {
        // console.log(id);
        dispatch(selectProduct(product));
        navigate(`/product/${product.id}`)
    }

    return (
        <Card sx={{cursor: 'pointer', width:'100%', maxWidth: 345 }} onClick={selectProductHandler}>
            <CardHeader

                title={product.title}
                // subheader="September 14, 2016"
            />
            <CardMedia
                component="img"
                height="194"
                image={product.image}
                alt={product.title}
                sx={{objectFit: 'contain'}}
            />
            <CardContent>
                {/*<Typography variant="body2" sx={{ color: 'text.secondary' }}>*/}
                {/*    {description}*/}
                {/*</Typography>*/}
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Price: ${product.price}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites" onClick={setFavorite}>
                    {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}

                </IconButton>
                <IconButton aria-label="delete" onClick={deleteProductHandler}>
                    <Delete />
                </IconButton>

            </CardActions>
        </Card>
    );
};

export default ProductCard;