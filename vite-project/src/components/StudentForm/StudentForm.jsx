import { useState } from "react";
import { X } from "lucide-react";

import "./StudentForm.css";

function StudentForm({ onClose, onSubmit, initialData = null }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    instrument: "Piano",
    monthlyFee: "",
    status: "Activo",
    ...initialData,
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

    onSubmit({
      ...formData,
      monthlyFee: Number(formData.monthlyFee),
      startDate: formData.startDate || new Date().toISOString().split("T")[0],
    });
  }

  return (
    <div
      className="student-form__overlay"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <section
        className="student-form"
        role="dialog"
        aria-modal="true"
        aria-labelledby="student-form-title"
      >
        <div className="student-form__header">
          <div>
            <h2 id="student-form-title">
              {initialData ? "Editar estudiante" : "Agregar estudiante"}
            </h2>
            <p>Completa la información del estudiante.</p>
          </div>

          <button
            type="button"
            className="student-form__close"
            onClick={onClose}
            aria-label="Cerrar formulario"
          >
            <X size={21} />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Nombre completo</label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Ej. María González"
            required
          />

          <label htmlFor="email">Correo electrónico</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="maria@ejemplo.com"
            required
          />

          <label htmlFor="phone">Teléfono</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Ej. 3001234567"
            required
          />

          <label htmlFor="instrument">Instrumento</label>
          <select
            id="instrument"
            name="instrument"
            value={formData.instrument}
            onChange={handleChange}
          >
            <option value="Piano">Piano</option>
            <option value="Guitarra">Guitarra</option>
          </select>

          <label htmlFor="monthlyFee">Mensualidad (COP)</label>
          <input
            id="monthlyFee"
            name="monthlyFee"
            type="number"
            min="0"
            step="1000"
            value={formData.monthlyFee}
            onChange={handleChange}
            placeholder="Ej. 180000"
            required
          />

          <label htmlFor="status">Estado</label>
          <select
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="Activo">Activo</option>
            <option value="Inactivo">Inactivo</option>
          </select>

          <div className="student-form__actions">
            <button
              type="button"
              className="student-form__cancel"
              onClick={onClose}
            >
              Cancelar
            </button>

            <button type="submit" className="student-form__save">
              Guardar estudiante
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default StudentForm;
