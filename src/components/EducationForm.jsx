import { useState } from "react";
import EducationTile from "./EducationTile";
import arrow from "../assets/down.svg";
import "../styles/EducationForm.css";

function EducationForm({ educationList, setEducationList }) {
  const [showMore, setShowMore] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [edIndex, setEdIndex] = useState(2);

  const onButtonClick = () => () => {
    setShowMore(!showMore);
  };

  const onAddButtonClick = () => () => {
    setEducationList((prevState) => {
      const newValue = {
        school: "School Name",
        degree: "Degree",
        edLocation: "School Location",
        edStartDate: "Start Date",
        edEndDate: "End Date",
        id: `ed${edIndex}`,
      };
      console.table(educationList);
      console.table(newValue);
      setEdIndex(edIndex + 1);
      return [...prevState, newValue];
    });
    setShowAdd(!showAdd);
  };

  return (
    <div className="conBubble">
      <div className="conTitleBar">
        <p className="conTitle">Education Information</p>
        <button className="dropDownButton" onClick={onButtonClick()}>
          <img
            src={arrow}
            alt="Open DropDown Menu"
            className="dropDown"
            style={{ transform: `rotate(${showMore ? "180deg" : "0deg"})` }}
          />
        </button>
      </div>
      {showMore && (
        <div className="conDropDown">
          {educationList.map((schoolInfo, index, educationList) => (
            <EducationTile
              index={index}
              educationList={educationList}
              setEducationList={setEducationList}
              key={schoolInfo.id}
            />
          ))}
          <button className="addButton" onClick={onAddButtonClick()}>
            Add
          </button>
        </div>
      )}
    </div>
  );
}

export default EducationForm;
