import { useState } from "react";
import "./Grid.css";
import Card from "../Card/Card";
import Winner from "../../Helper/Winner";
import { FaPen, FaRegCircle, FaTimes } from "react-icons/fa";
function Grid() {
    const [board, setBoard] = useState(Array(9).fill(""));
    const [turn, setTurn] = useState(true);
    const [winner, setWinner] = useState(null);

    function play(index) {
        setBoard((prevBoard) => {
            const newBoard = [...prevBoard];
            newBoard[index] = turn ? "X" : "O";

            const win = Winner({ board: newBoard, symbol: turn ? "X" : "O" });

            if (win) {
                setWinner(win);
            }

            setTurn(!turn);

            return newBoard;
        });
    }

    function reset() {
        setTurn(true);
        setBoard(Array(9).fill(""));
        setWinner(null);
    }

    return (
        <div className="grid-wrapper">
            {winner && (
                <>
                    <h1 className="turn-hightlight">Winner is: {winner}</h1>
                    <button className="reset" onClick={reset}>
                        Reset
                    </button>
                </>
            )}
            <h1 className="turn-hightlight">
                Current turn: {turn ? "X" : "O"} <span></span> <FaPen/>

            </h1>
            <div className="grid">
                {board.map((element, index) => {
                    return (
                        <Card
                            key={index}
                            onPlay={play}
                            player={element}
                            index={index}
                            gameEnd={winner ? true : false}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Grid;