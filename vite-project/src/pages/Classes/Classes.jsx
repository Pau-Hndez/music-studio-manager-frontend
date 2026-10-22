import { useState } from "react";
import { Trash2 } from "lucide-react";

import classesData from "../../utils/classesData";
import ClassForm from "../../components/ClassForm/ClassForm";
import "./Classes.css";

function Classes({
  classes,
  students,
  onAddClass,
  onUpdateClass,
  onDeleteClass,
}) {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingClass, setEditingClass] = useState(null);
  const [searchStudent, setSearchStudent] = useState("");
  const [searchDate, setSearchDate] = useState("");
  const [searchStatus, setSearchStatus] = useState("Todas");

  function handleAddNewClass(classData) {
    onAddClass(classData);
    setIsFormOpen(false);
  }

  function handleEditClass(classData) {
    onUpdateClass(classData);
    setEditingClass(null);
  }
  function handleDeleteLesson(lesson) {
    const confirmed = window.confirm(
      `¿Seguro que quieres eliminar la clase de ${lesson.studentName}?`,
    );

    if (confirmed) {
      onDeleteClass(lesson.id);
    }
  }
  const filteredClasses = classes.filter((lesson) => {
    const matchesName = lesson.studentName
      .toLowerCase()
      .includes(searchStudent.toLowerCase().trim());

    const matchesDate = searchDate === "" || lesson.date === searchDate;

    const matchesStatus =
      searchStatus === "Todas" || lesson.status === searchStatus;

    return matchesName && matchesDate && matchesStatus;
  });

  return (
    <section className="classes">
      <div className="classes__header">
        <div>
          <h1>Clases</h1>
          <p>Organiza y consulta tus clases de música.</p>
        </div>

        <button
          type="button"
          className="classes__add-button"
          onClick={() => setIsFormOpen(true)}
        >
          + Nueva clase
        </button>
      </div>

      <div className="classes__filters">
        <div className="classes__search">
          <input
            type="text"
            placeholder="Buscar por nombre del estudiante..."
            value={searchStudent}
            onChange={(event) => setSearchStudent(event.target.value)}
            aria-label="Buscar clases por nombre del estudiante"
          />
        </div>

        <div className="classes__filter">
          <label htmlFor="class-date">Fecha</label>
          <input
            id="class-date"
            type="date"
            value={searchDate}
            onChange={(event) => setSearchDate(event.target.value)}
          />
        </div>

        <div className="classes__filter">
          <label htmlFor="class-status">Estado</label>
          <select
            id="class-status"
            value={searchStatus}
            onChange={(event) => setSearchStatus(event.target.value)}
          >
            <option value="Todas">Todas</option>
            <option value="Programada">Programada</option>
            <option value="Completada">Completada</option>
          </select>
        </div>
      </div>

      <div className="classes__table-container">
        <table className="classes__table">
          <thead>
            <tr>
              <th>Acciones</th>
              <th>Estudiante</th>
              <th>Instrumento</th>
              <th>Fecha</th>
              <th>Hora</th>
              <th>Duración</th>
              <th>Tema</th>
              <th>Estado</th>
            </tr>
          </thead>

          <tbody>
            {filteredClasses.map((lesson) => (
              <tr key={lesson.id}>
                <td>{lesson.studentName}</td>
                <td>{lesson.instrument}</td>
                <td>{lesson.date}</td>
                <td>{lesson.time}</td>
                <td>{lesson.duration} min</td>
                <td>{lesson.topic}</td>
                <td>
                  <span
                    className={`classes__status classes__status--${lesson.status.toLowerCase()}`}
                  >
                    {lesson.status}
                  </span>
                </td>
                <td className="classes__actions">
                  <button
                    type="button"
                    className="classes__edit-button"
                    onClick={() => setEditingClass(lesson)}
                  >
                    Editar
                  </button>

                  <button
                    type="button"
                    className="classes__delete-button"
                    onClick={() => handleDeleteLesson(lesson)}
                    aria-label={`Eliminar clase de ${lesson.studentName}`}
                  >
                    <Trash2 size={16} />
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isFormOpen && (
        <ClassForm
          students={students}
          onClose={() => setIsFormOpen(false)}
          onSubmit={handleAddNewClass}
        />
      )}

      {editingClass && (
        <ClassForm
          key={editingClass.id}
          students={students}
          initialData={editingClass}
          onClose={() => setEditingClass(null)}
          onSubmit={handleEditClass}
        />
      )}
    </section>
  );
}

export default Classes;
