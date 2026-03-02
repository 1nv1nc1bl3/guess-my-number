import { useState, useEffect } from 'react';

const generateSecretNumber = () => Math.trunc(Math.random() * 20) + 1;
export function useGuess() {
    // States
    const [score, setScore] = useState(20);
    const [highScore, setHighScore] = useState(() => {
        const saved = localStorage.getItem('high-score:v1');
        let initialValue;
        if (!saved) return [];
        try {
            initialValue = JSON.parse(saved);
        } catch (error) {
            console.error(error);
            return [];
        }
        return initialValue || [];
    });
    const [secretNumber, setSecretNumber] = useState(generateSecretNumber());
    const [guess, setGuess] = useState('');
    const [message, setMessage] = useState('Start guessing...');
    const [gameStatus, setGameStatus] = useState('playing');

    // Effects
    useEffect(() => {
        localStorage.setItem('high-score:v1', JSON.stringify(highScore));
    }, [highScore]);

    // Constants
    const numericGuess = Number(guess);
    const displayNumber = gameStatus !== 'playing' ? secretNumber : '?';

    // Button 'Check!'
    function checkGuess() {
        if (!numericGuess) return setMessage('⛔ No number!');
        if (numericGuess === secretNumber) {
            setMessage('🎉 Correct Number!');
            setGameStatus('won');
            setHighScore((prev) => (score > prev ? score : prev));
            return;
        }
        if (score > 1) {
            setMessage(
                numericGuess > secretNumber ? '📈 Too high!' : '📉 Too low!',
            );
            setScore((prev) => prev - 1);
        } else {
            setScore(0);
            setGameStatus('lost');
            setMessage('💥 You lost the game!');
        }
        // console.log(secretNumber);
    }
    // Button 'Play Again?'
    function resetGame() {
        setScore(20);
        setSecretNumber(generateSecretNumber());
        setMessage('Start guessing...');
        setGuess('');
        setGameStatus('playing');
    }

    return {
        gameStatus,
        score,
        message,
        numericGuess,
        highScore,
        checkGuess,
        resetGame,
        setGuess,
        displayNumber,
    };
}
