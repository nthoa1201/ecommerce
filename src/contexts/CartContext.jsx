import React, {createContext, useEffect, useState} from 'react';

export const CartContext = createContext()
const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])

    // item amount state
    const [itemAmount, setItemAmount] = useState(0)

    const [totalPrice, setTotalPrice] =useState(0)



    useEffect(() => {
        const  total = cart.reduce((acc, curItem) => {
            return acc + curItem.price * curItem.amount
        },0)
        setTotalPrice(total)
    })

    // update item amount
    useEffect(()=> {
        if (cart){
            const amount = cart.reduce((acc, cur) =>{
                return acc + cur.amount

            },0)
            setItemAmount(amount)
        }
    }, [cart])
    const addToCart = (product, id) => {
        const newItem = {...product, amount: 1}

        //check if the item is already in the cart
        const cartItem = cart.find(item => {
            return item.id === id
        })
        // if cart item is already in the cart
        if (cartItem) {
            const newCart = [...cart].map(item => {
                if (item.id === id) {
                    return {...item, amount: cartItem.amount + 1}
                } else {
                    return item
                }
            })
            setCart(newCart)
        } else {
            setCart([...cart, newItem])
        }
    }

    const removeFromCart = (id) => {
        const newCart = cart.filter(item => {
            return item.id !== id
        })
        setCart(newCart)
    }

    const clearCart = () => {
        setCart([])
    }

    const increaseAmount = (id) => {
        const cartItem = cart.find(item => item.id === id)
        addToCart(cartItem, id)
    }

    const decreaseAmount = (id) => {
        const cartItem = cart.find(item => item.id === id)

        if (cartItem) {
            const newCart = cart.map(item => {
                if (item.id === id) {
                    return {...item, amount: cartItem.amount - 1}
                } else {
                    return item
                }
            })
            setCart(newCart)
        }

        if (cartItem.amount < 2) {
            removeFromCart(id)
        }
    }

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                clearCart,
                increaseAmount,
                decreaseAmount,
                itemAmount,
                setItemAmount,
                totalPrice
            }}>{children}</CartContext.Provider>
    );
};

export default CartProvider;