export default function Scores({ message, score, highScore }) {
    return (
        <section className='right w-[52rem] text-[2rem]'>
            <p className='message mb-[8rem] h-[3rem]'>{message}</p>
            <p className='label-score mb-[2rem]'>
                💯 Score: <span className='score'>{score}</span>
            </p>
            <p className='label-highscore'>
                🥇 Highscore: <span className='highscore'>{highScore}</span>
            </p>
        </section>
    );
}
