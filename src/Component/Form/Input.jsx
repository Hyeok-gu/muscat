import styled from "styled-components";
import { IcoAdd } from "../icons";

const Wrapper = styled.div`
  display: flex;
  position: relative;
`;
const InputAtype = styled.input`
  width: 100%;
  height: 48px;
  border-radius: 40px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 0 48px 0 24px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.16);
  transition: all 0.3s;
  backdrop-filter: blur(20px);
  background: rgba(0, 0, 0, 0.4);
  color: #fff;
  font-size: 14px;
  font-family: Gmarket sans;
  font-weight: 500;
  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
  &:focus,
  &:active {
    outline: unset;
    background: rgba(0, 0, 0, 0.5);
    border: 1px solid rgba(255, 255, 255, 0.5);
  }
  &:hover {
    background: rgba(0, 0, 0, 0.5);
  }
`;
const Button = styled.button`
  padding: 0;
  margin: 0;
  position: absolute;
  right: 22px;
  top: 50%;
  transform: translateY(-50%);
  color: #fff;
  -webkit-tap-highlight-color: transparent !important;
`;
const Input = (props) => {
  const { type, form, onChange, value, placeholder } = props;
  return {
    default: (
      <Wrapper>
        <InputAtype
          type={form}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
        />
        <Button>
          <IcoAdd />
        </Button>
      </Wrapper>
    ),
  }[type];
};

export default Input;
