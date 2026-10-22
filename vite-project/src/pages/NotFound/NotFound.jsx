import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <section className="not-found">
      <h1>404</h1>
      <p>La página que buscas no existe.</p>

      <Link to="/dashboard">Volver al dashboard</Link>
    </section>
  );
}

export default NotFound;
