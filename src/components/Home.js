import LeftSide from "./LeftSide";
import Main from "./Main";
import RightSide from "./RightSide";
const Home = () => {
  return (
    <div className="Home row bg-light">
      <LeftSide />
      <Main />
      <RightSide />
    </div>
  );
};

export default Home;
