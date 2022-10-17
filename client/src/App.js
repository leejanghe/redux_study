import CountContainer from "./containers/CountContainer";
import TodosContainer from "./containers/TodosContainer";
import { useState } from "react";
import styled from "styled-components";
import ModalForm from "./ModalForm";
const RedText = styled.div`
  border: 1px solid black;
  .like {
    color: red;
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
    <div className="App">
      {/* <CountContainer />
      <hr />
      <TodosContainer />
      <hr /> */}
      <div>
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
      </div>
    </div>
  );
}

export default App;
