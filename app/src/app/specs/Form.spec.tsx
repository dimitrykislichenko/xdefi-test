import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { Form } from "../Form";

describe("<Form />", () => {
  beforeEach(() => {
    jest.mock("elliptic-curve", () => {
      return jest.fn().mockImplementation(() => ({
        sign: () => "SIGNATURE",
      }));
    });
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should render", () => {
    const component = render(<Form />);
    expect(component).toMatchSnapshot();
  });

  it("should generate signature", () => {
    const { getByTestId } = render(<Form />);

    const privateKeyField = getByTestId("private-key");
    const messageField = getByTestId("message");
    const submitButton = getByTestId("submit");
    const signature = getByTestId("signature");

    fireEvent.change(
      privateKeyField,
      "03c1e9550e66958296d11b60f8e8e7a7ad990d07fa65d5f7652c4a6c87d4e3cc"
    );
    fireEvent.change(messageField, "Hello World");

    fireEvent.click(submitButton);

    expect(signature.textContent).toEqual("SIGNATURE");
  });
});
