import {arrayRemove, arrayUnion, doc, updateDoc} from "firebase/firestore";
import React from "react";
import {useSelector} from "react-redux";
import {db} from "../firebase";
import normalLike from "../images/like-svgrepo-com (2).svg";
import boldLike from "../images/like-svgrepo-com (3).svg";

const Like = ({docId, likes}) => {
  const {user} = useSelector((state) => state.user);
  const handleLike = () => {
    const likeRef = doc(db, "articles", docId);
    if (likes?.includes(user.uid)) {
      updateDoc(likeRef, {
        likes: arrayRemove(user.uid),
      })
        .then(() => {
          console.log("unlike");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      updateDoc(likeRef, {
        likes: arrayUnion(user.uid),
      })
        .then(() => {
          console.log("like");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <li onClick={handleLike}>
      {likes.includes(user.uid) ? (
        <img src={boldLike} alt="" />
      ) : (
        <img src={normalLike} alt="" />
      )}
      Like
    </li>
  );
};

export default Like;
