import {useEffect} from "react";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

const Athoroty = ({children}) => {
  const {user} = useSelector((state) => state.user);
  const navicate = useNavigate();
  useEffect(() => {
    if (!user) {
      navicate("/", {replace: true});
      return;
    }
  }, [user]);
  return children;
};

export default Athoroty;
