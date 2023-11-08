import { useState } from "react";
import ExperienceTile from "./ExperienceTile";
import arrow from "../assets/down.svg";
import "../styles/EducationForm.css";

function ExperienceForm({ experienceList, setExperienceList }) {
  const [showMore, setShowMore] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [exIndex, setExIndex] = useState(2);

  const onButtonClick = () => () => {
    setShowMore(!showMore);
  };

  const onAddButtonClick = () => () => {
    setShowAdd(!showAdd);
    setExperienceList((prevState) => {
      const newExperience = {
        school: "School",
        degree: "Degree",
        edLocation: "Location",
        edStartDate: "Start Date",
        edEndDate: "End Date",
        id: `ex${exIndex}`,
      };
      setExIndex(exIndex + 1);
      return [...prevState, newExperience];
    });
  };

  return (
    <div className="conBubble">
      <div className="conTitleBar">
        <p className="conTitle">Experience Information</p>
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
          {experienceList.map((companyInfo, index, experienceList) => (
            <ExperienceTile
              index={index}
              experienceList={experienceList}
              setExperienceList={setExperienceList}
              key={companyInfo.id}
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

export default ExperienceForm;
