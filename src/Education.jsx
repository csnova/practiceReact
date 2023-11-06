import { useState } from "react";
import "./Education.css";

function Education() {
  const [school, setSchool] = useState("Black Mesa University");
  const [degree, setDegree] = useState("Bachelors in Physics");
  const [location, setLocation] = useState("Deming, NM");
  const [startDate, setStartDate] = useState("01/2020");
  const [endDate, setEndDate] = useState("Present");
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
