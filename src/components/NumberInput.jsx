export default function NumberInput({ checkGuess, setGuess, numericGuess }) {
    return (
        <section className='left w-[52rem] flex flex-col items-center'>
            <input
                type='number'
                className='guess bg-transparent border-[4px] border-[#eee] text-inherit text-[5rem] px-[2.5rem] w-[25rem] text-center mb-[3rem]'
                value={numericGuess || ''}
                onChange={(e) => setGuess(e.target.value)}
            />
            <button
                className='btn check inline-block bg-[#eee] text-[#222] text-[2rem] px-[3rem] py-[2rem] cursor-pointer hover:bg-[#ccc] border-none'
                onClick={checkGuess}
            >
                Check!
            </button>
        </section>
    );
}
