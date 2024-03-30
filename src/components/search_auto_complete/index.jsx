import React, { useEffect, useState } from "react";
import "./styles.css";

function SearchAutoComplete() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUUsers] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.users);
        setFilteredUUsers(data.users);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function filterUsersHandler(e) {
    const filteredArray = filteredUsers.filter((user) => {
      return (
        user.firstName
          .toLowerCase()
          .includes(e.target.value.toLowerCase().trim()) ||
        user.lastName
          .toLowerCase()
          .includes(e.target.value.toLowerCase().trim()) ||
        user.username
          .toLowerCase()
          .includes(e.target.value.toLowerCase().trim())
      );
    });

    setUsers(filteredArray);
  }

  return (
    <div className="search_autocomplete_container">
      <h2>Filter Users Based on Search </h2>
      <div className="search_sec">
        <input
          type="search"
          name=""
          id=""
          placeholder="Search Users"
          onChange={filterUsersHandler}
        />
      </div>

      {users.length > 0 && (
        <div className="display_sec">
          {users.map((user, index) => (
            <div className="user_card" key={index}>
              <div className="image_cont">
                <img src={user.image} alt="" />
              </div>
              <div className="content_sec">
                <h4>
                  {user.firstName} {user.lastName}
                </h4>
                <p>
                  <span>UserName:</span>
                  {user.username}
                </p>
                <p>
                  <span>DOB:</span>
                  {user.birthDate}
                </p>
                <p>
                  <span>Phone:</span>
                  {user.phone}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchAutoComplete;
