import { useState } from "react";
import "../styles/Education.css";

function Education({ school, degree, location, startDate, endDate }) {
  return (
    <>
      <div className="edContentBox">
        <div className="edLeftBox">
          <p className="edDates">
            {startDate} - {endDate}
          </p>
          <p className="edLocation">{location}</p>
        </div>
        <div className="edRightBox">
          <p className="edSchool">{school}</p>
          <p className="edDegree">{degree}</p>
        </div>
      </div>
    </>
  );
}

export default Education;
