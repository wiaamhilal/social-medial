import React from "react";

const UserInfo = ({img}) => {
  console.log(img);
  return (
    <div>
      <img src={img} alt="" />
    </div>
  );
};

export default UserInfo;
