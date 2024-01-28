import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import * as S from "../Store";
import Input from "../Component/Form/Input";
import { Logo, LogoPink, LogoOrange, IcoBackPage } from "../Component/icons";
const Store = (props) => {
  // const {} = props;

  const tabMenu = [
    {
      id: 0,
      name: "머스캣",
    },
    {
      id: 1,
      name: "리스트",
    },
    {
      id: 2,
      name: "타이핑",
    },
    {
      id: 3,
      name: "배경",
    },
  ];

  const muscatItemDefault = [
    {
      id: 0,
      name: "defalut",
      buy: true,
      price: 0,
    },
    {
      id: 1,
      name: "pink",
      buy: false,
      price: 10,
    },
    {
      id: 2,
      name: "orange",
      buy: false,
      price: 10,
    },
  ];

  const inputItemDefault = [
    {
      id: 0,
      name: "defalut",
      buy: true,
      price: 0,
    },
    {
      id: 1,
      name: "pink",
      buy: false,
      price: 10,
    },
    {
      id: 2,
      name: "orange",
      buy: false,
      price: 10,
    },
  ];

  const muscatDesigns = useMemo(
    () => [
      {
        id: 0,
        design: <Logo />,
      },
      {
        id: 1,
        design: <LogoPink />,
      },
      {
        id: 2,
        design: <LogoOrange />,
      },
    ],
    []
  );

  const inputDesigns = useMemo(
    () => [
      {
        id: 0,
        design: <Input type="0" disabled />,
      },
      {
        id: 1,
        design: <Input type="1" disabled />,
      },
      {
        id: 2,
        design: <Input type="2" disabled />,
      },
    ],
    []
  );

  const [activeTab, setActiveTab] = useState(tabMenu[0].id);
  const [myPoint, setMyPoint] = useState(
    () => JSON.parse(window.localStorage.getItem("point")) || 0
  );
  const [muscatItem, setMuscatItem] = useState(
    () =>
      JSON.parse(window.localStorage.getItem("muscatList")) || muscatItemDefault
  );

  const [muscatSelected, setMuscatSelected] = useState(
    () => JSON.parse(window.localStorage.getItem("muscatSelected")) || 0
  );

  const [inputItem, setInputItem] = useState(
    () =>
      JSON.parse(window.localStorage.getItem("inputList")) || inputItemDefault
  );

  const [inputSelected, setInputSelected] = useState(
    () => JSON.parse(window.localStorage.getItem("inputSelected")) || 0
  );

  //머스캣 리스트 퍼블리싱
  const listRender = (list) => {
    return list.map((item) => (
      <S.ItemBox
        key={item.id}
        className={
          item.id === muscatSelected ? "active" : !item.buy ? "buy" : ""
        }
      >
        <S.Item onClick={() => handleActiveMuscat(item)}>
          {muscatDesigns[item.id].design}
        </S.Item>
        <S.Price>
          <Logo />
          <span>{item.price}</span>
        </S.Price>
      </S.ItemBox>
    ));
  };

  //인풋 리스트 퍼블리싱
  const inputItemRender = (list) => {
    return list.map((item) => (
      <S.ItemBox
        key={item.id}
        className={
          item.id === inputSelected ? "active" : !item.buy ? "buy" : ""
        }
      >
        <S.InputItem onClick={() => handleActiveInput(item)}>
          <S.TouchZone />
          {inputDesigns[item.id].design}
        </S.InputItem>
        <S.Price>
          <Logo />
          <span>{item.price}</span>
        </S.Price>
      </S.ItemBox>
    ));
  };

  //탭메뉴 선택 기능
  const handleActiveTab = (tabId) => {
    setActiveTab(tabId);
  };

  //머스캣 디자인 선택 기능
  const handleActiveMuscat = (item) => {
    if (item.buy) {
      setMuscatSelected(item.id);
    } else if (myPoint >= item.price && !item.buy) {
      //머스캣 아이템 구입하고 객체들 업데이트
      // 변수에 머스캣 리스트 가져와 업데이트
      setMuscatItem((prevMuscatItem) => {
        const updatedMuscatItem = prevMuscatItem.map((muscat) =>
          muscat.id === item.id ? { ...muscat, buy: true } : muscat
        );
        // 선택한 아이템의 buy 값 업데이트 되고, 그 리스트를 muscatItem에 저장,
        return updatedMuscatItem;
      });
      setMyPoint((prevPoint) => prevPoint - item.price);
      setMuscatSelected(item.id);
      alert("구입 완료!");
    } else {
      alert("포인트가 부족해요!");
    }
  };

  //인풋 디자인 선택 기능
  const handleActiveInput = (item) => {
    if (item.buy) {
      setInputSelected(item.id);
    } else if (myPoint >= item.price && !item.buy) {
      //인풋아이템 구입하고 객체들 업데이트
      // 변수에 인풋 리스트 가져와 업데이트
      setInputItem((prevInputItem) => {
        const updatedInputItem = prevInputItem.map((input) =>
          input.id === item.id ? { ...input, buy: true } : input
        );
        // 선택한 아이템의 buy 값 업데이트 되고, 그 리스트를 inputItem에 저장,
        return updatedInputItem;
      });
      setMyPoint((prevPoint) => prevPoint - item.price);
      setInputSelected(item.id);
      alert("구입 완료!");
    } else {
      alert("포인트가 부족해요!");
    }
  };

  // muscatItem 업데이트 잘 되는지 확인 OK
  useEffect(() => {
    window.localStorage.setItem("muscatList", JSON.stringify(muscatItem));
  }, [muscatItem]);

  useEffect(() => {
    window.localStorage.setItem("inputList", JSON.stringify(inputItem));
  }, [inputItem]);

  useEffect(() => {
    window.localStorage.setItem("point", JSON.stringify(myPoint));
  }, [myPoint]);

  useEffect(() => {
    window.localStorage.setItem(
      "muscatSelected",
      JSON.stringify(muscatSelected)
    );
  }, [muscatSelected]);

  useEffect(() => {
    window.localStorage.setItem("inputSelected", JSON.stringify(inputSelected));
  }, [inputSelected]);

  return (
    <S.Wrapper>
      <S.Frame>
        <S.TopArea>
          <Link to="/">
            <S.BackBtn>
              <IcoBackPage />
            </S.BackBtn>
          </Link>

          <S.Title>상점</S.Title>
          <S.MyPoint>
            <Logo />
            <span>{myPoint}</span>
          </S.MyPoint>
        </S.TopArea>
        <S.TabBox>
          {tabMenu.map((item) => {
            const active = item.id === activeTab ? "active" : "";
            return (
              <S.Tab
                className={active}
                key={item.id}
                onClick={() => {
                  handleActiveTab(item.id);
                }}
              >
                {item.name}
              </S.Tab>
            );
          })}
        </S.TabBox>
        {activeTab === 0 ? (
          <S.ItemList>{listRender(muscatItem)}</S.ItemList>
        ) : activeTab === 2 ? (
          <S.ItemInputList>{inputItemRender(inputItem)}</S.ItemInputList>
        ) : null}
      </S.Frame>
    </S.Wrapper>
  );
};

export default Store;
