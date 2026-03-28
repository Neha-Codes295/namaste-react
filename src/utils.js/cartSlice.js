import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        // dispatch , fxn
        addItem: (state, action) => {
            // mutating the state over here
            const incoming = action.payload;
            const existing = state.items.find((i) => i.id === incoming.id);
            if (existing) {
                existing.quantity = (existing.quantity ?? 1) + 1;
            } else {
                state.items.push({ ...incoming, quantity: 1 });
            }
        },
        removeItem: (state) => {
            const last = state.items[state.items.length - 1];
            if (!last) return;
            if ((last.quantity ?? 1) > 1) {
                last.quantity -= 1;
            } else {
                state.items.pop();
            }
        },
        clearCart: (state) => {
            state.items.length = 0; // [] : empty arr
            // can't do directly as only local one gets updated , not the actual/original
            // or return [];
        },
    }
})

export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;