import React from "react";

function StudentList({ students, onLoad, onAdd, onEdit, onDelete, onView }) {
  return (
    <div className="container">
    <div style={{ padding: "1rem" }}>
      <h2>Student List</h2>
      <div style={{ marginBottom: "1rem" }}>
        <button onClick={onLoad} style={{ marginRight: "0.5rem" }}>
          Load Students
        </button>
        <button onClick={onAdd}>Add Student</button>
      </div>
      {students.length === 0 ? (
        <p>No students loaded. Click "Load Students".</p>
      ) : (
        <table border="1" cellPadding="8" cellSpacing="0">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Section</th>
              <th>Marks</th>
              <th>Grade</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((s) => (
              <tr key={s.id}>
                <td>{s.id}</td>
                <td>{s.name}</td>
                <td>{s.section}</td>
                <td>{s.marks}</td>
                <td>{s.grade}</td>
                <td>
                  
                  <button className="edit-btn" onClick={() => onEdit(s)}>Edit</button>  
                  <button className="delete-btn" onClick={() => onDelete(s.id)}>Delete</button>       
                  <button className="view-btn" onClick={() => onView(s)}>View</button>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div></div>
  );
}

export default StudentList;