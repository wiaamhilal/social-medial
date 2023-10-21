import {deleteDoc, doc, updateDoc} from "firebase/firestore";
import React, {useState} from "react";
import ReactPlayer from "react-player";
import {useSelector} from "react-redux";
import styled from "styled-components";
import {db} from "../firebase";
import normalLike from "../images/like-svgrepo-com (2).svg";
import boldLike from "../images/like-svgrepo-com (3).svg";
import normalDislike from "../images/dislike-svgrepo-com (1).svg";
import boldDislike from "../images/dislike-svgrepo-com.svg";
import CommentPage from "./CommentPage";

const ArticlesChild = ({item, showPicModel}) => {
  const [like, setlike] = useState(0);
  const [dislike, setdislike] = useState(0);
  const [islike, setislike] = useState(false);
  const [isdislike, setisdislike] = useState(false);
  const [comment, setcomment] = useState(false);
  const {user} = useSelector((state) => state.user);
  const handleLike = (id) => {
    const collRef = doc(db, "articles", id);
    updateDoc(collRef, {
      likes: like + (islike ? 0 : 1),
    });

    setislike(!islike);
  };
  const handleDislike = (id) => {
    const collRef = doc(db, "articles", id);
    updateDoc(collRef, {
      dislikes: dislike + (isdislike ? 0 : 1),
    });

    setisdislike(!isdislike);
  };
  const DeletePost = (id, email) => {
    if (user.email === email) {
      const collRef = doc(db, "articles", id);
      deleteDoc(collRef);
    } else {
      alert("its not your post to delete it");
    }
  };
  return (
    <Holder className="">
      {comment && (
        <CommentPage
          setcomment={setcomment}
          id={item.id}
          comments={item.comments}
          showPicModel={showPicModel}
          item={item}
          userComment={item.userComment}
        />
      )}
      <Avatar>
        {item.actor.image && (
          <img
            src={item.actor.image}
            alt=""
            onClick={() => showPicModel(item.actor.image)}
          />
        )}
        <div className="perso-info">
          <span>{item.actor.title}</span>
          <span>{item.actor.email}</span>
          <span>{item.actor.date.toDate().toLocaleDateString()}</span>
        </div>
        <div className="delete-div">
          <img
            src="https://www.svgrepo.com/show/335222/ellipsis-vertical.svg"
            alt=""
          />

          <div
            className="delete btn btn-danger"
            onClick={() => DeletePost(item.id, item.actor.email)}
          >
            Delete
          </div>
        </div>
      </Avatar>
      <TitlePost>{item.editorText}</TitlePost>
      <div>
        {item.imagesrc ? (
          <img
            className="main-img"
            src={item.imagesrc}
            alt=""
            style={{width: "100%", maxHeight: "366px"}}
          />
        ) : (
          item.videoLink && (
            <ReactPlayer
              url={item.videoLink}
              width="100%"
              style={{height: "100%"}}
            />
          )
        )}
      </div>
      <ul className="list-socil">
        <li>
          <img
            className="like-img"
            src="https://e7.pngegg.com/pngimages/747/627/png-clipart-emoticon-like-button-smiley-facebook-social-media-like-us-on-facebook-facebook-like-logo-miscellaneous-blue.png"
            alt=""
          />
          {item.likes || 0}
        </li>
        <li>
          <img
            className="dislike-img"
            src="https://uxwing.com/wp-content/themes/uxwing/download/hand-gestures/dislike-button-icon.png"
            alt=""
          />
          {item.dislikes || 0}
        </li>
        <li>{item.comments?.length || 0} comments</li>
        <li>0 share</li>
      </ul>
      <Media>
        <ul>
          <li onClick={() => handleLike(item.id)} className="like-li">
            <span className="like-icon">
              {islike ? (
                <img src={boldLike} alt="" />
              ) : (
                <img src={normalLike} alt="" />
              )}
            </span>
            Like
          </li>

          <li className="dis-li" onClick={() => handleDislike(item.id)}>
            {isdislike ? (
              <img src={boldDislike} alt="" />
            ) : (
              <img src={normalDislike} alt="" />
            )}
            <span className="dis-icon"></span>
            DisLike
          </li>
          <li onClick={() => setcomment(true)}>
            <img
              src="https://static.thenounproject.com/png/1026792-200.png"
              alt=""
            />
            Comment
          </li>
          <li>
            <img
              src="https://static.thenounproject.com/png/3325728-200.png"
              alt=""
            />
            Share
          </li>
        </ul>
      </Media>
    </Holder>
  );
};
const Holder = styled.div`
  background-color: white;
  margin-top: 10px;
  border: 1px solid #eee;
  border-radius: 10px;
  & > div {
  }
  & .main-img {
    width: 100%;
  }
  & .like-img {
    width: 40px;
  }
  & .dislike-img {
    width: 20px;
    margin-right: 10px;
  }
  & .list-socil {
    display: flex;
    align-items: center;
    margin: 0;
    padding: 3px 0;
    color: #555;
    border-bottom: 1px solid #eee;
    & li {
      margin-right: 15px;
      display: flex;
      align-items: center;
    }
  }
`;
const Avatar = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  & > img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    margin-right: 15px;
  }
  & .perso-info {
    & span:nth-child(1) {
      display: block;
      font-weight: bold;
    }
    & span:nth-child(2) {
      font-size: 14px;
      display: block;
      margin-bottom: -4px;
      color: #888;
    }
    & span:nth-child(3) {
      font-size: 14px;
      color: #888;
    }
  }
  & .delete {
    position: absolute !important;
    left: -50px !important;
    bottom: -35px;
    animation: fade 0.3s;
    display: none;
  }
  & .delete-div {
    position: relative;
    margin-left: auto;
    cursor: pointer;
    &:hover .delete {
      display: block;
    }
    & img {
      width: 35px;
    }
  }
`;
const TitlePost = styled.div`
  margin: 0 0 10px 10px;
`;
const Media = styled.div`
  & ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0;
    padding: 0;
    margin-bottom: 5px;
    color: darkslategray;
    font-size: 14px;
    padding-right: 10px;
    & li {
      cursor: pointer;
      font-weight: bold;
      transition: 0.3s;
      height: 35px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 6px;
      padding: 10px;
    }
  }
  & img {
    width: 20px;
    margin-right: 10px;
  }
`;
export default ArticlesChild;
