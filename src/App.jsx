import { useGuess } from './utils/useGuess';
import Header from './components/Header';
import GuessBoard from './components/GuessBoard';

export default function App() {
    const {
        score,
        highScore,
        message,
        numericGuess = '',
        setGuess,
        checkGuess,
        resetGame,
        displayNumber,
        gameStatus,
    } = useGuess();

    return (
        <div
            className={`font-game text-[#eee] min-h-screen ${gameStatus === 'won' ? 'bg-[#60b347]' : 'bg-[#222]'}`}
        >
            <Header
                displayNumber={displayNumber}
                gameStatus={gameStatus}
                resetGame={resetGame}
            />
            <GuessBoard
                setGuess={setGuess}
                numericGuess={numericGuess}
                checkGuess={checkGuess}
                message={message}
                score={score}
                highScore={highScore}
            />
        </div>
    );
}
