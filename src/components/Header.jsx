export default function Header({ displayNumber, gameStatus, resetGame }) {
    return (
        <header className='relative h-[35vh] border-b-[7px] border-[#eee]'>
            <h1 className='text-[4rem] text-center absolute w-full top-[52%] left-1/2 -translate-x-1/2 -translate-y-1/2'>
                Guess My Number!
            </h1>
            <p className='absolute top-[2rem] right-[2rem] text-[1.4rem]'>
                (Between 1 and 20)
            </p>
            {gameStatus !== 'playing' && (
                <button
                    onClick={resetGame}
                    className='btn again absolute top-[2rem] left-[2rem] bg-[#eee] text-[#222] text-[2rem] px-[3rem] py-[2rem] cursor-pointer hover:bg-[#ccc]'
                >
                    Play Again?
                </button>
            )}
            <div className='number absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-[#eee] text-[#333] text-[6rem] w-[15rem] h-[10rem] py-[3rem] text-center flex items-center justify-center'>
                {displayNumber}
            </div>
        </header>
    );
}
