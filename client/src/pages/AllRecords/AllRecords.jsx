import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function AllRecords() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    axios
      .get("/api/records")
      .then((response) => {
        setRecords(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          <Link to="/records/new" className="waves-effect waves-light btn">
            Add New Record
          </Link>
        </div>
      </div>
      <div className="row">
        {records.map((record) => (
          <div className="col s4" key={record._id}>
            <div className="row">
              <div className="col s12 m7">
                <div className="card">
                  <div className="card-image">
                    <img
                      alt="Sample"
                      src="https://via.placeholder.com/200x100"
                    />
                    <span className="card-title">Title</span>
                  </div>
                  <div className="card-content">
                    <p>Record Details will go here</p>
                  </div>
                  <div className="card-action">
                    <Link to={`/records/${record._id}`}>View Record</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllRecords;