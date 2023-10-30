import React from "react";
import styled from "styled-components";

const RightSide = () => {
  return (
    <Holder className="col-sm-2">
      <Head>
        <span>Add to your feed</span>
        <span className="second">!</span>
      </Head>
      <Body>
        <span className="one">#</span>{" "}
        <div>
          <span className="tow">#Weaam</span>
          <span className="three">Follow</span>
        </div>
      </Body>
      <Body>
        <span className="one">#</span>{" "}
        <div>
          <span className="tow">#Weaam</span>
          <span className="three">Follow</span>
        </div>
      </Body>
      <Vue>View all recommendatios{"->"}</Vue>
      <Add>
        <img
          src="https://cdn.oneesports.gg/cdn-data/2022/06/LeagueofLegends_ArcaneJinxPowderWallpaperEnemyMusicVideo.jpg"
          alt=""
        />
      </Add>
    </Holder>
  );
};
const Holder = styled.div`
  margin-top: 10px;
  padding: 10px;
  border: 1px solid #eee;
  background-color: white;
  height: fit-content;
  border-radius: 10px;
  @media (max-width: 767px) {
    padding-right: 15px;
    padding-left: 15px;
  }
`;
const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
  margin-bottom: 5px;
  & .second {
    color: white;
    background-color: black;
    height: 15px;
    width: 15px;
    border-radius: 3px;
    /* text-align: center; */
    align-items: center;
    display: flex;
    justify-content: center;
    font-size: 12px;
  }
`;
const Body = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  & div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 10px;
    font-size: 14px;
  }
  & .one{
    font-size: 30px;
    font-weight: bold;
    border: 3px solid #ccc;
    border-radius: 50%;
    height: 35px;
    width: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
  } 
  & .three{
    border: 2px solid #ccc;
    border-radius: 10px;
    padding: 2px 5px;
  }
}
`;
const Vue = styled.div`
  font-size: 14px;
  color: #0000ff82;
  margin-bottom: 10px;
`;
const Add = styled.div`
  & img {
    max-width: 100%;
    border-radius: 10px;
  }
`;
export default RightSide;
