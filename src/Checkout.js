import React from 'react'
import { useStateValue } from './StateProvider'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal';

function Checkout() {
    const [{basket}] = useStateValue();

    return (
        <div className='checkout'>
            <div className='checkout-left'>
                {/* <img 
                    className='checkout-ad'
                    src=''
                    alt=''
                /> */}
                {basket?.length === 0 ? (
                    <div>
                        <h2>Your Shopping Basket is empty</h2>
                        <p>
                            You have no items in your basket. To buy items, click "Add to basket" next to the item.
                        </p>
                    </div>
                ) : 
                (
                    <div>
                        <h2 className='checkout-title'>Your Shopping Basket</h2>
                        {basket?.map((item, idx) => (
                            <CheckoutProduct 
                                key={idx}
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                )
                }
            </div>
            {basket.length > 0 && (
                <div className='checkout-right'>
                    <Subtotal />        
                </div>
            )}
        </div>
    )
}

export default Checkout
