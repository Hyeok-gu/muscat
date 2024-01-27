import styled from "styled-components";

export const Store = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  border-radius: 24px 24px 0 0;
  width: 100%;
  padding: 24px;
  height: 60dvh;
  background-color: #fff;
  box-shadow: 0 0 24px rgba(0, 0, 0, 0.3);
  z-index: 1;
`;
export const Bg = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100dvh;
  background-color: rgba(0, 0, 0, 0.25);
`;
export const Tab = styled.button`
  min-width: 60px;
  padding: 8px 10px;
  font-size: 14px;
  border-radius: 40px;
  background: #f8f8f8;
  margin-right: 8px;
  &.active {
    background: #333333;
    color: #f8f8f8;
  }
`;
