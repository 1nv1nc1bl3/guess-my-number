import NumberInput from './NumberInput';
import Scores from './Scores';

export default function GuessBoard({
    setGuess,
    numericGuess,
    checkGuess,
    message,
    score,
    highScore,
}) {
    return (
        <main className='h-[65vh] flex items-center justify-around'>
            <NumberInput
                setGuess={setGuess}
                numericGuess={numericGuess}
                checkGuess={checkGuess}
            />
            <Scores message={message} score={score} highScore={highScore} />
        </main>
    );
}
