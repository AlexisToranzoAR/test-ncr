import "./Home.scss";
import Header from "../../components/Header";
import AccountButton from "../../components/AccountButton";
import Button from "../../components/Button";
import useAtm from "../../hooks/useAtm";

export default function Home() {
  const { atmData, setPage, showMoreButton } = useAtm();

  function handleShowMoreOptions() {
    setPage((prevState) => prevState + 1);
  }

  function handleShowInitialOptions() {
    setPage((prevState) => {
      if (prevState > 1) {
        return prevState - 1;
      }
      return prevState;
    });
  }

  return (
    <Header>
      <section className="homeSection">
        <h1>Consulta de Saldo</h1>
        <h2>Selecciona la Cuenta a Consultar</h2>
        <div>
          {atmData.cuentas?.map((account) => (
            <AccountButton
              key={account.number}
              accountNumber={account.number}
              accountType={account.type}
            />
          ))}
          {showMoreButton && (
            <Button onClick={handleShowMoreOptions} label="Mas opciones»" />
          )}
        </div>
      </section>
      <div style={{ position: "absolute", bottom: 20, width: 1004 }}>
        <hr />
        <Button
          label="Salir"
          onClick={handleShowInitialOptions}
          style={{ width: 100, padding: 20, marginTop: 20 }}
        />
      </div>
    </Header>
  );
}
