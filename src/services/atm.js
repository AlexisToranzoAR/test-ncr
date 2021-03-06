import Axios from "../config/axios";

const test = {
  tipos: [
    {
      id: 1,
      codigo: "CA",
      moneda: "$",
      nombre: "Caja de ahorro en pesos",
    },
    {
      id: 2,
      codigo: "CA",
      moneda: "U$S",
      nombre: "Caja de ahorro en dolares",
    },
    {
      id: 3,
      codigo: "CC",
      moneda: "$",
      nombre: "Cuenta corriente en pesos",
    },
    {
      id: 4,
      codigo: "CC",
      moneda: "U$S",
      nombre: "Cuenta corriente en dolares",
    },
  ],
  cuentas: [
    {
      type: 1,
      saldo: 1500,
      number: "872378326701",
    },
    {
      type: 2,
      saldo: 150,
      number: "872378326702",
    },
    {
      type: 1,
      saldo: 0,
      number: "872378326703",
    },
    {
      type: 3,
      saldo: 20000,
      number: "872378326704",
    },
    {
      type: 8,
      saldo: 0,
      number: "872378326705",
    },
    {
      type: 4,
      saldo: -100.42,
      number: "872378326706",
    },
    {
      type: 2,
      saldo: 1013.21,
      number: "872378326707",
    },
    {
      type: 1,
      saldo: 1349.6,
      number: "872378326708",
    },
    {
      type: 1,
      saldo: 1500,
      number: "872378326701",
    },
    {
      type: 2,
      saldo: 150,
      number: "872378326702",
    },
    {
      type: 1,
      saldo: 0,
      number: "872378326703",
    },
    {
      type: 3,
      saldo: 20000,
      number: "872378326704",
    },
    {
      type: 8,
      saldo: 0,
      number: "872378326705",
    },
    {
      type: 4,
      saldo: -100.42,
      number: "872378326706",
    },
    {
      type: 2,
      saldo: 1013.21,
      number: "872378326707",
    },
    {
      type: 1,
      saldo: 1349.6,
      number: "872378326708",
    },
    {
      type: 1,
      saldo: 1500,
      number: "872378326701",
    },
    {
      type: 2,
      saldo: 150,
      number: "872378326702",
    },
    {
      type: 1,
      saldo: 0,
      number: "872378326703",
    },
    {
      type: 3,
      saldo: 20000,
      number: "872378326704",
    },
    {
      type: 8,
      saldo: 0,
      number: "872378326705",
    },
    {
      type: 4,
      saldo: -100.42,
      number: "872378326706",
    },
    {
      type: 2,
      saldo: 1013.21,
      number: "872378326707",
    },
    {
      type: 1,
      saldo: 1349.6,
      number: "872378326708",
    },
  ],
};

export const getAtmData = async () => {
  return { data: test };
};
