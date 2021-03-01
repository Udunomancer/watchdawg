import React, { useState } from "react";
import axios from "axios";

function RecordForm() {
    
    const [record, setRecord] = useState("");
    const [loading, setLoading] = useState(false);

    function handleFileChange(e) {
        setRecord(e.target.files[0]);
    }

    async function handleFileSubmit() {
        const formData = new FormData();
        formData.append("file", record);
        formData.append("upload_preset", process.env.CLOUDINARY_PRESET);
        console.log(record);
        console.log(formData);
    }

    return (
        <>
            <h1 className="center red-text">Image Upload</h1>
            <div className="file-field input-field">
                <div className="btn">
                    <span>Browse</span>
                    <input type="file" name="image" onChange={handleFileChange} />
                </div>
                <div className="file-path-wrapper">
                    <input className="file-path validate" type="text" />
                </div>
            </div>
            <div className="center">
                <button onClick={handleFileSubmit} className="btn center">
                    Upload
                </button>
            </div>
        </>
    )
}

export default RecordForm;