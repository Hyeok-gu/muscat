import styled from "styled-components";
import { IcoDelete } from "./icons";
import CheckBtn from "./CheckBtn";

const Item = styled.li`
  min-height: 30px;
  padding: 10px 20px 10px 14px;
  border-radius: 18px;
  backdrop-filter: blur(20px);
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.3);
  align-items: center;
  margin-bottom: 12px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.06);
  transform: translateY(0);
  transition: all 0.1s linear;
  &.clear {
    opacity: 0.5;

    .box {
      button {
        pointer-events: none;
      }
    }
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.35);
    /* height: 60px; */
  }
  .box {
    display: flex;
    align-items: center;
    position: relative;
    padding: 0 10px 0 32px;
  }
  span {
    display: inline-block;
    color: #fff;
    font-size: 14px;
    margin-left: 12px;
    font-family: Gmarket sans;
    line-height: 19px;
    font-weight: 500;
    word-break: break-all;
    white-space: break-spaces;
    text-overflow: ellipsis;
  }
  button {
    padding: 0;
    user-select: none;
    -webkit-tap-highlight-color: transparent !important;
  }
`;

const ToDoItem = (props) => {
  const { index, className, item, finish, onClear, onDelete } = props;
  return (
    <Item key={index} className={className}>
      <div className="box">
        <CheckBtn checked={finish} onClick={onClear} type="default" />
        <span>{item.title}</span>
      </div>
      <button onClick={onDelete}>
        <IcoDelete />
      </button>
    </Item>
  );
};

export default ToDoItem;
