import { useState } from "react";
function EducationalExperience() {
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    schoolName: " ",
    titleOfStudy: " ",
    dateOfStudy: " ",
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
      <h2>Educational Experience</h2>
      {editMode ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label>School Name: </label>
            <input
              className="inputFields"
              type="text"
              name="schoolName"
              value={formData.schoolName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Title of Study: </label>
            <input
              className="inputFields"
              type="text"
              name="titleOfStudy"
              value={formData.titleOfStudy}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Date of Study: </label>
            <input
              className="inputFields"
              type="date"
              name="dateOfStudy"
              value={formData.dateOfStudy}
              onChange={handleChange}
            />
          </div>
          <button className="submitButton" type="submit">Submit</button>
        </form>
      ) : (
        <div className="viewDetails">
          <p>School Name: {formData.schoolName}</p>
          <p>Title of Study: {formData.titleOfStudy}</p>
          <p>Date of Study: {formData.dateOfStudy}</p>
          <button className="editButton" onClick={() => setEditMode(true)}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default EducationalExperience;
