import { useCallback, useState, useEffect } from "react";
import ToDoItem from "../Component/ToDoItem";
import styled from "styled-components";
import Background from "../Component/Background";
import Input from "../Component/Form/Input";
import { Logo } from "../Component/icons";

const Container = styled.div`
  width: 100%;
  height: 100dvh;
  position: fixed;
  display: flex;
  justify-content: center;
  overflow: hidden;
`;

const Frame = styled.div`
  width: 100%;
  max-width: 480px;
  height: 100%;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  position: fixed;
  overflow: hidden;
  transition: all 0.3sec;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #333;
  font-weight: bold;
  text-align: center;
  position: absolute;
  top: 90px;
  left: 50%;
  transform: translateX(-50%) scaleX(100%) scaleY(100%);
  font-family: Gmarket sans;
  font-weight: 900;
  letter-spacing: -0.3px;
  transition: all 0.1s linear;
  color: #333;
  &.action {
    transition: all 0.1s linear;
    transform: translateX(-50%) scaleX(90%) scaleY(110%);
    /* svg {
      transition: all 0.1s linear;
      transform: translate(-50%, -50%) scaleX(90%) scaleY(110%);
    } */
  }
  svg {
    z-index: -1;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    g {
      opacity: 1;
    }
    path {
      fill: #24d287;

      stroke: none;
    }
  }
`;

const Form = styled.form`
  width: calc(100% - 32px);
  position: absolute;
  bottom: 40px;
`;
const List = styled.div`
  margin-top: 190px;
  overflow-y: auto;
  height: calc(100% - 360px);
  mask-image: linear-gradient(rgb(0, 0, 0) 86%, transparent);
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
  ul {
    transition: all 0.1s linear;
    &.active {
      transform: translateY(12px);
    }
  }
`;

const Home = () => {
  const [toDo, setToDo] = useState("");
  const [list, setList] = useState(
    () => JSON.parse(window.localStorage.getItem("list")) || []
  );
  const [point, setPoint] = useState(
    () => JSON.parse(window.localStorage.getItem("point")) || 0
  );

  // 스타일
  const [listUp, setListUp] = useState(false);
  // const [listDelete, setListDelete] = useState(false);
  const [iconAction, setIconAction] = useState(false);
  const [backgroundType, setBackgroundType] = useState("default");
  const [inputType, setInputType] = useState("default");

  const onChange = (event) => setToDo(event.target.value);

  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setListUp(!listUp);
    setList((currentList) => [
      {
        title: toDo,
        clear: false,
        point: 1,
      },
      ...currentList,
    ]);
    setTimeout(() => setListUp(false), 50);
    setToDo("");
  };

  const countPoint = () => {
    setPoint((prevPoint) => ++prevPoint);
    setIconAction(true);
    setTimeout(() => setIconAction(false), 100);
  };

  const handleClear = (index) => {
    setList((currentList) => {
      const updatedList = currentList.map((item, i) => {
        if (i === index) {
          return { ...item, clear: !item.clear, point: 0 };
        }
        return item;
      });
      return updatedList;
    });

    countPoint();
  };

  const handleDelete = useCallback(
    (index) => {
      setList(list.filter((item, i) => i !== index));
    },
    [list]
  );

  // const changeBgAtype = () => {
  //   if (point >= 20) {
  //     setBackgroundType("a");
  //     setPoint(point - 20);
  //   } else {
  //     return;
  //   }
  // };

  useEffect(() => {
    window.localStorage.setItem("point", JSON.stringify(point));
  }, [point]);

  useEffect(() => {
    window.localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  return (
    <Container>
      <Frame>
        <Title className={iconAction ? "action" : null}>
          {point}
          <Logo />
        </Title>
        <List>
          <ul className={listUp ? "active" : null}>
            {list.map((item, index) => (
              <ToDoItem
                key={index}
                className={item.clear ? "clear" : null}
                index={index}
                item={item}
                finish={item.clear}
                onClear={() => handleClear(index)}
                onDelete={() => handleDelete(index)}
              />
            ))}
          </ul>
        </List>
        <Form onSubmit={onSubmit}>
          <Input
            type={inputType}
            form="text"
            onChange={onChange}
            value={toDo}
            placeholder="오늘의 할 일을 적어주세요"
          ></Input>
        </Form>
      </Frame>
      {/* <h2>할 일 {list.length}</h2> */}
      {/* <h2>포인트 {point}</h2> */}
      {/* <button onClick={changeBgAtype}>배경 바꾸기 20포인트</button> */}
      <Background type={backgroundType} />
    </Container>
  );
};
export default Home;
