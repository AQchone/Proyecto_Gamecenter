import { createContext, useState } from "react";


export const DarkModeContext = createContext()

export const DarkModeProvider = ({children}) => {
    const [darkMode, setDarkMode] = useState(false)

    const changeMode = () => {
        setDarkMode(!darkMode)
    }

    return (
        <DarkModeContext.Provider value={{
            darkMode,
            changeMode
        }}>
            {children}
        </DarkModeContext.Provider>
    )
}