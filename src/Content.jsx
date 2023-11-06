import { useState } from "react";
import phoneLogo from "./assets/phone.svg";
import emailLogo from "./assets/email.svg";
import locationLogo from "./assets/location.svg";
import "./Content.css";

function Content() {
  const [name, setName] = useState("Doug Rattman");
  const [email, setEmail] = useState("doug.rattman@apature.labs");
  const [phone, setPhone] = useState("555-555-555");
  const [location, setLocation] = useState("Hurron, MI");
  return (
    <div className="conFullPage">
      <p className="conTitle">{name}</p>
      <div className="conContentBox">
        <div className="conEmailBox">
          <img src={emailLogo} alt="Email Icon" className="icon" />
          <p>{email}</p>
        </div>
        <div className="conPhoneBox">
          <img src={phoneLogo} alt="Phone Icon" className="icon" />
          <p>{phone}</p>
        </div>
        <div className="conLocationBox">
          <img src={locationLogo} alt="Location Icon" className="icon" />
          <p>{location}</p>
        </div>
      </div>
    </div>
  );
}

export default Content;
