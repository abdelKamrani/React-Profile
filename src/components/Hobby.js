import React, { useState } from "react";

function Hobby({ value, name, img, quote, text }) {
  const [back, setBack] = useState(["back", "hobby-flipped"]);
  function flipHobby() {
    setBack(["delete-back", "hobby"]);
  }
  return (
    <>
      <div className={back[1]}>
        <div className="hobby-title">{name}</div>
        <div className="hobby-image-container">
          <img className="hobby-image" src={img} alt="my hobby" />
        </div>

        <div className="hobby-quote"> {quote}</div>
        <div className="hobby-text"> {text}</div>
      </div>
      <div className={back[0]} onMouseEnter={flipHobby}>
        {value}
      </div>
    </>
  );
}

export default Hobby;
