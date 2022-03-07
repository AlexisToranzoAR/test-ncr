import "./AccountButton.scss";

export default function AccountButton({ accountNumber, accountType }) {
  return (
    <button>
      <div>{accountType}</div>
      <div>Nro: {accountNumber}</div>
    </button>
  );
}
