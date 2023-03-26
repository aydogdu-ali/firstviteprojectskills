import React, { useEffect, useState } from "react";

const AdUpdate = ({ createSkill, setOpen }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   createSkill(title, content);
  //   setTitle("");
  //   setContent("");
  //   setAddSkill(false);

  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    createSkill(title, content);
    setTitle("");
    setContent("");
  
   
  };

  return (
    <div>
      <div>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Yetenek Ekle
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="title" className="form-label">
                      Title
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="title"
                      placeholder="Enter your title"
                      value={title || ""}
                      onChange={(e) => setTitle(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="desc" className="form-label">
                      Content
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="desc"
                      placeholder="Enter your Description"
                      value={content || ""}
                      onChange={(e) => setContent(e.target.value)}
                      required
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                  onClick={handleSubmit}
                >
                  Kaydet
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdUpdate;
