import {signInWithPopup} from "firebase/auth";
import {auth, provider} from "../../firebase.js";
import {useDispatch} from "react-redux";
import {setUser} from "../redux/UserSlice.js";

export const GoogleBotton = () => {
  const dispatch = useDispatch();
  signInWithPopup(auth, provider)
    .then((payload) => {
      dispatch(setUser(payload.user));
    })
    .catch((Error) => {
      alert(Error.message);
    });
};
