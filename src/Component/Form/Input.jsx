import styled from "styled-components";
import { IcoAdd, IcoAddWhite, CatAtyping, CatBtyping } from "../icons";
import { useEffect, useState } from "react";

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
  font-size: 16px;
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

const InputBtype = styled(InputAtype)`
  background-color: #fff;
  border: 1px solid #222;
  border-radius: 0;
  color: #222;
  box-shadow: 3px 3px 0px rgba(0, 0, 0, 0.9);
  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
  &:focus,
  &:active {
    outline: unset;
    background: #fff;
    border: 2px solid #222;
  }
  &:hover {
    background: #f8f8f8;
    border: 2px solid #222;
  }
`;

const InputCtype = styled(InputAtype)`
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  color: #222;
  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
  &:focus,
  &:active {
    outline: unset;
    background: #fff;
    border: 1px solid rgba(0, 0, 0, 0.2);
  }
  &:hover {
    background: #f8f8f8;
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
const Sticker = styled.div`
  width: 112px;
  height: 63px;
  position: absolute;
  top: -50px;
  right: 28px;
  z-index: 1;
`;

const Input = (props) => {
  const { type, form, onChange, value, placeholder, disabled } = props;

  const [typing, setTyping] = useState(false);

  useEffect(() => {
    setTyping(!typing);
  }, [value]);
  return {
    0: (
      <Wrapper>
        <InputAtype
          type={form}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
          disabled={disabled}
        />
        <Button>
          <IcoAdd />
        </Button>
      </Wrapper>
    ),
    1: (
      <Wrapper>
        <InputBtype
          type={form}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
          disabled={disabled}
        />
        <Button>
          <IcoAddWhite />
        </Button>
      </Wrapper>
    ),
    2: (
      <Wrapper>
        <Sticker>{!typing ? <CatAtyping /> : <CatBtyping />}</Sticker>
        <InputCtype
          type={form}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
          disabled={disabled}
        />
        <Button>
          <IcoAdd />
        </Button>
      </Wrapper>
    ),
  }[type];
};

export default Input;
