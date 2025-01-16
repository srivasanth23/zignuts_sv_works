import React from "react";

function EditModal({ currentUser, setCurrentUser, onClose, onSave, isModalOpened }) {
  if (!currentUser) {
    return null; // Early return if currentUser is undefined
  }

  return (
    <div
      className={`modal ${isModalOpened ? "show d-block" : "d-none"}`}
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit User</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label className="form-label">
                  Name <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={currentUser.name}
                  onChange={(e) =>
                    setCurrentUser({ ...currentUser, name: e.target.value })
                  }
                />
              </div>
              <div className="mb-3">
                <label className="form-label">
                  Email <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="email"
                  className="form-control"
                  value={currentUser.email}
                  onChange={(e) =>
                    setCurrentUser({ ...currentUser, email: e.target.value })
                  }
                />
              </div>
              <div className="mb-3">
                <label className="form-label">
                  Phone <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={currentUser.phone}
                  onChange={(e) =>
                    setCurrentUser({ ...currentUser, phone: e.target.value })
                  }
                />
              </div>
              <div className="mb-3">
                <label className="form-label">
                  Website <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={currentUser.website}
                  onChange={(e) =>
                    setCurrentUser({ ...currentUser, website: e.target.value })
                  }
                />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                onSave(currentUser); // Pass the currentUser to the save function
                onClose(); // Close the modal after save
              }}
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditModal;
