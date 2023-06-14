import { SquareTypes } from "../models";
import { TypeSquares } from "./Generic";
import "./square.css";

export interface Props {
  isDisabled: boolean;
  type: SquareTypes;
  index: number;
  onclick: (index: number) => void;
  isActive: boolean
}

//all'interno di square gli metto l'input isDisabled e per calcolare l'isdisabled devo fare riferimento allo stato della board e se il valore è popolato o meno

function Square({ isDisabled, type, onclick, index, isActive = false }: Props) {
  const handleClick = () => {
    if (!isDisabled) {
      onclick(index);
    }
  }; //modificare cross e circle con faccine prese da internet

  const imageToRender = TypeSquares(type)

  return (
    <div>
      <button
        className={`square ${isActive ? 'active' : ''}`}
        onClick={handleClick}
        data-testid="squarebutton"
      >  
        {imageToRender ? (<img src={TypeSquares(type)} className="imgStyle"/>) : ''}
      </button>
    </div>
  );
}

export { Square };
//figlio
