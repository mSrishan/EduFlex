import React, { Fragment, useState } from "react";
import Message from "./Message";
import Progress from "./Progress";
import axios from "axios";

const styles = {
  container: {
    padding: '2rem',
    maxWidth: '800px',
    margin: 'auto',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    backgroundColor: '#fff',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '1.5rem',
    color: '#0044cc',
    fontSize: '2rem',
    fontWeight: '600',
  },
  subheading: {
    color: '#555',
    fontSize: '1rem',
    marginBottom: '1rem',
    textAlign: 'center',
  },
  fileInputContainer: {
    position: 'relative',
    marginBottom: '1.5rem',
  },
  customFileLabel: {
    display: 'block',
    padding: '10px',
    borderRadius: '4px',
    backgroundColor: '#f8f9fa',
    cursor: 'pointer',
    border: '1px solid #ddd',
  },
  uploadBtn: {
    width: '100%',
    backgroundColor: '#0044cc',
    borderColor: '#0044cc',
    color: 'white',
    fontSize: '16px',
    padding: '10px',
    borderRadius: '5px',
    marginTop: '1.5rem',
    cursor: 'pointer',
    border: 'none',
  },
  uploadedFilePreview: {
    width: '100%',
    marginTop: '2rem',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  imgPreview: {
    width: '100%',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
};

const FileUpload = () => {
  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("Choose File");
  const [uploadedFile, setUploadedFile] = useState({});
  const [message, setMessage] = useState("");
  const [uploadPercentage, setUploadPercentage] = useState(0);

  const onChange = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post("http://localhost:5000/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (progressEvent) => {
          setUploadPercentage(
            parseInt(Math.round((progressEvent.loaded * 100) / progressEvent.total))
          );
          setTimeout(() => setUploadPercentage(0), 10000);
        },
      });

      const { fileName, filePath } = res.data;
      setUploadedFile({ fileName, filePath });
      setMessage("File Uploaded Successfully!");
    } catch (err) {
      if (err.response && err.response.status === 500) {
        setMessage("There was a problem with the server");
      } else {
        setMessage(err.response ? err.response.data.msg : "An error occurred");
      }
    }
  };

  return (
    <Fragment>
      <div style={styles.container}>
        <h1 style={styles.heading}>Upload Your Assignment Here</h1>
        <p style={styles.subheading}>File name should be your indexNo_assignmentID</p>
        <p style={styles.subheading}>When submitting one page, you can either upload an image or file.</p>

        {message && <Message msg={message} />}

        <form onSubmit={onSubmit}>
          <div style={styles.fileInputContainer}>
            <input
              type="file"
              className="custom-file-input"
              id="customFile"
              onChange={onChange}
              style={{ position: 'absolute', width: '100%', height: '100%', opacity: 0, cursor: 'pointer' }}
            />
            <label className="custom-file-label" htmlFor="customFile" style={styles.customFileLabel}>
              {filename}
            </label>
          </div>

          <Progress percentage={uploadPercentage} />

          <input
            type="submit"
            value="Upload"
            className="btn btn-primary btn-block"
            style={styles.uploadBtn}
          />
        </form>

        {uploadedFile.fileName && (
          <div className="row mt-5">
            <div className="col-md-8 m-auto">
              <h3 className="text-center">{uploadedFile.fileName}</h3>
              {/* <img
                style={styles.imgPreview}
                src={uploadedFile.filePath}
                alt="Uploaded file"
              /> */}
            </div>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default FileUpload;
