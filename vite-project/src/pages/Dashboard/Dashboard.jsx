import {
  Users,
  Calendar,
  DollarSign,
  AlertCircle,
  UserPlus,
  CreditCard,
} from "lucide-react";

import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import StatsCard from "../../components/StatsCard/StatsCard";

import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <Sidebar />

      <div className="dashboard__main">
        <Header />

        <main className="dashboard__content">
          <section className="dashboard__intro">
            <div>
              <h1>¡Bienvenida, Pau!</h1>

              <p>
                Aquí puedes organizar tus clases, hacer seguimiento a tus
                estudiantes y administrar tus pagos.
              </p>
            </div>
          </section>

          <section className="dashboard__stats">
            <StatsCard
              title="Estudiantes"
              value="11"
              linkText="Ver todos"
              icon={<Users size={20} />}
              variant="lavender"
            />

            <StatsCard
              title="Clases"
              value="24"
              linkText="Ver calendario"
              icon={<Calendar size={20} />}
              variant="mint"
            />

            <StatsCard
              title="Pagos"
              value="$1,450"
              linkText="Ver pagos"
              icon={<DollarSign size={20} />}
              variant="lavender"
            />

            <StatsCard
              title="Pendientes"
              value="3"
              linkText="Ver detalles"
              icon={<AlertCircle size={20} />}
              variant="mint"
            />
          </section>

          <section className="dashboard__section">
            <h2>Clases de la semana</h2>

            <div className="week-placeholder">
              <span>L</span>
              <span>M</span>
              <span>X</span>
              <span>J</span>
              <span>V</span>
              <span>S</span>
            </div>
          </section>

          <section className="dashboard__section">
            <h2>Próximas clases</h2>

            <div className="classes-list">
              <div className="class-row">
                <span>María</span>
                <span>Piano</span>
                <span>Hoy, 4:00 PM</span>
              </div>

              <div className="class-row">
                <span>Juan</span>
                <span>Guitarra</span>
                <span>Hoy, 5:00 PM</span>
              </div>
            </div>
          </section>

          <section className="dashboard__quick-actions">
            <h2>Acciones rápidas</h2>

            <button>
              <UserPlus size={19} />
              Agregar estudiante
            </button>

            <button>
              <Calendar size={19} />
              Programar clase
            </button>

            <button>
              <CreditCard size={19} />
              Registrar pago
            </button>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
