import { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext({
    light: true,
    toggle: () => {},
});

export const ThemeProvider = ({ children }) => {
    const [light, setLight] = useState(true);

    const toggleTheme = () => {
        localStorage.setItem('light', JSON.stringify(!light));
        setLight(!light);

        document.body.classList.toggle('light', !light);
        document.body.classList.toggle('dark', light);
    };

    useEffect(() => {
        const localeLight = JSON.parse(localStorage.getItem('light'));

        if (typeof localeLight !== 'boolean')
        document.body.classList.add(light ? 'light' : 'dark');
        else {
        setLight(localeLight);
        document.body.classList.add(localeLight ? 'light' : 'dark');
        }
    }, []);

    return (
        <ThemeContext.Provider value={{ light, toggleTheme }}>
        {children}
        </ThemeContext.Provider>
    );
};
