import styled from "styled-components";
import { IcoCheck, IcoChecked } from "./icons";

const Button = styled.button`
  position: absolute;
  top: 50%;
  left: 14px;
  width: 36px;
  height: 36px;
  transition: all 0.3s linear;
  transform: translate(-50%, -50%) scale(1);
  user-select: none;
  -webkit-tap-highlight-color: transparent !important;
  &:hover {
    transition: all 0.1s linear;
    transform: translate(-50%, -50%) scale(1.1);
  }
  &:active {
    transition: all 0.05s linear;
    transform: translate(-50%, -50%) scale(1.3);
  }
`;
const CheckBtn = (props) => {
  const { checked, type, onClick } = props;

  return {
    default: (
      <Button onClick={onClick}>
        {checked ? <IcoChecked /> : <IcoCheck />}
      </Button>
    ),
  }[type];
};

export default CheckBtn;
