import "./StatsCard.css";

function StatsCard({ title, value, linkText, icon, variant }) {
  return (
    <article className={`stats-card stats-card_${variant}`}>
      <div className="stats-card__icon">{icon}</div>

      <p className="stats-card__title">{title}</p>

      <p className="stats-card__value">{value}</p>

      <button className="stats-card__link">{linkText} →</button>
    </article>
  );
}

export default StatsCard;
