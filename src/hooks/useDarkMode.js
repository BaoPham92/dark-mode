import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = (value) => {

    // * STATE
    const [mode, setMode] = useLocalStorage('mode', value);

    // * USE EFFECT
    useEffect(() => {
        // * GRAB BODY ELEMENT
        const bodyElement = document.querySelector('body');

        // * UPDATE STATE
        setMode(value)

        // ? CONDITIONAL LOGIC FOR SETTING CLASS TO BODY IF TRUE
        value === 'true' && bodyElement.classList.add('dark-mode')

        // ? CONDITIONAL LOGIC FOR SETTING CLASS TO BODY IF FALSE
        value === 'false' && bodyElement.classList.remove('dark-mode')

        // ! LOG DATA VALUES!
        console.log(value, bodyElement);
    }, [value])

    return [mode]
}