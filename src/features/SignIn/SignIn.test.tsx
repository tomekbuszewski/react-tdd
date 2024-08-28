import { act, fireEvent, render, waitFor } from "@testing-library/react";

import SignIn from "./SignIn";

function setup() {
  const renderResult = render(<SignIn />);
  const usernameInput = renderResult.getByLabelText("Username");
  const passwordInput = renderResult.getByLabelText("Password");
  const submitButton = renderResult.getByText("Submit");

  return {
    ...renderResult,
    usernameInput,
    passwordInput,
    submitButton,
  };
}

describe("Features / Sign In", () => {
  const VALID_USERNAME = "username";
  const VALID_PASSWORD = "password";

  it("should display the success message on success", async () => {
    const { getByText, usernameInput, passwordInput, submitButton } = setup();

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    act(() => {
      fireEvent.change(usernameInput, { target: { value: VALID_USERNAME } });
      fireEvent.change(passwordInput, { target: { value: VALID_PASSWORD } });
      submitButton.click();
    });

    await waitFor(() => {
      expect(getByText("Success")).toBeInTheDocument();
    });
  });

  it("should display the error message on error", async () => {
    const { getByText, usernameInput, passwordInput, submitButton } = setup();

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    act(() => {
      fireEvent.change(usernameInput, { target: { value: VALID_USERNAME } });
      fireEvent.change(passwordInput, { target: { value: "wrong-password" } });
      submitButton.click();
    });

    await waitFor(() => {
      expect(getByText("Error logging in")).toBeInTheDocument();
    });
  });
});
