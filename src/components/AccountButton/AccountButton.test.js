import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import AccountButton from "./index.js";

test("Render Account Button", () => {
  const data = {
    accountNumber: 12345,
    accountType: "Test type",
  };
  const component = render(<AccountButton {...data} />);
  component.getByText(data.accountType);
  component.getByText('Nro: ' + data.accountNumber);
});
