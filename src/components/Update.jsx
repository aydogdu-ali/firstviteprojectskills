import React, { useEffect, useState } from 'react'

const Update = ({ skills, editSkill }) => {
  console.log(skills);
  const { id, title: newTitle, content: newContent } = skills;

  const [title, setTitle] = useState(skills ? skills.title : "");
  const [content, setContent] = useState(skills ? skills.content : "");

  useEffect(() => {
    setTitle(newTitle);
    setContent(newContent);
  }, [newTitle, newContent]);

  const handleSubmit = (id, newTitle, newContent) => {
    editSkill(id, newTitle, newContent);
    setTitle("");
    setContent("");
  };

  return (
    <div>
      <div className="modal fade" id="edit-modal" tabIndex={-1}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Yetenek Düzenle
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
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update