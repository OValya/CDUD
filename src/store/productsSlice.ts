import { createSlice} from "@reduxjs/toolkit";
import {Product} from "../models/model.ts";


interface ProductState {
    products: Product[],
    favoriteProducts: number[],
    selectedProduct: Product|null
}

const initialState: ProductState = {
    products: [],
    favoriteProducts: [],
    selectedProduct: null
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload
        },
        deleteProduct: (state, action) => {
            state.products = state.products.filter(product => product.id !== action.payload)
        },
        addFavoriteProduct: (state, action) => {
            state.favoriteProducts.push(action.payload)
        },
        selectProduct: (state, action) => {
            state.selectedProduct = action.payload
        },
        addProduct: (state, action) => {
            state.products.push(action.payload)
        }
    }
});



export const {addProduct,setProducts, selectProduct, deleteProduct, addFavoriteProduct} = productsSlice.actions;

export default productsSlice.reducer


// export const productsReducer = createReducer(initialState, builder =>
//     builder.addCase(setProductsAction, (state, action) => {
//         state = action.payload;
//     }))