import {getDownloadURL, ref, uploadBytesResumable} from "firebase/storage";
import React, {useState} from "react";
import styled from "styled-components";
import {auth, storage} from "../firebase";
import {updateProfile} from "firebase/auth";
import {useDispatch, useSelector} from "react-redux";
import {setLoading} from "../redux/UserSlice";

const ChangePic = ({handleModel}) => {
  const {user} = useSelector((state) => state.user);
  const [imageURL, setimageURL] = useState("");
  const dispatch = useDispatch();
  const ChangePhoto = () => {
    dispatch(setLoading(true));
    const storageRef = ref(storage, `personal/${imageURL.name}`);
    const uploadRef = uploadBytesResumable(storageRef, imageURL);
    uploadRef.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadRef.snapshot.ref).then((downloadURL) => {
          updateProfile(auth.currentUser, {
            photoURL: downloadURL,
          })
            .then(() => {
              console.log(user);
              dispatch(setLoading(false));
            })
            .catch((error) => {
              alert(error);
            });
        });

        // let user = auth.currentUser;
        // user
        //   .updateProfile({photoURL: imageURL})
        //   .then(() => {
        //     console.log(user);
        //   })
        //   .catch((error) => {
        //     console.log(error);
        //   });
      }
    );
    handleModel();
  };

  const handleChange = (e) => {
    const image = e.target.files[0];

    if (image === "" || image === undefined) {
      alert(`its not an image the file is ${typeof image}`);
    } else {
      setimageURL(image);
    }
  };
  return (
    <div>
      <Main>
        <Box>
          <Close>
            <span onClick={handleModel}>X</span>
          </Close>
          <input
            type="file"
            id="file"
            style={{display: "none"}}
            onChange={handleChange}
          />
          <label
            htmlFor="file"
            className="btn btn-primary d-flex justify-content-center"
            style={{width: "fit-content", margin: "auto"}}
          >
            Chose a photo
          </label>
          <Pic>
            {imageURL ? (
              <img src={URL.createObjectURL(imageURL)} alt="" />
            ) : (
              <img src={user.photoURL} alt="" />
            )}
          </Pic>
          <Change>
            <span className="btn btn-primary m-2" onClick={ChangePhoto}>
              Change
            </span>
          </Change>
        </Box>
      </Main>
    </div>
  );
};
const Main = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  top: 0;
  left: 0;
  color: black;
  animation: fade 0.3s;
  z-index: 9999;
`;
const Box = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #eee;
  border-radius: 5px;
  max-width: 550px;
  width: 100%;
  margin: 5px;
`;
const Pic = styled.div`
  text-align: center;
  margin-top: 20px;
  & img {
    border-radius: 50%;
    width: 240px;
    height: 240px;
  }
`;
const Change = styled.div`
  text-align: end;
`;
const Close = styled.div`
  text-align: end;
  & span {
    cursor: pointer;
    padding: 10px;
    font-size: 18px;
    font-weight: bold;
    color: darkslategray;
  }
`;
export default ChangePic;
