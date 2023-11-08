import { useState } from "react";
import arrow from "../assets/down.svg";
import "../styles/ContentForm.css";

function ContentForm({
  name,
  setName,
  email,
  setEmail,
  phone,
  setPhone,
  location,
  setLocation,
}) {
  const [showMore, setShowMore] = useState(false);

  const onButtonClick = () => () => {
    setShowMore(!showMore);
  };

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePhoneChange(e) {
    setPhone(e.target.value);
  }

  function handleLocationChange(e) {
    setLocation(e.target.value);
  }

  return (
    <div className="conBubble">
      <div className="conTitleBar">
        <p className="conTitle">Personal Details</p>
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
          <label>
            Name:
            <input
              type="text"
              className="conName"
              value={name}
              onChange={handleNameChange}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              className="conEmail"
              value={email}
              onChange={handleEmailChange}
            />
          </label>
          <label>
            Phone Number:
            <input
              type="tel"
              className="conPhone"
              value={phone}
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              onChange={handlePhoneChange}
            />
          </label>
          <label>
            Location:
            <input
              type="text"
              className="conLocation"
              value={location}
              onChange={handleLocationChange}
            />
          </label>
        </div>
      )}
    </div>
  );
}

export default ContentForm;
