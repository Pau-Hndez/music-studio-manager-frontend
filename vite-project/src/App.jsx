import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import Students from "./pages/Students/Students";
import StudentDetails from "./pages/StudentDetails/StudentDetails";
import Classes from "./pages/Classes/Classes";
import Payments from "./pages/Payments/Payments";
import NotFound from "./pages/NotFound/NotFound";
import studentsData from "./utils/studentsData";
import classesData from "./utils/classesData";

function App() {
  const [students, setStudents] = useState(studentsData);
  const [classes, setClasses] = useState(classesData);

  function handleAddClass(classData) {
    setClasses((previousClasses) => [...previousClasses, classData]);
  }

  function handleUpdateClass(updatedClass) {
    setClasses((previousClasses) =>
      previousClasses.map((lesson) =>
        lesson.id === updatedClass.id ? updatedClass : lesson,
      ),
    );
  }

  function handleDeleteClass(classId) {
    setClasses((previousClasses) =>
      previousClasses.filter((lesson) => lesson.id !== classId),
    );
  }

  function handleAddStudent(studentData) {
    const newStudent = {
      ...studentData,
      id: Date.now(),
    };

    setStudents((previousStudents) => [...previousStudents, newStudent]);
  }
  function handleUpdateStudent(updatedStudent) {
    setStudents((previousStudents) =>
      previousStudents.map((student) =>
        student.id === updatedStudent.id ? updatedStudent : student,
      ),
    );
  }

  function handleDeleteStudent(studentId) {
    setStudents((previousStudents) =>
      previousStudents.filter((student) => student.id !== studentId),
    );
  }

  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route path="/dashboard" element={<Dashboard />} />

      <Route
        path="/students"
        element={
          <Students
            students={students}
            onAddStudent={handleAddStudent}
            onDeleteStudent={handleDeleteStudent}
          />
        }
      />

      <Route
        path="/students/:id"
        element={
          <StudentDetails
            students={students}
            onUpdateStudent={handleUpdateStudent}
            onDeleteStudent={handleDeleteStudent}
          />
        }
      />

      <Route
        path="/classes"
        element={
          <Classes
            classes={classes}
            students={students}
            onAddClass={handleAddClass}
            onUpdateClass={handleUpdateClass}
            onDeleteClass={handleDeleteClass}
          />
        }
      />

      <Route path="/payments" element={<Payments />} />

      <Route path="/" element={<Navigate to="/dashboard" replace />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
