import { Link } from "react-router-dom";
import { useState } from "react";
import { UserPlus, Search, Eye, Trash2 } from "lucide-react";
import StudentForm from "../../components/StudentForm/StudentForm";
import studentsData from "../../utils/studentsData";
import "./Students.css";

function Students({ students, onAddStudent, onDeleteStudent }) {
  const [isFormOpen, setIsFormOpen] = useState(false);

  function handleAddStudent(studentData) {
    const newStudent = {
      ...studentData,
      id: Date.now(),
    };

    setStudents((previousStudents) => [...previousStudents, newStudent]);

    setIsFormOpen(false);
  }
  function handleDeleteStudent(student) {
    const confirmed = window.confirm(
      `¿Estás seguro de que quieres eliminar a ${student.name}?`,
    );

    if (confirmed) {
      onDeleteStudent(student.id);
    }
  }
  return (
    <section className="students">
      <div className="students__header">
        <div>
          <h1>Estudiantes</h1>
          <p>Gestiona la información de tus estudiantes.</p>
        </div>

        <button
          className="students__add-button"
          onClick={() => setIsFormOpen(true)}
        >
          <UserPlus size={18} />
          Agregar estudiante
        </button>
      </div>

      <div className="students__search">
        <Search size={19} />

        <input type="text" placeholder="Buscar estudiante..." />
      </div>

      <div className="students__table-container">
        <table className="students__table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Instrumento</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.name}</td>

                <td>{student.instrument}</td>

                <td>
                  <span
                    className={`students__status students__status_${student.status.toLowerCase()}`}
                  >
                    {student.status}
                  </span>
                </td>

                <td>
                  <Link
                    to={`/students/${student.id}`}
                    className="students__view-button"
                  >
                    <Eye size={17} />
                    Ver
                  </Link>
                  <button
                    type="button"
                    className="students__delete-button"
                    onClick={() => handleDeleteStudent(student)}
                    aria-label={`Eliminar a ${student.name}`}
                  >
                    <Trash2 size={17} />
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isFormOpen && (
        <StudentForm
          onClose={() => setIsFormOpen(false)}
          onSubmit={handleAddStudent}
        />
      )}
    </section>
  );
}

export default Students;
