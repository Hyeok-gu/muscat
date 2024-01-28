import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100dvh;
  display: flex;
  justify-content: center;
`;

export const Frame = styled.div`
  width: 100%;
  height: 100%;
  max-width: 480px;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
export const Title = styled.h2`
  margin-top: 36px;
  font-size: 20px;
  font-family: Gmarket Sans;
  font-weight: 900;
`;

export const BackBtn = styled.button`
  width: 48px;
  height: 48px;
  background-color: blue;
  position: absolute;
  top: 16px;
  left: 16px;
`;
export const MyPoint = styled.span`
  display: block;
  width: 48px;
  height: 48px;
  font-size: 14px;
  font-family: Gmarket Sans;
  font-weight: 700;
  position: absolute;
  top: 16px;
  right: 16px;
`;

export const TabBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 24px;
`;

export const Tab = styled.button`
  min-width: 60px;
  padding: 8px 14px;
  font-size: 16px;
  border-radius: 40px;
  background: #f8f8f8;
  margin-right: 12px;
  &:last-child {
    margin-right: 0;
  }
  &.active {
    background: #333333;
    color: #f8f8f8;
  }
`;

export const ItemList = styled.div`
  width: 100%;
  display: grid;
  margin-top: 24px;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
`;
export const ItemBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  &.active {
    button {
      border: 2px solid red;
    }
  }
`;

export const Item = styled.button`
  width: 100%;
  aspect-ratio: 1 / 1;
  background-color: #f8f8f8;
  border-radius: 24px;
`;
export const Price = styled.span`
  margin-top: 8px;
  font-size: 14px;
  color: #444;
`;
