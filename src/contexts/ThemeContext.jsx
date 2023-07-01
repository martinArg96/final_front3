import { createContext, useState } from "react";

export const ThemeContext = createContext()

function ThemeProvider(props){
    const [tema, setTema] = useState("light")

    function toggleTheme(){
        setTema(tema === "light" ? "dark" : "light" )
    }

    const exposedValue = {
        tema,
        toggleTheme
    }

    return(
        <ThemeContext.Provider value= {exposedValue} >
            {props.children}
        </ThemeContext.Provider>
    )

} 

export default ThemeProvider