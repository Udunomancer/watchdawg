import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import axios from "axios";

function SingleRecord() {
  const [record, setRecord] = useState({});
  const { id } = useParams();
  const history = useHistory();

  function handleDeleteClick() {
    axios
      .delete(`/api/records/${id}`)
      .then((response) => {
        console.log(response.data);
        history.push("/records");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    axios
      .get(`/api/records/${id}`)
      .then((response) => {
        setRecord(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          <h1>{record.title}</h1>
          <Link
            className="waves-effect waves-light btn"
            to={`/recrods/${id}/edit`}
          >
            Edit Record
          </Link>
          <button
            className="waves-effect waves-light btn"
            onClick={handleDeleteClick}
          >
            DELETE
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col s12">
          <h1>Media File will go here</h1>
        </div>
      </div>
      <div className="row">
        <div className="col s6">
          <p>Record Details will go here</p>
        </div>
        <div className="col s6">
          <p>Comments section will go here</p>
        </div>
      </div>
    </div>
  );
}

export default SingleRecord;
