import { Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography} from "@mui/material";
import {useState} from "react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {Delete} from "@mui/icons-material";

type ProductCardProps = {
    title: string;
    description: string;
    image: string;
    price: number;
}

const ProductCard = (props: ProductCardProps) => {
    const [isFavorite, setIsFavorite] = useState(false);
    const {title, description, image, price} = props;
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader

                title={title}
                // subheader="September 14, 2016"
            />
            <CardMedia
                component="img"
                height="194"
                image={image}
                alt={title}
                sx={{objectFit: 'contain'}}
            />
            <CardContent>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {description}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Price: ${price}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}

                </IconButton>
                <IconButton aria-label="delete" >
                    <Delete />
                </IconButton>

            </CardActions>
        </Card>
    );
};

export default ProductCard;