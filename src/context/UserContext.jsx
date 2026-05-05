import React, { createContext, useState } from 'react'
import { food_items } from '../food'


export const dataContext = createContext()


function UserContext({ children }) {

    let [Cat, setCat] = useState(food_items)
    let [input, setInput] = useState("")
    const [showCart, setShowCart] = useState(false)

    let data = {
        input,
        setInput,
        Cat,
        setCat,
        showCart,
        setShowCart
    }
    return (
        <div>
            <dataContext.Provider value={data}>
                {children}
            </dataContext.Provider>
        </div>
    )
}

export default UserContext