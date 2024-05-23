import { useState } from "react";
function GeneralInfo() {
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    name: " ",
    email: " ",
    phone: " ",
    profilePic: null,
  });
  const [profilePicPreview, setProfilePicPreview] = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleFileChange(e) {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, profilePic: file });
      setProfilePicPreview(URL.createObjectURL(file));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    setEditMode(!editMode);
  }
  return (
    <div className="InfoCard">
      <h2>Personal Information</h2>
      {editMode ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name: </label>
            <input
              className="inputFields"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Email: </label>
            <input
              className="inputFields"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Phone: </label>
            <input
              className="inputFields"
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div>
            <lable>Profile Picture :</lable>
            <input type="file" name="profilePic" onChange={handleFileChange} />
          </div>
          {profilePicPreview && (
            <div>
              <img
                src={profilePicPreview}
                alt="Profile Picture Preview"
                style={{ width: "100px", height: "100px", objectFit: "cover" }}
              />
            </div>
          )}
          <button className="submitButton" type="submit">
            Submit
          </button>
        </form>
      ) : (
        <div className="viewDetails">
          <p>
            Name: <br /> {formData.name}
          </p>
          <p>
            Email: <br />
            {formData.email}
          </p>
          <p>
            Phone: <br />
            {formData.phone}
          </p>
          <p>
            Profile Picture: <br />{" "}
            {profilePicPreview && (
              <div>
                <img
                  src={profilePicPreview}
                  alt="Profile"
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                  }}
                />
              </div>
            )}
          </p>
          <button className="editButton" onClick={() => setEditMode(true)}>
            Edit
          </button>
        </div>
      )}
    </div>
  );
}

export default GeneralInfo;
