import axios from "axios";
import React, { useState } from "react";

function RecordForm() {
  const [record, setRecord] = useState({
    file: undefined,
    display: undefined,
    progress: 0,
    message: "",
    title: "",
    url: "",
    description: "",
    fileType: "",
  });

  function handleInputChange(e) {
    const id = e.target.id;
    const value = e.target.value;

    setRecord({ ...record, [id]: value });
  }

  function selectFile(event) {
    if (record.display) {
      URL.revokeObjectURL(record.display);
    }
    setRecord({
      ...record,
      file: event.target.files[0],
      display: URL.createObjectURL(event.target.files[0]),
      fileType: event.target.files[0].type,
    });
  }

  function removePreview() {
    URL.revokeObjectURL(record.display);
    setRecord({
      ...record,
      file: undefined,
      display: undefined,
      progress: 0,
      message: "",
    });
  }

  function upload() {
    axios
      .post("/api/records", {
        file: record.file,
        title: record.title,
        description: record.description,
        record_type: record.fileType,
      })
      .then((response) => {
        console.log("Nice");
      })
      .catch((err) => {
        console.log("Not Nice");
      });
  }

  return (
    <>
      <div className="row">
        <h1 className="center red-text">Record Upload</h1>
      </div>
      <div className="row">
        <div className="col s6">
          {record.display ? (
            <div className="preview">
              <h3>Image Preview</h3>
              <div>
                <button className="btn">Rotate File</button>
                <button className="btn red" onClick={removePreview}>
                  Remove File
                </button>
              </div>
              <img
                id="img-preview"
                width="100%"
                className="materialboxed"
                src={record.display}
                alt="Upload Preview"
              />
            </div>
          ) : (
            <div className="file-field input-field">
              <h3>Upload File</h3>
              <div className="btn">
                <span>Browse</span>
                <input type="file" name="image" onChange={selectFile} />
              </div>
              <div className="file-path-wrapper">
                <input className="file-path validate" type="text" />
              </div>
            </div>
          )}
        </div>
        <div className="col s6">
          <h3>File Details</h3>
          <div className="input-field">
            <input
              id="title"
              type="text"
              value={record.title}
              onChange={handleInputChange}
            ></input>
            <label htmlFor="title">Record Title</label>
          </div>
          <div className="input-field">
            <textarea
              id="description"
              value={record.description}
              onChange={handleInputChange}
            ></textarea>
            <label htmlFor="description">Record Description</label>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="center">
          <button className="btn center" onClick={upload}>
            Upload
          </button>
        </div>
      </div>
    </>
  );
}

export default RecordForm;
