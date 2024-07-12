import { useState, useRef } from 'react';
import '../../styles/Music.css'
import Rock from '../../assets/Rock.wav'
import Pop from '../../assets/Pop.wav'
import Classic from '../../assets/Classic.wav'
import HipHop from '../../assets/HipHop.wav'
import Electronic from '../../assets/Electronic.wav'
import Jazz from '../../assets/Jazz.wav'
import music from '../../assets/music.svg'

import Switch  from '../SwitchTheme/Switch'

const Music = () => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [currentSound, setCurrentSound] = useState<string | null>(null);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const playSound = (sound: string) => {
        if (audioRef.current) {
            audioRef.current!.pause();
            audioRef.current!.currentTime = 0;
        }

        if (currentSound === sound) {
            setCurrentSound(null);
            return;
        }

        const audio = new Audio(sound);
        audio.play();
        audioRef.current = audio;
        setCurrentSound(sound);
    };
    const sounds = [
        { label: 'Rock', file: Rock },
        { label: 'Classic', file: Classic },
        { label: 'Jazz', file: Jazz },
        { label: 'Pop', file: Pop },
        { label: 'Electronic', file: Electronic },
        { label: 'HipHop', file: HipHop },
    ];

    return (
        <div className="music-main-container">
            <Switch />
            <button onClick={toggleDropdown}>
                <img className="music-icon" src={music} alt="Music Button" />
            </button>
            {dropdownVisible && (
                <div className="dropdown-menudropdown-menu">
                    <ul className="music-template-list">
                        {sounds.map((sound, index) => (
                            <p 
                                key={index} 
                                onClick={() => playSound(sound.file)}
                                className={currentSound === sound.file ? 'active' : ''}
                            >
                                {sound.label}
                            </p>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Music;