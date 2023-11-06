import { useState } from "react";
import "./Experience.css";

function Experience() {
  const [company, setCompany] = useState("Aperture Science Laboratories");
  const [job, setJob] = useState("Proffesional Tester");
  const [location, setLocation] = useState("Huron, Mi");
  const [description, setDescription] = useState(
    "Test the Aperture Science Handheld Portal Device in puzzles in the Enrichment Center's Test Chambers. Support the sentient computer that runs the tests in all matters requested."
  );
  const [startDate, setStartDate] = useState("01/2020");
  const [endDate, setEndDate] = useState("Present");
  return (
    <div className="exFullPage">
      <div className="exContentBox">
        <div className="exLeftBox">
          <p className="exDates">
            {startDate} - {endDate}
          </p>
          <p className="exLocation">{location}</p>
        </div>
        <div className="exRightBox">
          <p className="exCompany">{company}</p>
          <p className="exJob">{job}</p>
          <div className="exDescriptionBox">{description}</div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
