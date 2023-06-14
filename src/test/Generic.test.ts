import { CalculateWinner } from "../components/Generic";
import { SquareTypes } from "../models";
import { calculateStatus } from "../components/Generic";

test("calculate draw", () => {
  const squares: SquareTypes[] = [
    SquareTypes.cross,
    SquareTypes.circle,
    SquareTypes.cross,
    SquareTypes.cross,
    SquareTypes.circle,
    SquareTypes.circle,
    SquareTypes.circle,
    SquareTypes.cross,
    SquareTypes.cross,
  ];
  const x = CalculateWinner(squares);
  expect(x).toBe(undefined);
});

test("calculate circle winner", () => {
  const squares: SquareTypes[] = [
    SquareTypes.cross,
    SquareTypes.circle,
    SquareTypes.cross,
    SquareTypes.none,
    SquareTypes.circle,
    SquareTypes.cross,
    SquareTypes.none,
    SquareTypes.circle,
    SquareTypes.none,
  ];
  const x = CalculateWinner(squares);
  expect(x).toBe(SquareTypes.circle);
});

test("calculate cross winner", () => {
  const squares: SquareTypes[] = [
    SquareTypes.cross,
    SquareTypes.circle,
    SquareTypes.none,
    SquareTypes.none,
    SquareTypes.cross,
    SquareTypes.circle,
    SquareTypes.none,
    SquareTypes.none,
    SquareTypes.cross,
  ];
  const x = CalculateWinner(squares);
  expect(x).toBe(SquareTypes.cross);
});

test("calculate status", () => {
  const squares: SquareTypes[] = [
    SquareTypes.cross,
    SquareTypes.cross,
    SquareTypes.cross,
    SquareTypes.none,
    SquareTypes.none,
    SquareTypes.none,
    SquareTypes.none,
    SquareTypes.none,
    SquareTypes.none,
  ];

    const x = calculateStatus('alreadyWinner', squares)
  expect(typeof x==='string').toBe(true)
})

test("calculate status", () => {
  let alreadyWinner: string | undefined;
  const squares: SquareTypes[] = [
    SquareTypes.cross,
    SquareTypes.circle,
    SquareTypes.cross,
    SquareTypes.cross,
    SquareTypes.circle,
    SquareTypes.circle,
    SquareTypes.circle,
    SquareTypes.cross,
    SquareTypes.cross,
  ];

    const x = calculateStatus(alreadyWinner, squares)
  expect(typeof x==='boolean').toBe(true)
})

test("calculate status", () => {
  let alreadyWinner: string | undefined;
  const squares: SquareTypes[] = [
    SquareTypes.none,
    SquareTypes.none,
    SquareTypes.none,
    SquareTypes.none,
    SquareTypes.none,
    SquareTypes.none,
    SquareTypes.none,
    SquareTypes.none,
    SquareTypes.none,
  ];

    const x = calculateStatus(alreadyWinner, squares)
  expect(typeof x!=='boolean').toBe(false)
})

