import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import exp from "constants";
import { Square } from "../components";
import { SquareTypes } from "../models";

test("square", () => {
  const MyMock = jest.fn();
  render(
    <Square
      index={0}
      isDisabled={false}
      onclick={MyMock}
      type={SquareTypes.cross}
      isActive={true}
    />
  );
  const squarebutton = screen.getByTestId("squarebutton");
    fireEvent.click(squarebutton)
    expect(MyMock).toHaveBeenCalledTimes(1)
});

test("check if SquareType.cross return X", () => {
  render(
    <Square
      index={0}
      isDisabled={false}
      onclick={() => {}}
      type={SquareTypes.cross}
      isActive={true}
    />
  );
  const squarebutton = screen.getByTestId("squarebutton");
  expect(squarebutton.innerHTML).toBe("X");
});

test("check if SquareType.none return empty string", () => {
  render(
    <Square
      index={0}
      isDisabled={false}
      onclick={() => {}}
      type={SquareTypes.none}
      isActive={true}
    />
  );
  const squarebutton = screen.getByTestId("squarebutton");
  expect(squarebutton.innerHTML).toBe("");
});

test("check if SquareType.circle return O", () => {
  const component = render(
    <Square
      index={0}
      isDisabled={false}
      onclick={() => {}}
      type={SquareTypes.circle}
      isActive={true}
    />
  );
  const squarebutton = screen.getByTestId("squarebutton");
  expect(squarebutton.innerHTML).toBe("O");
});

test("check if SquareType.circle return O without using getByTestId", () => {
  const component = render(
    <Square
      index={0}
      isDisabled={false}
      onclick={() => {}}
      type={SquareTypes.circle}
      isActive={true}
    />
  );
  expect(component.baseElement.textContent).toBe("O");
});

// test('1',()=>{
//   const myMock = jest.fn();
//   console.log(myMock());
//   // > undefined
//   myMock.mockReturnValueOnce(10).mockReturnValueOnce('x').mockReturnValue(true);
//   console.log(myMock(), myMock(), myMock(), myMock());})
