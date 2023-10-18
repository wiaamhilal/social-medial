import React, {useState} from "react";
import {useSelector} from "react-redux";
import styled from "styled-components";
import youImg from "../images/youtube-168-svgrepo-com.svg";
import phototImg from "../images/photo-svgrepo-com.svg";
import PostModel from "./PostModel";
import PostArticles from "./PostArticles";
import loadingImg from "../images/loader.svg";

const Main = ({showPicModel, setvuePic, vuePic}) => {
  const [ShowModel, setShowModel] = useState();
  const HandleClick = () => {
    setShowModel(!ShowModel);
  };
  const {user, loading} = useSelector((state) => state.user);
  return (
    <div className="col-12 col-md-6">
      {ShowModel && <PostModel HandleClick={HandleClick} />}
      <StartPost onClick={HandleClick}>
        <First>
          <div className="d-flex align-items-center justify-content-between w-100">
            <img
              className="rounded-circle me-2"
              src={user && user.photoURL}
              alt=""
            />
            <button className="w-100 rounded-pill d-flex align-items-center">
              start a post
            </button>
          </div>
        </First>
        <Second>
          <div className="row d-flex  align-items-center justify-contet-center ">
            <div className="col-3 d-flex">
              <img
                className="me-2"
                src="https://cdn-icons-png.flaticon.com/512/5225/5225392.png"
                alt=""
              />{" "}
              <span>Event</span>
            </div>
            <div className="col-3 d-flex">
              <img
                className="me-2"
                src="https://cdn-icons-png.flaticon.com/512/780/780575.png"
                alt=""
              />
              <span>Aricle</span>
            </div>
            <div className="col-3 d-flex">
              <img className="me-2" src={youImg} alt="" /> <span>Video</span>
            </div>

            <div className="col-3 d-flex">
              <img className="me-2" src={phototImg} alt="" /> <span>Photo</span>
            </div>
          </div>
        </Second>
      </StartPost>
      {loading ? (
        <div style={{position: "relative", width: "100%"}}>
          <img
            src={loadingImg}
            alt=""
            style={{
              width: "80px",
              marginTop: "-10px",
              marginBottom: "-20px",
              transform: "translateX(-50%)",
              position: "inherit",
              left: "50%",
            }}
          />
        </div>
      ) : (
        ""
      )}
      <PostArticles showPicModel={showPicModel} setvuePic={setvuePic} />
    </div>
  );
};
const StartPost = styled.div`
  margin-top: 10px;
  border: 1px solid #eee;
  border-radius: 10px;
  padding: 15px;
  background-color: white;
  @media (max-width: 767px) {
    padding-right: 15px;
    padding-left: 15px;
  }
`;
const First = styled.div`
  & img {
    width: 40px;
    height: 40px;
  }
  & button {
    border: 1px solid #eee;
    padding: 5px;
    color: #999;
  }
`;
const Second = styled.div`
  margin-top: 15px;
  font-size: 14px;
  color: gray;
  font-weight: bold;
  & img {
    width: 20px;
  }
  & span {
  }
  & div div {
    cursor: pointer;
  }
`;

export default Main;
