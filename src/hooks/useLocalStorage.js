import { useState } from './node_modules/react';

export const useLocalStorage = (key, initialValue) => {

    const [value, setValue] = useState(() => {
        // * CHECK IF STORAGE VALUE EXIST
        const localValue = window.localStorage.get(key);

        // * RETURN VALUE BASED ON CONDITIONAL
        return !!localValue !== false ? JSON.parse(localValue) : initialValue;
    });

    const getValue = data => {
        // * UPDATE STATE
        setValue(data);

        // * UPDATE LOCALSTORAGE
        window.localStorage.setItem(key, JSON.stringify(data));
      };

    // * VALUE RETURNED FROM useLocalStorage
    return [value]
}