import { useState } from "react";
import { X } from "lucide-react";
import "./ClassForm.css";

function ClassForm({ students, onClose, onSubmit, initialData = null }) {
  const [formData, setFormData] = useState({
    studentId: "",
    date: "",
    time: "",
    duration: "60",
    topic: "",
    status: "Programada",
    ...initialData,
    studentId: initialData ? String(initialData.studentId) : "",
    duration: initialData ? String(initialData.duration) : "60",
  });
  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const selectedStudent = students.find(
      (student) => student.id === Number(formData.studentId),
    );

    if (!selectedStudent) {
      return;
    }

    onSubmit({
      ...formData,
      id: initialData ? initialData.id : Date.now(),
      studentId: selectedStudent.id,
      studentName: selectedStudent.name,
      instrument: selectedStudent.instrument,
      duration: Number(formData.duration),
    });

    onClose();
  }

  return (
    <div
      className="class-form__overlay"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <section
        className="class-form"
        role="dialog"
        aria-modal="true"
        aria-labelledby="class-form-title"
      >
        <div className="class-form__header">
          <div>
            <h2 id="class-form-title">
              {initialData ? "Editar clase" : "Nueva clase"}
            </h2>
            <p>Completa los datos de la clase.</p>
          </div>

          <button
            type="button"
            className="class-form__close"
            onClick={onClose}
            aria-label="Cerrar formulario"
          >
            <X size={21} />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <label htmlFor="studentId">Estudiante</label>
          <select
            id="studentId"
            name="studentId"
            value={formData.studentId}
            onChange={handleChange}
            required
          >
            <option value="">Selecciona un estudiante</option>
            {students
              .filter((student) => student.status === "Activo")
              .map((student) => (
                <option key={student.id} value={student.id}>
                  {student.name}
                </option>
              ))}
          </select>

          <label htmlFor="date">Fecha</label>
          <input
            id="date"
            name="date"
            type="date"
            value={formData.date}
            onChange={handleChange}
            required
          />

          <label htmlFor="time">Hora</label>
          <input
            id="time"
            name="time"
            type="time"
            value={formData.time}
            onChange={handleChange}
            required
          />

          <label htmlFor="duration">Duración</label>
          <select
            id="duration"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
          >
            <option value="30">30 minutos</option>
            <option value="45">45 minutos</option>
            <option value="60">60 minutos</option>
            <option value="90">90 minutos</option>
          </select>

          <label htmlFor="topic">Tema de la clase</label>
          <input
            id="topic"
            name="topic"
            type="text"
            value={formData.topic}
            onChange={handleChange}
            placeholder="Ej. Escalas mayores"
            required
          />

          <div className="class-form__actions">
            <button
              type="button"
              className="class-form__cancel"
              onClick={onClose}
            >
              Cancelar
            </button>

            <button type="submit" className="class-form__save">
              Guardar clase
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default ClassForm;
