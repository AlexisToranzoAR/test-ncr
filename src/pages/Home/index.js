import "./Home.scss";
import Header from "../../components/Header";
import AccountButton from "../../components/AccountButton";
import { useEffect, useState } from "react";
import { getAtmData } from "../../services/atm";
import Button from "../../components/Button";

export default function Home() {
  const [atmData, setAtmData] = useState({});
  const [atmAccountsToShow, setAccountsToShow] = useState([]);
  const [showMoreButton, setShowMoreButton] = useState(true);

  function filterAccountsWithoutType({ cuentas, tipos }) {
    return cuentas.filter((account) =>
      tipos.find((type) => type.id === account.type)
    );
  }

  function formatAccountToAddTheTypeInformation({ cuentas, tipos }) {
    return cuentas.map((account) => {
      account.type = tipos.find((type) => type.id === account.type).nombre;
      return account;
    });
  }

  function handleShowMoreOptions() {
    setAccountsToShow(atmData.cuentas.slice(5, 10));
    setShowMoreButton(false);
  }

  function handleShowInitialOptions() {
    setAccountsToShow(atmData.cuentas.slice(0, 5));
    setShowMoreButton(true);
  }

  async function getAtmDataFromAPI() {
    const response = await getAtmData();
    const { data } = response;
    data.cuentas = filterAccountsWithoutType(response.data);
    data.cuentas = formatAccountToAddTheTypeInformation(data);
    setAtmData(data);
    setAccountsToShow(data.cuentas.slice(0, 5));
  }

  useEffect(() => {
    getAtmDataFromAPI();
  }, []);

  return (
    <Header>
      <section className="homeSection">
        <h1>Consulta de Saldo</h1>
        <h2>Selecciona la Cuenta a Consultar</h2>
        <div>
          {atmAccountsToShow?.map((account) => (
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
