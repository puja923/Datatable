import React, { useEffect, useState } from "react";
import { data } from "../../datasource";

const Search = () => {
  // for taking user input
  const [user, setUser] = useState("");
  // duplicate data from data source file
  const [userData, setUserData] = useState(data);
  // create a state to display the error true: display false: hide
  const [error, setError] = useState(false);

  const [resdata, setResData] = useState([]);

  // far taking user input
  const handleChange = (e) => {
    console.log(e.target.value);
    setUser(e.target.value);

    const res = data
      .filter((item, index) => {
        if (
          item.first_name.toLowerCase().includes(user.toLowerCase()) ||
          item.last_name.toLowerCase().includes(user.toLowerCase())
        ) {
          setError(false);
          return true;
        }
        return false;
      })
      .map((item, index) => {
        return (
          <li className="list-group-item" key={index}>
            {" "}
            {item.first_name} {item.last_name}
          </li>
        );
      });

    setResData(res);
  };
  return (
    <div className="container text-center">
      <div className="row">
        <div className="justify-content-center mt-5 d-flex">
          <div className="mb-3">
            <label htmlFor="input1" className="form-label">
              Search Name
            </label>
            <input
              type="text"
              className="form-control"
              id="input1"
              placeholder="Search Name"
              value={user}
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
        <ul className="list-group">{resdata}</ul>
      </div>
    </div>
  );
};

export default Search;
