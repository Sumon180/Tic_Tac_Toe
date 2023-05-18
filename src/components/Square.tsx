interface SquareProps {
    value: string | null;
    onSquareClick: () => void;
}

export const Square = ({ value, onSquareClick }: SquareProps) => {
    return (
        <button className="square bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded" onClick={onSquareClick}>
            {value}
        </button>
    );
}
export default Square;