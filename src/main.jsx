import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom/client";
import Content from "./components/Content";
import ContentForm from "./components/ContentForm";
import Education from "./components/Education";
import EducationForm from "./components/EducationForm";
import Experience from "./components/Experience";
import ExperienceForm from "./components/ExperienceForm";
import "./assets/fonts/Montserrat-VariableFont_wght.ttf";
import "./styles/index.css";

function Print() {
  //Contact Info States
  const [name, setName] = useState("Doug Rattman");
  const [email, setEmail] = useState("doug.rattman@apature.labs");
  const [phone, setPhone] = useState("555-555-5555");
  const [location, setLocation] = useState("Hurron, MI");

  // Education Info States
  const [educationList, setEducationList] = useState([
    {
      school: "Black Mesa University",
      degree: "Master in Physics",
      edLocation: "Deming, NM",
      edStartDate: "09/2020",
      edEndDate: "06/2022",
      id: "ed0",
    },
    {
      school: "Aperture Science University",
      degree: "PHD in Quantum States",
      edLocation: "Huron, MI",
      edStartDate: "09/2022",
      edEndDate: "Present",
      id: "ed1",
    },
  ]);

  //Experience Info States
  const [experienceList, setExperienceList] = useState([
    {
      company: "Aperture Science Laboratories",
      job: "Professional Tester",
      exLocation: "Huron, MI",
      exStartDate: "09/2020",
      exEndDate: "06/2022",
      description:
        "Test the Aperture Science Handheld Portal Device in puzzles in the Enrichment Center's Test Chambers. Support the sentient computer that runs the tests in all matters requested.",
      id: "ex0",
    },
    {
      company: "Aperture Science Laboratories",
      job: "Research Scientist",
      exLocation: "Huron, MI",
      exStartDate: "09/2022",
      exEndDate: "Present",
      description:
        "Create test chambers for use with the Aperture Science Handheld Portal Device. After the incident hide in facility from the sentient computer, help any test subjects escape.",
      id: "ex1",
    },
  ]);

  return (
    <React.StrictMode>
      <div className="container">
        <div className="leftBox">
          <ContentForm
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            phone={phone}
            setPhone={setPhone}
            location={location}
            setLocation={setLocation}
          />
          <EducationForm
            educationList={educationList}
            setEducationList={setEducationList}
          />
          <ExperienceForm
            experienceList={experienceList}
            setExperienceList={setExperienceList}
          />
        </div>
        <div className="rightBox">
          <div className="contentBox">
            <Content
              name={name}
              email={email}
              phone={phone}
              location={location}
            />
          </div>
          <div className="educationBox">
            <div className="label">
              <p className="educationLabel">Education</p>
            </div>
            {educationList.map((schoolInfo) => (
              <Education
                key={schoolInfo.id}
                school={schoolInfo.school}
                degree={schoolInfo.degree}
                location={schoolInfo.edLocation}
                startDate={schoolInfo.edStartDate}
                endDate={schoolInfo.edEndDate}
              />
            ))}
          </div>
          <div className="experienceBox">
            <div className="label">
              <p className="experienceLabel">Experience</p>
            </div>
            {experienceList.map((companyInfo) => (
              <Experience
                key={companyInfo.id}
                company={companyInfo.company}
                job={companyInfo.job}
                location={companyInfo.exLocation}
                startDate={companyInfo.exStartDate}
                endDate={companyInfo.exEndDate}
                description={companyInfo.description}
              />
            ))}
          </div>
        </div>
      </div>
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Print />);

// setEducationList((prevState) => {
//   //... is called spread, it takes the contents of an array and lets you use them
//   // [...array] makes a copy of the contents of the original array
//   return [...prevState, newValue]; // new value is the object of inputs you asked for from the user
// })

// const thing = { ...educationList[0], school: "FSU" }
