import React, { useState } from "react";

function StudentForm({ initialData, onSubmit, onCancel }) {
  const [name, setName] = useState(initialData?.name || "");
  const [section, setSection] = useState(initialData?.section || "");
  const [marks, setMarks] = useState(initialData?.marks ?? "");
  const [grade, setGrade] = useState(initialData?.grade || "");

  function handleSubmit(e) {
    e.preventDefault();
    const student = {
      name,
      section,
      marks: Number(marks),
      grade,
    };
    onSubmit(student);
  }

  return (
    <div style={{ padding: "1rem" }}>
      <h2>{initialData ? "Edit Student" : "Add Student"}</h2>
      <div className="container">
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" required value={name}
            onChange={(e) => setName(e.target.value)} />
        </label>
        <br /><br />
        <label>
          Section:
          <input type="text" required value={section}
            onChange={(e) => setSection(e.target.value)} />
        </label>
        <br /><br />
        <label>
          Marks:
          <input type="number" required value={marks}
            onChange={(e) => setMarks(e.target.value)} />
        </label>
        <br /><br />
        <label>
          Grade:
          <input type="text" required value={grade}
            onChange={(e) => setGrade(e.target.value)} />
        </label>
        <br /><br />
        <button type="submit" style={{ marginRight: "10px" }}>Save</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </form></div>
    </div>
  );
}

export default StudentForm;