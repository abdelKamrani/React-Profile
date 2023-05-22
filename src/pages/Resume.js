import React from "react";
import Menu from "../components/Menu";

function Resume() {
  return (
    <div class="resume">
      <Menu />
      <iframe
        src="/AbdelHalim.pdf"
        title="Resume"
        width="80%"
        height="100%"
      ></iframe>
    </div>
  );
}

export default Resume;
