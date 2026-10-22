import {
  Home,
  Users,
  Calendar,
  CreditCard,
  BarChart3,
  LogOut,
} from "lucide-react";

import { NavLink } from "react-router-dom";

import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar__logo">
        <div className="sidebar__logo-icon">♫</div>

        <span>
          Music Studio
          <br />
          Manager
        </span>
      </div>

      <nav className="sidebar__nav">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `sidebar__link ${isActive ? "sidebar__link_active" : ""}`
          }
        >
          <Home size={20} />
          <span>Inicio</span>
        </NavLink>

        <NavLink
          to="/students"
          className={({ isActive }) =>
            `sidebar__link ${isActive ? "sidebar__link_active" : ""}`
          }
        >
          <Users size={20} />
          <span>Estudiantes</span>
        </NavLink>

        <NavLink
          to="/classes"
          className={({ isActive }) =>
            `sidebar__link ${isActive ? "sidebar__link_active" : ""}`
          }
        >
          <Calendar size={20} />
          <span>Clases</span>
        </NavLink>

        <NavLink
          to="/payments"
          className={({ isActive }) =>
            `sidebar__link ${isActive ? "sidebar__link_active" : ""}`
          }
        >
          <CreditCard size={20} />
          <span>Pagos</span>
        </NavLink>

        <a href="#" className="sidebar__link">
          <Calendar size={20} />
          <span>Calendario</span>
        </a>

        <a href="#" className="sidebar__link">
          <BarChart3 size={20} />
          <span>Reportes</span>
        </a>
      </nav>

      <button className="sidebar__logout">
        <LogOut size={20} />
        <span>Cerrar sesión</span>
      </button>
    </aside>
  );
}

export default Sidebar;
