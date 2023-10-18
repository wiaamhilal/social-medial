import React from "react";
import {useSelector} from "react-redux";
import styled from "styled-components";
import ChangePic from "./ChangePic";

const LeftSide = ({PicModel, setPicModel}) => {
  const {user} = useSelector((state) => state.user);
  return (
    <Holder className="col-sm-3 position-relative ms-md-3">
      <div className="cover"></div>
      {PicModel && <ChangePic setPicModel={setPicModel} />}
      <Head onClick={() => setPicModel(true)}>
        <img src="https://www.svgrepo.com/show/309379/camera-add.svg" alt="" />
        <div className="wellcome">Wellcome, {user && user.displayName}</div>
        <span>Add a photo</span>
      </Head>
      <FirstBody>
        <div>
          <span className="first">Connections</span>
          <span className="second">Grow your network</span>
        </div>
        <img
          src="https://cdn-icons-png.flaticon.com/512/327/327729.png"
          alt=""
        />
      </FirstBody>
      <MyItmes>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE6jAV0rGtr4X8fASq_jnOT7etdviM5boxFlAUHWO9b_eFmUNjzqNX3GWzJEKy0vXJHKY&usqp=CAU"
          alt=""
        />
        <span>My itmes</span>
      </MyItmes>
      <SecondBody>
        <span>Groups</span>
        <span className="second">
          Events <span>+</span>
        </span>
        <span>Follows Hashtags</span>
        <span className="last">Disconver more</span>
      </SecondBody>
    </Holder>
  );
};
const Holder = styled.div`
  & .cover {
    background-color: #8080803b;
    position: absolute;
    width: 93%;
    height: 49px;
  }
  background-color: white;
  margin-top: 10px;
  border-radius: 10px;
  border: 1px solid #eee;
  padding: 10px;
  height: fit-content;
  @media (max-width: 767px) {
    width: 95%;
    margin-left: 13px;
  }
`;
const Head = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & img {
    width: 50px;
    margin-bottom: 15px;
    margin-top: 20px;
    border-radius: 50%;
    background-color: white;
    z-index: 100;
  }
  & div {
    font-weight: bold;
  }
  & span {
    font-size: 14px;
    color: gray;
  }
`;
const FirstBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
  padding: 10px;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  & div {
    & .first {
      display: block;
      font-size: 14px;
      color: gray;
      font-weight: bold;
    }
    & .second {
      font-size: 14px;
      font-weight: bold;
    }
  }
  & img {
    width: 20px;
  }
`;
const MyItmes = styled.div`
  padding: 10px 0;
  font-weight: bold;
  font-size: 14px;
  background-color: white;
  & img {
    width: 20px;
    margin-right: 5px;
  }
  & span {
  }
`;
const SecondBody = styled.div`
  & span {
    display: block;
    font-size: 14px;
    font-weight: bold;
  }
  & .second {
    display: flex;
    align-items: center;
    justify-content: space-between;
    & span {
      font-size: 20px;
    }
  }
  & .last {
    color: gray;
    padding: 5px 0 5px 0;
    border-top: 1px solid #eee;
  }
`;
export default LeftSide;
