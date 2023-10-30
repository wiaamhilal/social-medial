import {createSlice} from "@reduxjs/toolkit";
import {db, storage} from "../firebase";
import {getDownloadURL, ref, uploadBytesResumable} from "firebase/storage";
import {addDoc, collection} from "firebase/firestore";

export const UserSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    articles: [],
    loading: false,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    SetAricles: (state, action) => {
      state.loading = true;
      if (action.payload.imagesrc) {
        const collStorage = ref(
          storage,
          `images/${action.payload.imagesrc.name}`
        );
        const uploadStorage = uploadBytesResumable(
          collStorage,
          action.payload.imagesrc
        );
        uploadStorage.on(
          "state_changed",
          (snapshot) => {
            // const progress = Math.round(
            //   (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            // );
            // console.log(progress);
          },
          (error) => {
            alert(error);
          },
          () => {
            getDownloadURL(uploadStorage.snapshot.ref).then((downloadURL) => {
              const collRef = collection(db, "articles");
              addDoc(collRef, {
                actor: {
                  image: action.payload.user.photoURL,
                  title: action.payload.user.displayName,
                  email: action.payload.user.email,
                  date: action.payload.timeStamp,
                  id: action.payload.user.uid,
                },
                comments: [],
                userComment: [],
                likes: [],
                dislikes: [],
                imagesrc: downloadURL,
                VideoLink: action.payload.VideoLink,
                editorText: action.payload.editorText,
              });
            });
          }
        );
      } else {
        const collRef = collection(db, "articles");
        addDoc(collRef, {
          actor: {
            image: action.payload.user.photoURL,
            title: action.payload.user.displayName,
            email: action.payload.user.email,
            date: action.payload.timeStamp,
            id: action.payload.user.uid,
          },
          comments: [],
          userComment: [],
          likes: [],
          dislikes: [],
          imagesrc: action.payload.imagesrc,
          videoLink: action.payload.VideoLink,
          editorText: action.payload.editorText,
        });
      }
    },
    saveArticles: (state, action) => {
      state.articles = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});
export const {setUser, SetAricles, saveArticles, setLoading, setbtnMemu} =
  UserSlice.actions;
export default UserSlice.reducer;
