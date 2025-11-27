# Student_Result_manaagement_Project
The Student Result Management System (SRMS) is a web-based application designed to manage, store, and display student academic records efficiently. The system allows administrators/teachers to add student details, enter marks, update results, and generate performance reports. Students can view their results in a clean dashboard. 
<img width="742" height="390" alt="image" src="https://github.com/user-attachments/assets/388dfd00-dc2a-443b-a100-32c605154916" />
React components

StudentList.jsx, StudentForm.jsx, StudentDetails.jsx, App.jsx.

useState for managing all data

App.jsx uses useState for students, mode, currentStudent.

StudentForm.jsx uses useState for each input field.

No useEffect anywhere (as specified). 

Guide - Student Result Manageme…

JSON Server as backend

db.json + npm run server + port 3001.

Fetch API for CRUD

All CRUD functions (getStudents, createStudent, updateStudent, deleteStudent) use fetch in studentService.js.

CRUD operations flow 

Guide - Student Result Manageme…

Create (Add) → Add Student button → StudentForm → createStudent → alert → user clicks Load Students.

Read (View List) → Load Students button → getStudents → StudentList shows table.

Update (Edit) → Edit button → StudentForm pre-filled → updateStudent → alert → manual reload.

Delete → Delete button → confirm → deleteStudent → alert → manual reload.

View Details → View button → StudentDetails shows all data.

All actions via manual buttons, not auto

After add/edit/delete, we only show alert, and do not auto reload list.

User must click “Load Students” again — exactly what the guide says.
