import React from "react";
import logo from "../images/wiaam logo.jpg";
import styled from "styled-components";
import network from "../images/network-backup-svgrepo-com (1).svg";
import messaging from "../images/messaging-user-svgrepo-com.svg";
import notifications from "../images/notifications-svgrepo-com.svg";
import {useDispatch, useSelector} from "react-redux";
import {auth} from "../firebase";
import {setUser} from "../redux/UserSlice";

const Header = () => {
  const dispatch = useDispatch();
  const SignOut = () => {
    auth
      .signOut()
      .then(() => {
        dispatch(setUser(null));
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const {user} = useSelector((state) => state.user);
  return (
    <div className="Header" style={{height: "62.9px"}}>
      <Container className="container">
        <SearchBox>
          <img alt="" src={logo} />
          <form>
            <img
              src="https://static.thenounproject.com/png/1157129-200.png"
              alt=""
            />
            <input type="serch" placeholder="Search" />
          </form>
        </SearchBox>
        <Navbar>
          <li className="border-bottom border-dark pb-md-2 text-dark">
            <img
              src="https://www.svgrepo.com/show/22031/home-icon-silhouette.svg"
              alt=""
            />
            <span></span>Home
          </li>
          <li>
            <img alt="" src={network} />
            <span>Network</span>
          </li>
          <li>
            <img alt="" src={messaging} style={{width: "35px"}} />
            <span style={{transform: "translatey(-6px)"}}>Messaging</span>
          </li>
          <li>
            <img alt="" style={{width: "25px"}} src={notifications} />
            <span>Notifications</span>
          </li>
          <li onClick={SignOut} className="sign-out">
            {user ? (
              <img className="out-pic" src={user.photoURL} alt="" />
            ) : (
              <img
                src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                alt=""
                className="out-pic"
              />
            )}
            Sign out
          </li>
        </Navbar>
      </Container>
    </div>
  );
};
const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;
const SearchBox = styled.div`
  display: flex;
  align-items: center;
  & > img {
    width: 100px;
    height: 60px;
    object-fit: cover;
    border-radius: 6px;
    margin-bottom: 21px;
    @media (max-width: 767px) {
      margin-left: -33px;
    }
  }
  & form img {
    width: 20px;
    object-fit: cover;
    height: 20px;
  }
  & input {
    border: none;
    padding: 4px 10px;
    background-color: #eee;
    outline: none;
    border-radius: 6px;
  }
  & form {
    background-color: #eee;
    border-radius: 6px;
    padding-left: 5px;
    margin-bottom: 20px;
    @media (max-width: 767px) {
      width: auto;
    }
  }
`;
const Navbar = styled.ul`
  & li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-right: 10px;
    padding-left: 10px;
    color: #888;
    cursor: pointer;
  }
  & .sign-out {
    color: black;
  }
  & li img {
    width: 23px;
  }
  & li .out-pic {
    border-radius: 50%;
    width: 27px;
    height: 27px;
  }
  display: flex;
  align-items: center;
  & span {
    display: block;
  }
  @media (max-width: 767px) {
    width: 100%;
    height: 62px;
    background-color: white;
    position: fixed;
    left: 0;
    bottom: 0;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    & li {
      padding-right: 5px;
      padding-left: 5px;
      font-size: 13px;
      margin-right: 5px;
    }
  }
`;
export default Header;
