import { useEffect, useState } from "react";
import { getAtmData } from "../services/atm";

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

export default function useAtm() {
  const [atmData, setAtmData] = useState(null);
  const [atmAccountsToShow, setAccountsToShow] = useState([]);
  const [showMoreButton, setShowMoreButton] = useState(true);
  const [page, setPage] = useState(1);
  const accountsPerPage = 5;

  function updateShowMoreButton(cuentasAMostrar) {
    if (cuentasAMostrar.length < accountsPerPage) {
      setShowMoreButton(false);
    } else {
      setShowMoreButton(true);
    }
  }

  useEffect(() => {
    if (atmData) {
      const lastValue = page * accountsPerPage;
      const cuentasAMostrar = atmData.cuentas.slice(
        lastValue - accountsPerPage,
        lastValue
      );
      setAccountsToShow(cuentasAMostrar);
      updateShowMoreButton(cuentasAMostrar);
    }
  }, [page, atmData]);

  useEffect(() => {
    async function getAtmDataFromAPI() {
      const response = await getAtmData();
      const { data } = response;
      data.cuentas = filterAccountsWithoutType(response.data);
      data.cuentas = formatAccountToAddTheTypeInformation(data);
      setAtmData(data);
    }
    getAtmDataFromAPI();
  }, []);

  return {
    atmData: { atmData, cuentas: atmAccountsToShow },
    setPage,
    showMoreButton,
  };
}
