import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import AccountButton from "./index.js";

test("Render Account Button", () => {
  const data = {
    label: 'Test label'
  };
  const component = render(<AccountButton {...data} />);
  component.getByText(data.label);
});
