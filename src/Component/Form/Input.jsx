import styled from "styled-components";
import { IcoAdd } from "../icons";

const Wrapper = styled.div`
  display: flex;
  position: relative;
`;
const InputAtype = styled.input`
  width: 100%;
  height: 48px;
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding-left: 30px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.16);
  transition: all 0.3s;
  backdrop-filter: blur(20px);
  background: rgba(0, 0, 0, 0.4);
  color: #fff;
  font-size: 16px;
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
  position: absolute;
  right: 18px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 24px;
  color: #fff;
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
