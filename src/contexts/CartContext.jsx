import React, { createContext, useEffect, useReducer } from 'react'
import cartRedcuer from '../reducers/cartReducer'
import { useLocalStorage } from '../hooks/useLocalStorage'

const CartContext = createContext({
  cart: [],
  dispatch: () => {}
})

const CartProvider = ({ children }) => {
  const [storedCart, setStoredCart] = useLocalStorage('cart', [])
  const [cart, dispatch] = useReducer(cartRedcuer, storedCart)

  useEffect(() => {
    setStoredCart(cart)
  }, [cart, setStoredCart])

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  )
}

export { CartContext, CartProvider }