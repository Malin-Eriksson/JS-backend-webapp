import React, { createContext, useContext, useState } from "react";
import ShoppingCart from "../components/ShoppingCart";
import { CartItem } from "../models/ShoppingCartModels";


interface ShoppingCartProviderType {
    children: any
}

export interface ShoppingCartContextType {
    items: CartItem[],
    cartQuantity: number,
    incrementQuantity: (cartItem: CartItem) => void,
    decrementQuantity: (cartItem: CartItem) => void,
    removeItem: (articleNumber: string) => void
}

export const ShoppingCartContext = createContext<ShoppingCartContextType | null>(null)
export const useShoppingCartContext = () => { return useContext(ShoppingCartContext)}

export const ShoppingCartProvider: React.FC<ShoppingCartProviderType> = ({children}) => {
    const [items, setItems] = useState<CartItem[]>([])
    const cartQuantity = items.reduce((quantity, item) => item.quantity + quantity, 0)

    const incrementQuantity = (cartItem: CartItem) => {
        const {articleNumber, product} = cartItem

        setItems(items => {
            if (items.find(item => item.articleNumber === articleNumber) === null) {
                return [...items, { articleNumber, product, quantity: 1 }]
            } else {
                return items.map(item => {
                    if (item.articleNumber === articleNumber) {
                        return {...item, quantity: item.quantity + 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    const decrementQuantity = (cartItem: CartItem) => {
        const {articleNumber} = cartItem

        setItems(items => {
            if (items.find(item => item.articleNumber === articleNumber)?.quantity === 1) {
                return items.filter(item => item.articleNumber !== articleNumber)
            } else {
                return items.map(item => {
                    if (item.articleNumber === articleNumber) {
                        return {...item, quantity: item.quantity - 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    const removeItem = (articleNumber: string) => {
        setItems(items => {
            return items.filter(item => item.articleNumber !== articleNumber)
        })
    }

    return <ShoppingCartContext.Provider value={{items, cartQuantity, incrementQuantity, decrementQuantity, removeItem}}>
        {children}
        <ShoppingCart />
    </ShoppingCartContext.Provider>
}