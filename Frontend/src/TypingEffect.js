import React, { useEffect, useState } from "react";

const TypingEffect = ({ text =""}) => {
    const [displayedText, setDisplayedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < text.length) {
            const interval = setInterval(() => {
                setDisplayedText(prev => prev + text[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, 100);

            return () => clearInterval(interval);
        }
    }, [currentIndex, text]);

    // Reset effect when text prop changes
    useEffect(() => {
        setDisplayedText('');
        setCurrentIndex(0);
    }, [text]);

    return <span className="typing-effect">{displayedText}</span>;
};

export default TypingEffect;