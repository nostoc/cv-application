import { useState } from "react";
function PracticalExperience() {
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "",
    positionTitle: "",
    mainResponsibilities: "",
    dateFrom: "",
    dateUntil: "",
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
      <h2>Practical Experience</h2>
      {editMode ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Company Name: </label>
            <input
              className="inputFields"
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Position Title: </label>
            <input
              className="inputFields"
              type="text"
              name="positionTitle"
              value={formData.positionTitle}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Main Responsibilities: </label>
            <input
              className="inputFields"
              type="text"
              name="mainResponsibilities"
              value={formData.mainResponsibilities}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Date From: </label>
            <input
              className="inputFields"
              type="date"
              name="dateFrom"
              value={formData.dateFrom}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Date Until: </label>
            <input
              className="inputFields"
              type="date"
              name="dateUntil"
              value={formData.dateUntil}
              onChange={handleChange}
            />
          </div>
          <button className="submitButton" type="submit">
            Submit
          </button>
        </form>
      ) : (
        <div className="viewDetails">
          <p>Company Name: {formData.companyName}</p>
          <p>Position Title: {formData.positionTitle}</p>
          <p>Main Responsibilities: {formData.mainResponsibilities}</p>
          <p>Date From: {formData.dateFrom}</p>
          <p>Date Until: {formData.dateUntil}</p>
          <button className="editButton" onClick={() => setEditMode(true)}>
            Edit
          </button>
        </div>
      )}
    </div>
  );
}

export default PracticalExperience;
