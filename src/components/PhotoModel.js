import React from "react";
import styled from "styled-components";
const PhotoModel = ({handleModel}) => {
  return (
    <Main>
      <Box>
        <Close onClick={handleModel}>X</Close>
        <input type="file" id="file" style={{display: "none"}} />
        <label htmlFor="file">Chose a photo</label>
        <Pic>
          <img src="" alt="" />
        </Pic>
        <Change>Change</Change>
      </Box>
    </Main>
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
  max-width: 400px;
  width: 100%;
  margin: 5px;
`;
const Pic = styled.div``;
const Change = styled.div``;
const Close = styled.div`
  text-align: end;
  padding: 10px 10px 0 0;
  cursor: pointer;
`;
export default PhotoModel``;
