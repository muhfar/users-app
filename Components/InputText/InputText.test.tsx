import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import InputText from "./InputText";

jest.mock("./InputText");

test("should snap InputText correctly", () => {
  const renderUI = (): React.JSX.Element => (
    <InputText
      id="1"
      defaultValue="test"
      isEdited={false}
      label="test"
      onChange={() => {}}
      required
    />
  );

  const result = render(renderUI());
});
