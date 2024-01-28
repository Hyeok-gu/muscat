import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import * as S from "../Store";
import { Logo } from "../Component/icons";
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

  const muscatItem = [
    {
      id: 0,
      name: "defalut",
      buy: false,
      price: 0,
      desigh: <Logo />,
    },
    {
      id: 1,
      name: "pink",
      buy: false,
      price: 20,
      desigh: <Logo />,
    },
    {
      id: 2,
      name: "blue",
      buy: false,
      price: 40,
      desigh: <Logo />,
    },
  ];

  const [activeTab, setActiveTab] = useState(tabMenu[0].id);
  const [myPoint, setMyPoint] = useState(
    () => JSON.parse(window.localStorage.getItem("point")) || 0
  );

  const handleActiveTab = (tabId) => {
    setActiveTab(tabId);
  };

  // 컴포넌트가 마운트될 때 muscatItem을 localStorage에 저장
  // useEffect(() => {
  //   localStorage.setItem("muscatItem", JSON.stringify(muscatItem));
  // }, []);

  // 머스캣 디자인 리스트 불러오기
  const muscatList = useMemo(() => {
    return muscatItem.map((item) => (
      <S.ItemBox key={item.id}>
        <S.Item>{item.desigh}</S.Item>
        <S.Price>{item.price}</S.Price>
      </S.ItemBox>
    ));
  }, [muscatItem]);

  return (
    <S.Wrapper>
      <S.Frame>
        <Link to="/">
          <S.BackBtn>뒤로가기</S.BackBtn>
        </Link>
        <S.MyPoint>Point {myPoint}</S.MyPoint>
        <S.Title>상점</S.Title>
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
        {activeTab === 0 ? <S.ItemList>{muscatList}</S.ItemList> : null}
      </S.Frame>
    </S.Wrapper>
  );
};

export default Store;
