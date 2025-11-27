import React, { useState } from "react";
import StudentList from "./components/StudentList";
import StudentForm from "./components/StudentForm";
import StudentDetails from "./components/StudentDetails";
import "./styles/styles.css";

import {
  getStudents,
  createStudent,
  updateStudent,
  deleteStudent,
} from "./services/studentService";

function App() {
  const [students, setStudents] = useState([]);
  const [mode, setMode] = useState("LIST");
  const [currentStudent, setCurrentStudent] = useState(null);

  async function handleLoadStudents() {
    try {
      const data = await getStudents();
      setStudents(data);
    } catch (err) {
      alert("Error loading students: " + err.message);
    }
  }

  function handleAddClick() {
    setCurrentStudent(null);
    setMode("ADD");
  }

  function handleEditClick(student) {
    setCurrentStudent(student);
    setMode("EDIT");
  }

  function handleViewClick(student) {
    setCurrentStudent(student);
    setMode("DETAILS");
  }

  async function handleDeleteClick(id) {
    const sure = window.confirm("Are you sure you want to delete this student?");
    if (!sure) return;
    try {
      await deleteStudent(id);
      alert("Student deleted. Click 'Load Students' to refresh.");
    } catch (err) {
      alert("Error deleting student: " + err.message);
    }
  }

  async function handleFormSubmit(studentData) {
    try {
      if (mode === "ADD") {
        await createStudent(studentData);
        alert("Student added successfully. Click 'Load Students' to refresh.");
      } else if (mode === "EDIT" && currentStudent) {
        await updateStudent(currentStudent.id, studentData);
        alert("Student updated successfully. Click 'Load Students' to refresh.");
      }
      setMode("LIST");
      setCurrentStudent(null);
    } catch (err) {
      alert("Error saving student: " + err.message);
    }
  }

  function handleCancelForm() {
    setMode("LIST");
    setCurrentStudent(null);
  }

  function handleBackFromDetails() {
    setMode("LIST");
    setCurrentStudent(null);
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Student Result Management System</h1>
      {mode === "LIST" && (
        <StudentList
          students={students}
          onLoad={handleLoadStudents}
          onAdd={handleAddClick}
          onEdit={handleEditClick}
          onDelete={handleDeleteClick}
          onView={handleViewClick}
        />
      )}
      {(mode === "ADD" || mode === "EDIT") && (
        <StudentForm
          initialData={mode === "EDIT" ? currentStudent : null}
          onSubmit={handleFormSubmit}
          onCancel={handleCancelForm}
        />
      )}
      {mode === "DETAILS" && (
        <StudentDetails
          student={currentStudent}
          onBack={handleBackFromDetails}
        />
      )}
    </div>
  );
}

export default App;