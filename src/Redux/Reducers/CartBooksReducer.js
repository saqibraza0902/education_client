const initialState = {
    cart: []
}
const CartBooksReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'PRODUCT':
            const item = action.payload;
            console.log(item)
            const existingItemIndex = state.cart.findIndex((item) => item._id === action.payload._id)
            if (existingItemIndex !== -1) {
                // If the item already exists in the cart, update its quantity
                const updatedCart = [...state.cart];
                console.log(existingItemIndex)
                updatedCart[existingItemIndex].count += 1;

                return {
                    cart: updatedCart
                }

            } else {
                // If the item is not in the cart, add it
                return {
                    cart: [...state.cart, action.payload]
                }
            }

        default:
            return {
                ...state
            }
    }
}
export default CartBooksReducer