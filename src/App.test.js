import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  const component = render(<App />);
  component.getByText("Consulta de Saldo");
});
