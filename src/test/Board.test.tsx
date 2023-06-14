import { render, screen } from "@testing-library/react";
import { Board } from "../components";
import { Square } from "../components";
import { SquareTypes } from "../models";

test("span cross exists", () => {
  render(<Board />);
  const elementX = screen.getByTestId("player1");
  expect(elementX).toBeDefined();
});

test("span circle is defined", () => {
  render(<Board />);
  const elementO = screen.getByText("Player 2:O(circle)");
  expect(elementO).toBeDefined();
});

test("counterX is not null", () => {
  render(<Board />);
  const counterO = screen.getByTestId("counterO");
  expect(counterO).not.toBeNull();
});

test("default value of squaretypes is none", () => {
  render(<Board />);
  const buttons = screen.getByTestId("buttons");
  const buttonChildren = buttons.children;
  const firstGroup = buttonChildren[0];
  const secondGroup = buttonChildren[1];
  const thirdGroup = buttonChildren[2];

  Group(firstGroup);
  Group(secondGroup);
  Group(thirdGroup);

  function Group(buttonsGroup: Element) {
    for (let i = 0; i < buttonsGroup.children.length; i++) {
      const singleButton = buttonsGroup.children[i];
      expect(singleButton.innerHTML).toBe("");
    }
  }
});

//come incapsulare questa porzione di codice in maniera tale che sia dinamico, io ridò in pasto, parametrizzo, dandogli a questo codice dinamicamente il gruppo che deve ciclare

 



