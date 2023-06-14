import { SquareTypes } from "../models";

export const CalculateWinner = (squares: SquareTypes[]) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (
      !(
        squares[a] === SquareTypes.none ||
        squares[b] === SquareTypes.none ||
        squares[c] === SquareTypes.none
      )
    ) {
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
  }
};

export const calculateStatus = (
  alreadyWinner: string | undefined,
  squares: SquareTypes[]
) => {
  return (
    alreadyWinner ||
    squares.every((square) => {
      return square !== SquareTypes.none;
    })
  );
};

export function TypeSquares(type: SquareTypes) {
  switch (type) {
    case SquareTypes.cross:
      return '/assets/imgKiss.jpg';
    case SquareTypes.circle:
      return '/assets/imgLaugh.jpg';
    case SquareTypes.none:
      return "";
  }
}
// controllare se ricevo una stringa o un booleano
// calcolo lo stato con already winner(string|undefined),con l'array di squares(),con opzionale vincitore, 4 test
//creo una function e gli passo squareType e poi con uno switch case dico se il tipo è circle ritornami questo simbolo
