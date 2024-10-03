import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Root } from "../../types/index";

interface LikeState {
    likedProducts: Root[]; 
}

const initialState: LikeState = {
    likedProducts: []
}

const likeSlice = createSlice({
    name: 'like',
    initialState,
    reducers: {
        addLike: (state, action: PayloadAction<Root>) => { 
            state.likedProducts.push(action.payload);
        },
        removeLike: (state, action: PayloadAction<Root>) => {
            state.likedProducts = state.likedProducts.filter(product => product.id !== action.payload.id);
        }
    }
})

export default likeSlice.reducer;
export const { addLike, removeLike } = likeSlice.actions;