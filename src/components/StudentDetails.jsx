import React from "react";

function StudentDetails({ student, onBack }) {
  if (!student) return null;

  return (
    <div className="container" style={{ padding: "1rem" }}>
      <h2>Student Details</h2>
      <p><b>ID:</b> {student.id}</p>
      <p><b>Name:</b> {student.name}</p>
      <p><b>Section:</b> {student.section}</p>
      <p><b>Marks:</b> {student.marks}</p>
      <p><b>Grade:</b> {student.grade}</p>
      
      <button className="back-btn" onClick={onBack}>Back</button>
      </div>
  );
}

export default StudentDetails;