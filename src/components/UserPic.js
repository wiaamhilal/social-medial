import React from "react";
import styled from "styled-components";

const UserPic = ({setvuePic, userPhoto}) => {
  return (
    <Main>
      <Box>
        <Close>
          <span onClick={() => setvuePic(false)}>X</span>
        </Close>
        <Pic>
          <img src={userPhoto} alt="" />
        </Pic>
      </Box>
    </Main>
  );
};
const Main = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  top: 0;
  left: 0;
  color: black;
  animation: fade 0.3s;
  z-index: 9999;
`;
const Box = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #eee;
  border-radius: 5px;
  max-width: 550px;
  width: 100%;
  margin: 5px;
`;
const Close = styled.div`
  text-align: end;
  & span {
    cursor: pointer;
    padding: 10px;
    font-size: 18px;
    font-weight: bold;
    color: darkslategray;
  }
`;
const Pic = styled.div`
  text-align: center;
  & img {
    border-radius: 50%;
    width: 240px;
    height: 240px;
    margin-bottom: 20px;
  }
`;
export default UserPic;
