import {arrayRemove, arrayUnion, doc, updateDoc} from "firebase/firestore";
import React from "react";
import {useSelector} from "react-redux";
import {db} from "../firebase";
import normalDislike from "../images/dislike-svgrepo-com (1).svg";
import boldDislike from "../images/dislike-svgrepo-com.svg";

const Dislike = ({docId, dislikes}) => {
  const {user} = useSelector((state) => state.user);
  const handleLike = () => {
    const likeRef = doc(db, "articles", docId);
    if (dislikes?.includes(user.uid)) {
      updateDoc(likeRef, {
        dislikes: arrayRemove(user.uid),
      })
        .then(() => {
          console.log("unlike");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      updateDoc(likeRef, {
        dislikes: arrayUnion(user.uid),
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
      {dislikes.includes(user.uid) ? (
        <img src={boldDislike} alt="" />
      ) : (
        <img src={normalDislike} alt="" />
      )}
      Like
    </li>
  );
};

export default Dislike;
