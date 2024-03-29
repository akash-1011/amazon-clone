export const initialState = {
    basket: [],
    user: null,
}

export const getBasketTotal = (basket) => 
basket?.reduce((amount, item) => item.price + amount, 0);

function reducer(state,action) {
    switch (action.type) {
        case 'ADD_TO_BASKET':
            // adding to basket
            return {
                ...state,
                basket: [...state.basket, action.item],
            }

        case 'REMOVE_FROM_BASKET': 
            // remove from basket
            let newBasket = [...state.basket]
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id)
            if(index >= 0) {
                //item exist, remove it
                newBasket.splice(index,1)
            } else {
                console.warn(
                    `cant remove product (id: ${action.id}) as its not in basket`
                )
            }
            return {...state, basket: newBasket}
        
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            }

        default:
            return state;
    }
}

export default reducer;