import { useState, useEffect } from 'react';

import '../../styles/Switch.css'

import moon from '../../assets/moon.svg'
import sun from '../../assets/sun.svg'

const Switch = () => {

    const [theme, setTheme] = useState('light');

    useEffect(() => {
        document.querySelector('body')?.setAttribute('data-theme', theme);
    }, [theme]);

    const toggleTheme = (selectedTheme: string) => {
        setTheme(selectedTheme);
    };

    return (
        <div className="switch-main-container">
            <button
                className="switch-moon-button"
                onClick={() => toggleTheme('dark')}
            >
                <img className="moon" src={moon} alt="moon" />
            </button>

            <button
                className="switch-sun-button"
                onClick={() => toggleTheme('light')}
            >
                <img className="sun" src={sun} alt="sun" />
            </button>
        </div>
    );
};

export default Switch;
