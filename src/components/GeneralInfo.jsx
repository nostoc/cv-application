import { useState } from "react";
function GeneralInfo() {
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    name: " ",
    email: " ",
    phone: " ",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setEditMode(!editMode);
  }
  return (
    <div className="InfoCard">
      <h2>General Information</h2>
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
          <button className="submitButton" type="submit">Submit</button>
        </form>
      ) : (
        <div className="viewDetails">
          <p>Name: {formData.name}</p>
          <p>Email: {formData.email}</p>
          <p>Phone: {formData.phone}</p>
          <button className="editButton" onClick={() => setEditMode(true)}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default GeneralInfo;
