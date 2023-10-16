import {signInWithPopup} from "firebase/auth";
import {auth, provider} from "../firebase";
import {useDispatch, useSelector} from "react-redux";
import {setUser} from "../redux/UserSlice.js";
import logo from "../images/wiaam logo.jpg";

import styled from "styled-components";
import {useNavigate} from "react-router-dom";
const SignIn = () => {
  const {user} = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navicate = useNavigate();
  const GoogleBotton = () => {
    signInWithPopup(auth, provider)
      .then((payload) => {
        dispatch(setUser(payload.user));
      })
      .catch((Error) => {
        alert(Error.message);
      });
  };
  return (
    <Container>
      {user && navicate("/home", {replace: true})}
      <Header>
        <div>
          {" "}
          <a href="/">
            {" "}
            <img src={logo} alt="logo" />
          </a>
        </div>
        <Bottons>
          <button>join now</button>
          <button>sign in</button>
        </Bottons>
      </Header>
      <BodyPage>
        <LeftSide>
          <h1>Wellcome to your professional comunety</h1>
          <Botton onClick={GoogleBotton}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png"
              alt=""
            />{" "}
            Sign in with Google
          </Botton>
        </LeftSide>
        <img
          src="https://raw.githubusercontent.com/Kareem2002Shimes/Linkedin-Clone_Redux/fb9c7c585eb3c5ccc334a065ee88310bbeff1fd8/public/images/login-hero.svg"
          alt=""
        />
      </BodyPage>
    </Container>
  );
};
const Container = styled.div``;
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px 0 0;
  & > div a img {
    width: 100px;
    height: 60px;
    object-fit: cover;
    border-radius: 6px;
  }
`;
const Bottons = styled.div`
  display: flex;
  align-items: center;
  & :nth-child(1) {
    border: navajowhite;
    color: #777;
    border-radius: 6px;
    padding: 5px 10px;
    cursor: pointer;
    margin-right: 10px;
    font-size: 18px;
  }
  & :nth-child(2) {
    color: #0a66c2;
    border-radius: 13px;
    border-color: #0a66c2;
    padding: 5px 10px;
    border-width: 1px;
    font-size: 18px;
    cursor: pointer;
    &:hover {
      color: #0d2946;
      border-color: #0d2946;
      transition: 0.5s;
    }
  }
`;
const BodyPage = styled.div`
  display: flex;
  justify-content: space-around;
  min-height: 80vh;
  align-items: center;
  padding: 20px;
  & > img {
    max-height: 500px;
    max-width: 100%;
  }
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;
const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 26px;
  width: 549px;
  color: #0a66c2;
  line-height: 1.5;
  & h1 {
    font-weight: normal;
  }
  @media (max-width: 767px) {
    & h1 {
       font-size:20px;
       max-width:300px;
       text-align:center;
       line-height:2;
  }
`;
const Botton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 10px;
  border-radius: 17px;
  border-width: 1px;
  border-color: #ccc;
  width: 60%;
  margin-top: 25px;
  margin-bottom: 25px;
  color: #444;
  font-size: 18px;
  cursor: pointer;
  & img {
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }
  @media (max-width: 767px) {
    margin-bottom: 15px;
  }
`;

export default SignIn;
