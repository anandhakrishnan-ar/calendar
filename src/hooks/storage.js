import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
    debugger
    const [item, setItem] = useState(() => {
        try {
            return window.localStorage.getItem(key) ? JSON.parse(window.localStorage.getItem(key)) : initialValue
        }
        catch (error) {
            return initialValue;
        }
    });

    const setItemValue=value=>{
        try{
            setItem(value);
            window.localStorage.setItem(key,JSON.stringify(value));
        }
        catch(error){
            console.log(error);
        }
    }
    return [item, setItemValue];
}