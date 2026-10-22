import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Mail,
  Phone,
  Music,
  CalendarDays,
  Pencil,
  Trash2,
} from "lucide-react";

import StudentForm from "../../components/StudentForm/StudentForm";

import "./StudentDetails.css";

function StudentDetails({ students, onUpdateStudent, onDeleteStudent }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const student = students.find((item) => item.id === Number(id));
  const [isEditing, setIsEditing] = useState(false);

  if (!student) {
    return (
      <section className="student-details">
        <h1>Estudiante no encontrado</h1>
        <Link to="/students">Volver a estudiantes</Link>
      </section>
    );
  }
  function handleDeleteStudent() {
    const confirmed = window.confirm(
      `¿Estás seguro de que quieres eliminar a ${student.name}?`,
    );

    if (confirmed) {
      onDeleteStudent(student.id);
      navigate("/students");
    }
  }

  function handleUpdate(updatedData) {
    onUpdateStudent({
      ...student,
      ...updatedData,
      id: student.id,
    });

    setIsEditing(false);
  }

  return (
    <section className="student-details">
      <Link to="/students" className="student-details__back">
        <ArrowLeft size={18} />
        Volver a estudiantes
      </Link>

      <div className="student-details__header">
        <div>
          <h1>{student.name}</h1>
          <p>Información del estudiante</p>
          <button
            type="button"
            className="student-details__edit-button"
            onClick={() => setIsEditing(true)}
          >
            <Pencil size={17} />
            Editar
          </button>
          <button
            type="button"
            className="student-details__delete-button"
            onClick={handleDeleteStudent}
          >
            <Trash2 size={17} />
            Eliminar estudiante
          </button>
        </div>

        <span
          className={`students__status students__status_${student.status.toLowerCase()}`}
        >
          {student.status}
        </span>
      </div>

      <div className="student-details__card">
        <h2>Datos personales</h2>

        <div className="student-details__item">
          <Mail size={19} />
          <div>
            <span>Correo electrónico</span>
            <p>{student.email}</p>
          </div>
        </div>

        <div className="student-details__item">
          <Phone size={19} />
          <div>
            <span>Teléfono</span>
            <p>{student.phone}</p>
          </div>
        </div>

        <div className="student-details__item">
          <Music size={19} />
          <div>
            <span>Instrumento</span>
            <p>{student.instrument}</p>
          </div>
        </div>

        <div className="student-details__item">
          <CalendarDays size={19} />
          <div>
            <span>Fecha de ingreso</span>
            <p>{student.startDate}</p>
          </div>
        </div>

        <div className="student-details__item">
          <div>
            <span>Mensualidad</span>
            <p>
              {student.monthlyFee.toLocaleString("es-CO", {
                style: "currency",
                currency: "COP",
                maximumFractionDigits: 0,
              })}
            </p>
          </div>
        </div>
      </div>
      {isEditing && (
        <StudentForm
          initialData={student}
          onClose={() => setIsEditing(false)}
          onSubmit={handleUpdate}
        />
      )}
    </section>
  );
}

export default StudentDetails;
