import { useState } from "react";
import "../styles/EducationTile.css";

function EducationTile({ educationList, setEducationList, index }) {
  const [edit, setEdit] = useState(false);

  const onButtonClick = () => () => {
    setEdit(!edit);
  };

  function makeEdListChangeHandler(edListField) {
    return (e) => {
      const currentEdListItem = educationList[index];
      const replacementEdListItem = {
        ...currentEdListItem,
        [edListField]: e.target.value,
      };
      setEducationList((prevState) => {
        const nextState = [...prevState];
        nextState[index] = replacementEdListItem;
        return nextState;
      });
    };
  }

  return (
    <div>
      <div className="edTileBox">
        <div className="edTileContentBox">
          <div className="edTileLeftBox">
            <p className="edTileDates">
              {educationList[index].edStartDate} -{" "}
              {educationList[index].edEndDate}
            </p>
            <p className="edTileLocation">{educationList[index].edLocation}</p>
          </div>
          <div className="edTileRightBox">
            <p className="edTileSchool">{educationList[index].school}</p>
            <p className="edTileDegree">{educationList[index].degree}</p>
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
              School:
              <input
                type="text"
                className="edSchool"
                value={educationList[index].school}
                onChange={makeEdListChangeHandler("school")}
              />
            </label>
            <label>
              Degree:
              <input
                type="text"
                className="edDegree"
                value={educationList[index].degree}
                onChange={makeEdListChangeHandler("degree")}
              />
            </label>
            <label>
              Location:
              <input
                type="text"
                className="edLocation"
                value={educationList[index].edLocation}
                onChange={makeEdListChangeHandler("edLocation")}
              />
            </label>
            <label>
              Start Date:
              <input
                type="text"
                className="edStartDate"
                value={educationList[index].edStartDate}
                onChange={makeEdListChangeHandler("edStartDate")}
              />
            </label>
            <label>
              End Date:
              <input
                type="text"
                className="edEndDate"
                value={educationList[index].edEndDate}
                onChange={makeEdListChangeHandler("edEndDate")}
              />
            </label>
          </div>
        </div>
      )}
    </div>
  );
}

export default EducationTile;
