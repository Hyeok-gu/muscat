import { useCallback, useState, useEffect, useRef, useMemo } from "react";
import ToDoItem from "../Component/ToDoItem";
import styled from "styled-components";
import Background from "../Component/Background";
import Input from "../Component/Form/Input";
import { Link } from "react-router-dom";
import Muscat from "../Component/Logo";
import { Logo, LogoPink, LogoOrange } from "../Component/icons";

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
`;

const Frame = styled.div`
  width: 100%;
  max-width: 480px;
  height: 100%;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  position: relative;
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
  font-weight: 700;
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
    fill: #ffd460;
  }
`;

const Form = styled.form`
  width: calc(100% - 32px);
  max-width: 480px;
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
`;
const List = styled.div`
  margin-top: 180px;
  overflow-y: auto;
  height: calc(100% - 330px);
  mask-image: linear-gradient(transparent, rgb(0, 0, 0) 18%);
  padding-top: 30px;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
  ul {
    transition: all 0.1s linear;
    li {
      &:first-child {
        margin-top: 60px;
      }
      &:last-child {
        transform: translateY(0);
        scale: 1;
      }
    }
    &.active {
      transform: translateY(-20px);
      li {
        &:last-child {
          transform: translateY(10px);
          scale: 0.95;
        }
      }
    }
  }
`;

const Home = () => {
  const [toDo, setToDo] = useState("");
  const [list, setList] = useState(
    () => JSON.parse(window.localStorage.getItem("list")) || []
  );
  const [point, setPoint] = useState(
    () => JSON.parse(window.localStorage.getItem("point")) || 200
  );

  const [openStore, setOpenStore] = useState(false);

  // 스타일
  const [listUp, setListUp] = useState(false);
  // const [listDelete, setListDelete] = useState(false);
  const [iconAction, setIconAction] = useState(false);
  const [backgroundType, setBackgroundType] = useState("default");
  const [inputType, setInputType] = useState("default");

  const [logoType, setLogoType] = useState(
    () => JSON.parse(window.localStorage.getItem("muscatSelected")) || 0
  );

  const onChange = (event) => setToDo(event.target.value);

  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setListUp(!listUp);
    setList((currentList) => [
      ...currentList,
      {
        title: toDo,
        clear: false,
        point: 1,
      },
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

  const handleStore = () => {
    setOpenStore(!openStore);
  };

  const scrollRef = useRef();

  useEffect(() => {
    window.localStorage.setItem("point", JSON.stringify(point));
  }, [point]);

  useEffect(() => {
    window.localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  useEffect(() => {
    scrollToBottom();
  }, [listUp]);

  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  };

  return (
    <>
      <Container>
        <Frame>
          <Link to="/store">
            <button onClick={handleStore}>상점</button>
          </Link>
          <Title className={iconAction ? "action" : null}>
            {point}
            <Muscat type={logoType} />
          </Title>
          <List ref={scrollRef}>
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
        </Frame>
        {/* <h2>할 일 {list.length}</h2> */}
        {/* <h2>포인트 {point}</h2> */}
        {/* <button onClick={changeBgAtype}>배경 바꾸기 20포인트</button> */}
        <Background type={backgroundType} />
      </Container>
      <Form onSubmit={onSubmit}>
        <Input
          type={inputType}
          form="text"
          onChange={onChange}
          value={toDo}
          placeholder="오늘의 할 일을 적어주세요"
        ></Input>
      </Form>
    </>
  );
};
export default Home;
