import {Timestamp, doc, updateDoc} from "firebase/firestore";
import React, {useState} from "react";
import styled from "styled-components";
import {auth, db} from "../firebase";
import {useSelector} from "react-redux";

const CommentPage = ({setcomment, id, comments, showPicModel}) => {
  const {user} = useSelector((state) => state.user);

  const [commentFeild, setcommetFeild] = useState();
  const handleComment = (id) => {
    const collRef = doc(db, "articles", id);
    updateDoc(collRef, {
      comments: [...comments, commentFeild],
    });
    setcommetFeild("");
  };
  return (
    <Main>
      <Box>
        <Close>
          <span onClick={() => setcomment(false)}>X</span>
        </Close>
        {comments?.map((commentChild) => (
          // <Text>
          //   {" "}
          //   <Avatar>
          //     {item.actor.image && (
          //       <img
          //         src={item.actor.image}
          //         alt=""
          //         onClick={() => showPicModel(item.actor.image)}
          //       />
          //     )}
          //     <div className="perso-info">
          //       <span>{item.actor.title}</span>
          //       <span>{item.actor.date.toDate().toLocaleDateString()}</span>
          //     </div>
          //     <span className="comment">{commentChild}</span>
          //   </Avatar>
          // </Text>
          <Text>
            {" "}
            <Avatar>
              {user.photoURL && (
                <img
                  src={user.photoURL}
                  alt=""
                  onClick={() => showPicModel(user.photoURL)}
                />
              )}
              <div className="perso-info">
                <span>{user.displayName}</span>
                <span>{Timestamp.now().toDate().toLocaleDateString()}</span>
              </div>
              <span className="comment">{commentChild}</span>
            </Avatar>
          </Text>
        ))}
        {/* <Text>{comments}</Text> */}
        <input
          placeholder="Type your comment"
          type="text"
          autoFocus={true}
          onChange={(e) => setcommetFeild(e.target.value)}
          value={commentFeild}
        />
        <Post>
          <button
            className="btn btn-danger rounded-pill"
            onClick={() => setcomment(false)}
          >
            Exit
          </button>
          <button
            className="btn btn-primary rounded-pill"
            disabled={!commentFeild}
            onClick={() => handleComment(id)}
          >
            Post
          </button>{" "}
        </Post>
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
  & input {
    width: -webkit-fill-available;
    border: 1px solid #ccc;
    padding: 5px 15px;
    margin-bottom: 15px;
    outline: none;
    border-radius: 6px;
  }
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #eee;
  border-radius: 10px;
  max-width: 550px;
  width: 95%;
  max-height: 400px;
  overflow: auto;
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
const Text = styled.div`
  font-weight: bold;
  color: darkslategray;
  padding: 10px;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  border-radius: 6px;
  margin-bottom: 10px;
  background-color: #eee;
`;
const Post = styled.div`
  text-align: end;
  margin: 0 10px 7px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Avatar = styled.div`
  display: flex;
  align-items: center;
  & > img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 6px;
  }
  & .perso-info {
    & span:nth-child(1) {
      display: block;
      font-weight: bold;
      font-size: 13px;
      width: 89.5px;
    }
    & span:nth-child(2) {
      font-size: 12px;
      display: block;
      margin-bottom: -4px;
      color: #888;
    }
    & span:nth-child(3) {
      font-size: 14px;
      color: #888;
    }
  }
  & .comment {
    margin-left: 15px;
    font-size: 13px;
    color: black;
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
export default CommentPage;
