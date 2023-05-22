import React from "react";
import Menu from "../components/Menu";
import { useState, useEffect } from "react";
import ReposContainer from "../components/ReposContainer";

function Portfolio() {
  const [repo, setRepo] = useState(null);
  const token = "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";
  const username = "aide-abdel";

  const getRepo = async (token, username) => {
    const apiUrl = `https://api.github.com/users/${username}/repos`;
    const headers = { Authorization: `Bearer ${token}` };
    const response = await fetch(apiUrl, { headers });

    const data = await response.json();
    console.log(data);
    setRepo(data);
  };
  useEffect(() => {
    getRepo(token, username);
  }, []);
  return (
    <div className="portfolio">
      <Menu />
      <ReposContainer repos={repo} />
    </div>
  );
}

export default Portfolio;
