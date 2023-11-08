import { useState } from "react";
import "../styles/ExperienceTile.css";

function ExperienceTile({ experienceList, setExperienceList, index }) {
  const [edit, setEdit] = useState(false);

  const onButtonClick = () => () => {
    setEdit(!edit);
  };

  function makeExListChangeHandler(exListField) {
    return (e) => {
      const currentExListItem = experienceList[index];
      const replacementExListItem = {
        ...currentExListItem,
        [exListField]: e.target.value,
      };
      setExperienceList((prevState) => {
        const nextState = [...prevState];
        nextState[index] = replacementExListItem;
        return nextState;
      });
    };
  }

  return (
    <div>
      <div className="exTileBox">
        <div className="exTileContentBox">
          <div className="exTileLeftBox">
            <p className="exTileDates">
              {experienceList[index].exStartDate} -{" "}
              {experienceList[index].exEndDate}
            </p>
            <p className="exTileLocation">{experienceList[index].exLocation}</p>
          </div>
          <div className="exTileRightBox">
            <p className="exTileSchool">{experienceList[index].company}</p>
            <p className="exTileDegree">{experienceList[index].job}</p>
            <p className="exTileDescription">
              {experienceList[index].description}
            </p>
          </div>
        </div>
        <div className="buttonBox">
          <button className="editButton" onClick={onButtonClick()}>
            {edit ? "Close" : "Edit"}
          </button>
          <button className="deleteButton">Delete</button>
        </div>
      </div>
      {edit && (
        <div className="editMenu">
          <div className="conDropDown">
            <label>
              Company:
              <input
                type="text"
                className="exCompany"
                value={experienceList[index].company}
                onChange={makeExListChangeHandler("company")}
              />
            </label>
            <label>
              Job:
              <input
                type="text"
                className="exJob"
                value={experienceList[index].job}
                onChange={makeExListChangeHandler("job")}
              />
            </label>
            <label>
              Location:
              <input
                type="text"
                className="exLocation"
                value={experienceList[index].exLocation}
                onChange={makeExListChangeHandler("exLocation")}
              />
            </label>
            <label>
              Start Date:
              <input
                type="text"
                className="exStartDate"
                value={experienceList[index].exStartDate}
                onChange={makeExListChangeHandler("exStartDate")}
              />
            </label>
            <label>
              End Date:
              <input
                type="text"
                className="exEndDate"
                value={experienceList[index].exEndDate}
                onChange={makeExListChangeHandler("exEndDate")}
              />
            </label>
            <label className="descriptionBox">
              Description:
              <textarea
                type="text"
                className="exDescription"
                value={experienceList[index].description}
                onChange={makeExListChangeHandler("description")}
              />
            </label>
          </div>
        </div>
      )}
    </div>
  );
}

export default ExperienceTile;
