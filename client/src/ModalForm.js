import React from "react";
import styled from "styled-components";

const Wrapblack = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
  z-index: 999;
  top: 0;
  left: 0;
`;

const WrapModal = styled.div`
  width: 40%;
  position: fixed;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  background: white;
  border-radius: 8px;
  padding: 20px;
`;

function ModalForm({
  id,
  title,
  contents,
  setShowModal,
  detail,
  like,
  isLike,
  plusBtn,
}) {
  return (
    <Wrapblack>
      <WrapModal>
        <h1>{id}</h1>
        <p>{title}</p>
        <p>{contents}</p>
        <p>{detail}</p>
        <p className={isLike ? "like" : undefined} onClick={() => plusBtn(id)}>
          좋아요{like}
        </p>
        <button onClick={() => setShowModal(false)}>닫기</button>
      </WrapModal>
    </Wrapblack>
  );
}

export default ModalForm;
