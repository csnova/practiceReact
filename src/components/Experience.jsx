import { useState } from "react";
import "../styles/Experience.css";

function Experience({
  company,
  job,
  location,
  startDate,
  endDate,
  description,
}) {
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
