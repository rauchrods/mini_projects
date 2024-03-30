import React, { useEffect, useState } from "react";
import "./styles.css";

function GitHubProfileFinder() {
  const [userName, setUserNAme] = useState("rauchrods");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchGithubUserData() {
    setLoading(true);
    const response = await fetch(`https://api.github.com/users/${userName}`);
    const data = await response.json();
    
    setUserData(data);
    setLoading(false);

    // console.log(data);
  }

  function handleSubmit() {
    fetchGithubUserData();
  }

  useEffect(() => {
    fetchGithubUserData();
  }, []);

  return (
    <div className="github_profile_container">
      <h2>Github Username</h2>
      <div className="search_wrapper">
        <input
          type="text"
          placeholder="Github Username"
          value={userName}
          onChange={(e) => setUserNAme(e.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
      {userData && (
        <div className="display_wrapper">
          <div className="img_wrapper">
            <img src={userData.avatar_url} alt="" />
          </div>
          <div>
            <a href={userData.html_url} target="_blank">
              <h2>{userData.name}</h2>
            </a>
          </div>
          <div className="follow_sec">
            <div>
              <span>Followers:</span> {userData.followers}
            </div>
            <div>
              <span>Following:</span> {userData.following}
            </div>
          </div>
          <div className="repo_sec">
            <p>
              <span>Public Repos:</span> {userData.public_repos}
            </p>
          </div>

          <p>
            <span>User Joined at:</span>{" "}
            {new Date(userData.created_at).toDateString()}
          </p>
          <p>
            <span>Last Updated at:</span>{" "}
            {new Date(userData.updated_at).toDateString()}
          </p>
        </div>
      )}

      {loading && <div className="loader"></div>}
    </div>
  );
}

export default GitHubProfileFinder;
