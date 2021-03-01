import React, { useState } from "react";

function RecordForm() {
  const [record, setRecord] = useState({
    file: undefined,
    preview: undefined,
    progress: 0,
    message: "",
    imageDetails: {
      title: "",
      url: "",
      description: "",
      fileType: "",
    },
  });

  function selectFile(event) {
    if (record.preview) {
      URL.revokeObjectURL(record.preview);
    }
    setRecord({
      ...record,
      file: event.target.files[0],
      preview: URL.createObjectURL(event.target.files[0]),
    });
  }

  return (
    <>
      <div className="row">
        <h1 className="center red-text">Record Upload</h1>
      </div>
      <div className="row">
        <div className="col s6">
          {record.preview ? (
            <div className="preview">
              <img
                id="img-preview"
                width="100%"
                className="materialboxed"
                src={record.preview}
                alt="Upload Preview"
              />
            </div>
          ) : (
            <div className="file-field input-field">
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
          <div className="input-field">
            <input id="title" type="text"></input>
            <label htmlFor="title">Record Title</label>
          </div>
          <div className="input-field">
            <textarea id="description"></textarea>
            <label htmlFor="description">Record Description</label>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="center">
          <button className="btn center">Upload</button>
        </div>
      </div>
    </>
  );
}

export default RecordForm;
