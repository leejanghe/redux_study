import CountContainer from "./containers/CountContainer";
import TodosContainer from "./containers/TodosContainer";
import { useState } from "react";
import styled from "styled-components";
import ModalForm from "./ModalForm";
import { useTranslation } from "react-i18next";
import i18n from "./lang/i18n";
const RedText = styled.div`
  border: 1px solid black;
  .like {
    color: red;
  }
`;

const TextStyled = styled.div`
  text-align: center;
  > h1 {
    font-size: 24px;
    font-weight: 700;
  }
  > button {
    width: 150px;
    margin: 10px;
    background: black;
    color: white;
    height: 50px;
    border-radius: 10px;
    font-size: 14px;
    font-weight: 400;
    cursor: pointer;
    :hover {
      color: yellow;
    }
    :active {
      transform: scale(0.99);
    }
  }
  > p {
    border: 1px solid 00000;
    padding: 20px;
    font-size: 20px;
    color: green;
  }
`;

function App() {
  const [showModal, setShowModal] = useState(false);
  const [modalVisbleId, setModalVisbleId] = useState("");

  const handleClick = (id) => {
    // alert(`${id} click`)
    setShowModal(true);
    // console.log("id@@@@", id);
    setModalVisbleId(id);
  };

  const [data, setData] = useState([
    {
      id: 0,
      title: "사람",
      contents: "사람은 동물일까요?",
      detail: "사람은 동물이 맞아요! 왜냐하면 짐승이거든요!",
      ilike: 2,
      isLike: false,
      //   istrue: false,
    },
    {
      id: 1,
      title: "원숭이",
      contents: "원숭이는 사람일까요?",
      detail: "원숭이는 동물이예요!@#!@!@!!",
      ilike: 3,
      isLike: true,
      //   istrue: false,
    },
    {
      id: 2,
      title: "더미더미",
      contents: "더미데이터입니다.",
      detail: "할말이 없어요~@~@~@@@낄끼루",
      ilike: 0,
      isLike: false,
    },
    {
      id: 3,
      title: "저아여기능",
      contents: "더미데꾸루루.",
      detail: "할키키@낄끼루",
      ilike: 0,
      isLike: false,
    },
    {
      id: 4,
      title: "더미더미",
      contents: "더미데이터입니다.",
      detail: "할쿠루무끼루",
      ilike: 1,
      isLike: true,
    },
  ]);

  // const [count, setCout] = useState(0);
  // const [isLike, setLike] = useState(false);

  const [idx, setIdx] = useState([]);

  const [proverbs, setProverbs] = useState([
    "나 자신에 대한 자신감을 잃으면 온 세상이 나의 적이 된다.",
    "항상 맑으면 사막이 된다. 비가 내리고 바람이 불어야만 비옥한 땅이 된다",
    "누구나 자신의 능력을 믿어야 한다. 그렇지 않으면 누구도 자신의 능력을 믿지 않는다.",
    "같은 실수를 두려워하되 새로운 실수를 두려워하지 마라. 실수는 곧 경험이다.",
    "폭력은 언제나 자기 자신을 약화시킨다.",
    "사랑은 누구나 느끼지만, 그것을 표현하는 사람은 드물다.",
    "술 한잔은 마음을 편안하게 하지만, 술 한잔은 마음을 편안하게 하지 않는다.",
    "누구나 자신의 능력을 믿어야 한다. 그렇지 않으면 누구도 자신의 능력을 믿지 않는다.",
    "인생은 무엇을 얻는가가 아니라 무엇을 주는가에 달려 있다.",
  ]);

  const proverbs1 = [
    "Death to myself has gone all over the world.",
    "If it is always sunny, it becomes a desert. Only when it rains and the wind blows, the land becomes fertile",
    "Everyone has to believe in their own abilities. Otherwise, no one believes in their abilities.",
    "Fear the same mistakes, but not the new ones. Mistakes are experience.",
    "Violence always weakens itself.",
    "Love is felt by everyone, but few express it.",
    "A glass of wine relaxes the mind, but a glass of wine does not.",
    "Everyone has to believe in their own abilities. Otherwise, no one believes in their abilities.",
    "Life depends on what you give, not what you get.",
  ];
  console.log("신동첣평쉰");
  const getRandomProverb = () => {
    const randomIndex = Math.floor(Math.random() * proverbs.length);
    setIdx(randomIndex);
    setShowEg(false);
    setShowKo(true);
    // setProverbs([proverbs[randomIndex]]);
  };

  const [showEg, setShowEg] = useState(false);
  const [showKo, setShowKo] = useState(true);
  const changeEng = () => {
    setShowEg(true);
    setShowKo(false);
  };

  const changeKo = () => {
    setShowEg(false);
    setShowKo(true);
  };

  const plusBtn = (i) => {
    console.log(data);
    if (data[i].isLike === false) {
      data[i].isLike = true;
      data[i].ilike++;
    } else {
      data[i].isLike = false;
      data[i].ilike--;
    }
    setData([...data]);
    // let testCnt = [...data];
    // testCnt[i].ilike++;
    // setData(testCnt);
  };

  return (
    <TextStyled>
      {/* <CountContainer />
      <hr />
      <TodosContainer />
      <hr /> */}
      {/* <div>
        {data.map((a, i) => {
          return (
            <RedText key={a.id}>
              <h3>{a.title}</h3>
              <p>{a.contents}</p>
              <p>{a.detail}</p>
              <p
                className={a.isLike ? "like" : undefined}
                onClick={() => plusBtn(i)}
              >
                좋아요{a.ilike}
              </p>
              <p onClick={() => handleClick(a.id)}>자세히 보기</p>
              {modalVisbleId === a.id && showModal === true ? (
                <ModalForm
                  // data={data[a]}
                  id={a.id}
                  title={a.title}
                  contents={a.contents}
                  detail={a.detail}
                  setShowModal={setShowModal}
                  like={a.ilike}
                  isLike={a.isLike}
                  plusBtn={plusBtn}
                  //   istrue={item.istrue}
                />
              ) : null}
            </RedText>
          );
        })}
      </div> */}

      <h1>오늘의 명언</h1>
      {showKo ? <p>{proverbs[idx]}</p> : null}
      {showEg ? <p>{proverbs1[idx]}</p> : null}
      {/* <p>{proverbs1[idx]}</p> */}
      <button onClick={changeKo}>한글번역</button>
      <button onClick={changeEng}>영어번역</button>
      <button onClick={() => getRandomProverb()}>랜덤명언출력!</button>
    </TextStyled>
  );
}

export default App;
