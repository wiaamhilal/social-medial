import React, {useState} from "react";
import ReactPlayer from "react-player";
import {useDispatch, useSelector} from "react-redux";
import styled from "styled-components";
import {Timestamp} from "firebase/firestore";
import {SetAricles} from "../redux/UserSlice";

const PostModel = (props) => {
  const {user, articles} = useSelector((state) => state.user);
  console.log(user);
  const dispatch = useDispatch();
  const HandleChange = (e) => {
    const image = e.target.files[0];
    if (image === "" || image === undefined) {
      alert(`its not an image, the file is a ${typeof image}`);
    } else {
      setimagesrc(image);
    }
  };
  const [assetArea, setassetArea] = useState("");
  const [editorText, seteditorText] = useState("");
  const [imagesrc, setimagesrc] = useState("");
  const [VideoLink, setVideoLink] = useState("");
  const HandleChoose = (area) => {
    setVideoLink("");
    setimagesrc("");
    setassetArea(area);
  };
  const rest = (e) => {
    setVideoLink("");
    setassetArea("");
    seteditorText("");
    setimagesrc("");
    props.HandleClick(e);
  };

  const HnadlePost = (e) => {
    e.preventDefault();
    if (e.target !== e.currentTarget) {
      return;
    } else {
      const payload = {
        user: user,
        editorText: editorText,
        imagesrc: imagesrc,
        VideoLink: VideoLink,
        timeStamp: Timestamp.now(),
      };
      dispatch(SetAricles(payload));
      rest(e);
    }
  };

  console.log(articles);
  return (
    <Main>
      <Box>
        <Header>
          <span>create a post</span>
          <span className="exit" onClick={(e) => rest(e)}>
            X
          </span>
        </Header>
        <Body>
          <div>
            <img alt="" src={user && user.photoURL} />
            <span>{user.displayName}</span>
          </div>
          <textarea
            autoFocus={true}
            value={editorText}
            onChange={(e) => seteditorText(e.target.value)}
            placeholder="what do you want to talk about"
          />
        </Body>
        <ShowValue>
          {assetArea === "image" ? (
            <>
              <input
                type="file"
                name="file"
                onChange={HandleChange}
                id="file"
                style={{display: "none"}}
              />
              <label htmlFor="file" className="btn btn-primary chose">
                Chose a photo
              </label>
              <div className="show-box">
                {imagesrc && (
                  <img
                    style={{width: "100%"}}
                    alt=""
                    src={URL.createObjectURL(imagesrc)}
                  />
                )}
              </div>
            </>
          ) : (
            assetArea === "video" && (
              <>
                <input
                  autoFocus={true}
                  className="vedio-input"
                  type="text"
                  value={VideoLink}
                  onChange={(e) => setVideoLink(e.target.value)}
                  placeholder="type your video link"
                />
                <ReactPlayer url={VideoLink} width="100%" />
              </>
            )
          )}
        </ShowValue>
        <Footer>
          <div>
            <button
              className="border-0 me-2"
              onClick={() => HandleChoose("video")}
            >
              <img
                className="seond-img"
                src="https://www.logo.wine/a/logo/YouTube/YouTube-Icon-Almost-Black-Logo.wine.svg"
                alt=""
              />
            </button>
            <button className="border-0" onClick={() => HandleChoose("image")}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/4211/4211763.png"
                alt=""
              />
            </button>
          </div>
          <button
            onClick={HnadlePost}
            className="btn btn-primary rounded-pill"
            disabled={!editorText ? true : false}
          >
            Post
          </button>
        </Footer>
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
const Header = styled.div`
display: flex;
justify-content: space-between;
padding: 15px;
color: #000000ad;
font-weight: bold;
border-bottom: 1px solid #ccc;
}
& .exit{
    cursor: pointer;
    width: 20px;
}`;
const Body = styled.div`
  & div {
    padding: 20px;
  }
  & img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 15px;
  }
  & span {
    font-weight: bold;
  }
  & textarea {
    border: none;
    padding: 20px;
    width: 100%;
    height: auto;
    outline: none;
    resize: none;
  }
`;
const ShowValue = styled.div`
  & .show-box {
    max-height: 400px;
  }
  & .chose {
    margin: 10px auto;
    display: flex;
    width: fit-content;
    font-weight: bold;
  }
  & .vedio-input {
    border: 1px solid #ccc;
    padding: 5px;
    border-radius: 6px;
    text-align: center;
    outline: none;
    width: 100%;
  }
`;
const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  & img {
    width: 30px;
  }
  & .seond-img {
    width: 45px;
  }
`;
export default PostModel;
