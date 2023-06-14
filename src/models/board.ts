import { SquareTypes } from "./square";

export enum BoardStatus {
  Playing = "playing",
  Ended = "ended",
}

export interface IBoard {
  squares: SquareTypes[],
  status: BoardStatus,
  winner?: string,
  counterX: number,
  counterO: number,
  currentIndex?: number,
}

