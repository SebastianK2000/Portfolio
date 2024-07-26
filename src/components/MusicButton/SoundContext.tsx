import React, { createContext, useContext, useRef, useState, ReactNode } from 'react';

interface SoundContextProps {
    currentSound: string | null;
    playSound: (sound: string) => void;
}

const SoundContext = createContext<SoundContextProps | undefined>(undefined);

export const SoundProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [currentSound, setCurrentSound] = useState<string | null>(null);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const playSound = (sound: string) => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
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

    return (
        <SoundContext.Provider value={{ currentSound, playSound }}>
            {children}
        </SoundContext.Provider>
    );
};

export const useSound = (): SoundContextProps => {
    const context = useContext(SoundContext);
    if (!context) {
        throw new Error('useSound must be used within a SoundProvider');
    }
    return context;
};
