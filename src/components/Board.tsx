import { useEffect, useState } from "react";
import { BoardStatus, IBoard, SquareTypes } from "../models";
import { calculateStatus, CalculateWinner } from "./Generic";
import { Square } from "./Square";
import "./board.css";

const Board = () => {
  const [board, setBoard] = useState<IBoard>({
    squares: [
      SquareTypes.none,
      SquareTypes.none,
      SquareTypes.none,
      SquareTypes.none,
      SquareTypes.none,
      SquareTypes.none,
      SquareTypes.none,
      SquareTypes.none,
      SquareTypes.none,
    ],
    status: BoardStatus.Playing,
    counterO: 0,
    counterX: 0,
    winner: undefined,
  });

  const reset = () => {
    setBoard({
      ...board,
      //qui con lo spread operator richiamo board e tutti i valori che aveva prima per poi
      //successivamente modificare solo i campi che dico io, ovvero squares, status e winner
      //se non avessi fatto così mi avrebbe dato errore perchè avrei dovuto utilizzare anche counter x e o
      squares: [
        SquareTypes.none,
        SquareTypes.none,
        SquareTypes.none,
        SquareTypes.none,
        SquareTypes.none,
        SquareTypes.none,
        SquareTypes.none,
        SquareTypes.none,
        SquareTypes.none,
      ],
      status: BoardStatus.Playing,
      winner: undefined,
    });
  };

  const onSquareClick = (index: number) => {
    const circlesLength = board.squares.filter(
      (x) => x === SquareTypes.circle
    ).length;
    const crossLength = board.squares.filter(
      (x) => x === SquareTypes.cross
    ).length;
    board.squares[index] =
      circlesLength < crossLength ? SquareTypes.circle : SquareTypes.cross;
    setBoard({ ...board, currentIndex: index }); //salvo l'informazione, ovvero l'index corrente, per poi passarlo
  };

  useEffect(() => {
    if (board.status === BoardStatus.Playing) {
      const winner = CalculateWinner(board.squares);
      const isEnded = calculateStatus(winner, board.squares);
      if (isEnded) {
        setBoard({
          ...board,
          status: BoardStatus.Ended,
          winner,
        });
      }
    }
  }, [board]);

  const listSquares = board.squares.map((x, index) => (
    <Square
      key={index}
      index={index}
      type={x}
      onclick={(index) => onSquareClick(index)} //al click devo memorizzare qua dentro l'ultimo che ho cliccato
      isDisabled={board.status === BoardStatus.Ended || x !== SquareTypes.none}
      isActive={board.currentIndex === index}
    />
  ));
  // usestate per cambiare il colore

  useEffect(() => {
    if (board.winner === SquareTypes.cross) {
      setBoard({
        ...board,
        counterX: board.counterX + 1,
      });
    }
    if (board.winner === SquareTypes.circle) {
      setBoard({
        ...board,
        counterO: board.counterO + 1,
      });
    }
  }, [board.winner]);

  return (
    <>
      <div className="Containers">
        <div className="ContainerKiss">
          <span className="KissplayerStyle" data-testid="player1">
            Player 1(Kiss)
          </span>
          <br />
          <img src="/assets/imgKiss.jpg" className="kissImgStyle" /> <br />{" "}
          <br />
          <span className="counterKissStyle" data-testid="counterX">
            {board.counterX}
          </span>
        </div>
        <div className="ContainerLaugh">
          <span className="LaughPlayerStyle">Player 2(Laugh)</span> <br />
          <img src="/assets/imgLaugh.jpg" className="LaughImgStyle" /> <br />
          <br />
          <span className="counterLaughStyle" data-testid="counterO">
            {board.counterO}
          </span>
        </div>
      </div>
      <div className="allbuttonStyleFather">
        <div className="allbuttonStyleSon" data-testid="buttons">
          <div className="buttonGroupStyle">{listSquares.slice(0, 3)}</div>

          <div className="buttonGroupStyle"> {listSquares.slice(3, 6)}</div>

          <div className="buttonGroupStyle">{listSquares.slice(6, 9)}</div>
        </div>
      </div>
      <div className="winnerStyle">
        {board.status === BoardStatus.Ended && board.winner && (
          <>THE WINNER IS {board.winner}</>
        )}
      </div>
      <div className="drawStyle">
        {board.status === BoardStatus.Ended && !board.winner && <>DRAW</>}
      </div>
      <div className="resetButtonStyleFather">
        <button onClick={reset} className="resetButtonStyleSon">
          New Game
        </button>
      </div>
    </>
  );
};

export { Board }; //padre
