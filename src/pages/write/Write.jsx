import React from "react";
import "./write.css";

export const Write = () => {
  return (
    <div className="write">
      <img
        src="https://res.cloudinary.com/dq49b0ddj/image/upload/v1674736582/1391415_omxl4n.jpg"
        alt=""
        className="writeImg"
      />
      <form action="" className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className=" writeIcon fas fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            type="text"
            placeholder="Tell your story..."></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  );
};
