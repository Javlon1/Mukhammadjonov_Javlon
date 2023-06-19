import { createContext, useState } from 'react'
import { HeaderData } from '../Data/Data'

const Context = createContext()

function Provider({children}) {

    const [lan, setLan] = useState(window.localStorage.getItem('lan') ? window.localStorage.getItem('lan') : "ru")

    return (
        <Context.Provider value={{lan, setLan}}>
            {children}
        </Context.Provider>
    )
}
 
export { Context, Provider} 