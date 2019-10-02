import { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {

    const [value, setValue] = useState(() => {
        // * CHECK IF STORAGE VALUE EXIST
        const localValue = window.localStorage.getItem(key);

        // * RETURN VALUE BASED ON CONDITIONAL
        return !!localValue !== false ? JSON.parse(localValue) : initialValue;
    });

    const getValue = data => {
        console.log('GET VALUE BEING ACTIVATED', data);

        // * UPDATE STATE
        setValue(data);

        // * UPDATE LOCALSTORAGE
        window.localStorage.setItem(key, data);
    };

    // * VALUE RETURNED FROM useLocalStorage
    return [value, getValue]
}