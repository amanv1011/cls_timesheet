import React from "react";
import { Tooltip } from "antd";
import "./memberCircles.css";

const MembersCircles = (props) => {

  const arrayMembers = props.members !== null ? props.members.split(",") : [];
  const fullNameArray = [];
  const nameArray = [];
  for (let i = 0; i < 4; i++) {
    if (arrayMembers[i] === undefined) {
        fullNameArray.push("-")
      nameArray.push("-");
    } else {
        fullNameArray.push(arrayMembers[i])
      let mName = arrayMembers[i].split(" ");
      let fName =
        mName[0] !== undefined ? mName[0].charAt(0).toUpperCase() : null;
      let lName =
        mName[1] !== undefined ? mName[1].charAt(0).toUpperCase() : null;
      let finalName = fName.concat(lName);
      nameArray.push(finalName);
    }
  }
  const remainingMembersNum = arrayMembers.length > 4 ? arrayMembers.length - 4 : "-";
  const remainingMembersName = [];
  if(arrayMembers.length > 4){
    for(let i = 4; i < arrayMembers.length; i++ ){
        remainingMembersName.push(arrayMembers[i])
    }
  }
  

  return (
    <>
      <div className="member-circles-container">
        <Tooltip placement="topLeft" title={fullNameArray[0]}>
          <div className="circle circle-one">{nameArray[0]}</div>
        </Tooltip>
        <Tooltip placement="topLeft" title={fullNameArray[1]}>
          <div className="circle circle-two">{nameArray[1]}</div>
        </Tooltip>
        <Tooltip placement="topLeft" title={fullNameArray[2]}>
          <div className="circle circle-three">{nameArray[2]}</div>
        </Tooltip>
        <Tooltip placement="topLeft" title={fullNameArray[3]}>
          <div className="circle circle-four">{nameArray[3]}</div>
        </Tooltip>
        <Tooltip placement="topLeft" title={remainingMembersName.toString()}>
          <div className="circle circle-five">{remainingMembersNum === "-" ? "-"  :"+" + remainingMembersNum}</div>
        </Tooltip>
      </div>
    </>
  );
};

export default MembersCircles;
