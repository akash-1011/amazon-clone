import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'

function Product({id,title,image,rating,price}) {

    const [{basket}, dispatch] = useStateValue();
    
    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                rating: rating,
                price: price,
            },
        })
    }

    return (
        <div className='product'>
            <div className='product-info'>
                <p>{title}</p>
                <p className='product-price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='product-rating'>
                    {
                        Array(rating)
                        .fill()
                        .map((_,i) => (
                            <span role='img' aria-label='rating' key={i}>⭐</span>
                        ))
                    }
                </div>
            </div>
            <img src={image} alt=''/>
            <button onClick={addToBasket}>Add to basket</button>
        </div>
    )
}

export default Product
