import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import * as S from "../Store";
import { Logo, LogoPink, LogoOrange } from "../Component/icons";
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
      price: 20,
    },
    {
      id: 2,
      name: "blue",
      buy: false,
      price: 40,
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

  // 머스캣 디자인 리스트 불러오기
  // const muscatList = useMemo(() => {
  //   return muscatItem.map((item) => {
  //     const active = item.id === muscatSelected ? "active" : "";
  //     return (
  //       <S.ItemBox className={active} key={item.id}>
  //         <S.Item onClick={() => handleActiveMuscat(item)}>
  //           {item.desigh}
  //         </S.Item>
  //         <S.Price>{item.price}</S.Price>
  //       </S.ItemBox>
  //     );
  //   });
  // }, [muscatSelected]);

  const listRender = (list) => {
    return list.map((item) => (
      <S.ItemBox
        key={item.id}
        className={item.id === muscatSelected ? "active" : ""}
      >
        <S.Item onClick={() => handleActiveMuscat(item)}>
          {muscatDesigns[item.id].design}
        </S.Item>
        <S.Price>{item.price}</S.Price>
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
    } else {
      alert("포인트 부족혀~");
    }
  };

  // muscatItem 업데이트 잘 되는지 확인 OK
  useEffect(() => {
    window.localStorage.setItem("muscatList", JSON.stringify(muscatItem));
  }, [muscatItem]);

  useEffect(() => {
    window.localStorage.setItem("point", JSON.stringify(myPoint));
  }, [myPoint]);

  useEffect(() => {
    window.localStorage.setItem(
      "muscatSelected",
      JSON.stringify(muscatSelected)
    );
  }, [muscatSelected]);

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
        {activeTab === 0 ? (
          <S.ItemList>{listRender(muscatItem)}</S.ItemList>
        ) : null}
      </S.Frame>
    </S.Wrapper>
  );
};

export default Store;
