import "../AccountButton/AccountButton.scss";

export default function Button({ label, style, onClick }) {
  return <button onClick={onClick} style={{ ...style }}>{label}</button>;
}
