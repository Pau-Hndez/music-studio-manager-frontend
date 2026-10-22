import { ChevronDown } from "lucide-react";

import "./Header.css";

function Header() {
  return (
    <header className="dashboard-header">
      <div className="dashboard-header__user">
        <div className="dashboard-header__avatar">P</div>

        <span>Hola, Pau</span>

        <ChevronDown size={18} />
      </div>
    </header>
  );
}

export default Header;
