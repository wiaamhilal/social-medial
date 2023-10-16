import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  updateDoc,
} from "firebase/firestore";
import React, {useEffect, useState} from "react";
import {db} from "../firebase";
import {saveArticles, setLoading} from "../redux/UserSlice";
import {useDispatch, useSelector} from "react-redux";
import ArticlesChild from "./ArticlesChild";

const PostArticles = () => {
  const {articles, user} = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    const getRef = collection(db, "articles");
    const orderedRef = query(getRef, orderBy("actor.date", "desc"));
    onSnapshot(orderedRef, (snapshot) => {
      dispatch(
        saveArticles(
          snapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }))
        )
      );
      dispatch(setLoading(false));
    });
  }, []);
  return (
    <div>{user && articles.map((item) => <ArticlesChild item={item} />)}</div>
  );
};

export default PostArticles;
