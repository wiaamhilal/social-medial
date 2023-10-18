import {useState} from "react";
import LeftSide from "./LeftSide";
import Main from "./Main";
import RightSide from "./RightSide";
import {useSelector} from "react-redux";
import UserPic from "./UserPic";
const Home = () => {
  const {user} = useSelector((state) => state.user);
  const [PicModel, setPicModel] = useState(false);
  const [vuePic, setvuePic] = useState(false);
  const [userPhoto, setuserPhoto] = useState("");
  const showPicModel = (photo) => {
    if (user.photoURL === photo) {
      setPicModel(true);
    } else {
      setvuePic(true);
      setuserPhoto(photo);
    }
  };
  return (
    <div className="Home row bg-light">
      {vuePic && <UserPic setvuePic={setvuePic} userPhoto={userPhoto} />}
      <LeftSide
        showPicModel={showPicModel}
        PicModel={PicModel}
        setPicModel={setPicModel}
        setvuePic={setvuePic}
        vuePic={vuePic}
      />
      <Main showPicModel={showPicModel} vuePic={vuePic} />
      <RightSide />
    </div>
  );
};

export default Home;
