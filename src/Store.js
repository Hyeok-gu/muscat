import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100dvh;
  display: flex;
  justify-content: center;
  background-color: #eee;
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

export const TopArea = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 12px;
`;

export const Title = styled.h2`
  font-size: 20px;
  font-family: Gmarket Sans;
  font-weight: 900;
`;

export const BackBtn = styled.button`
  width: 36px;
  height: 36px;
  border-radius: 16px;
`;
export const MyPoint = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  span {
    margin-left: 4px;
    font-size: 14px;
    font-family: Gmarket Sans;
    font-weight: 700;
  }
  svg {
    width: 20px;
    height: 20px;
    path {
      fill: #444;
    }
  }
`;

export const TabBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 36px;
`;

export const Tab = styled.button`
  min-width: 60px;
  padding: 8px 14px;
  font-size: 16px;
  border-radius: 40px;
  background: #f8f8f8;
  margin-right: 12px;
  color: #222;
  &:last-child {
    margin-right: 0;
  }
  &.active {
    background: #222;
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

export const ItemInputList = styled.div`
  width: 100%;
  display: grid;
  margin-top: 24px;
  grid-template-columns: 1fr;
  gap: 16px;
`;

export const ItemBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  border: 2px solid transparent;
  &.active {
    &::after {
      content: "선택";
      position: absolute;
      display: block;
      background-color: rgb(36, 210, 135);
      color: #fff;
      right: 10px;
      top: 10px;
      font-size: 12px;
      font-family: Gmarket Sans;
      backdrop-filter: blur(20px);
      padding: 4px 8px;
      border-radius: 10px;
    }
    > button {
      border: 2px solid rgb(36, 210, 135);
    }
  }
  &.buy {
    > button {
      position: relative;
      &::before {
        content: "구입하기";
        z-index: 1;
        position: absolute;
        display: block;
        color: #fff;
        top: 50%;
        left: 50%;
        background-color: rgb(0, 0, 0, 0.5);
        transform: translate(-50%, -50%);
        font-size: 12px;
        font-family: Gmarket Sans;
        padding: 6px 12px;
        border-radius: 20px;
        width: 70px;
      }
    }
  }
`;
export const TouchZone = styled.button`
  width: 100%;
  height: 100%;
  background-color: transparent;
  border-radius: 20px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;
export const Item = styled.button`
  width: 100%;
  aspect-ratio: 1 / 1;
  background-color: #f8f8f8;
  border-radius: 18px;
`;

export const InputItem = styled.button`
  padding: 16px;
  width: 100%;
  background-color: #f8f8f8;
  border-radius: 18px;
  position: relative;
`;

export const Price = styled.span`
  margin-top: 8px;
  span {
    font-size: 14px;
    color: #444;
    margin-left: 4px;
    font-family: Gmarket Sans;
  }
  svg {
    width: 12px;
    height: 12px;
    transform: translateY(1px);
    path {
      fill: #444;
    }
  }
`;
