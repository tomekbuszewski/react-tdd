import { fireEvent, render } from "@testing-library/react";

import SignIn from "./SignIn";

describe("UI / organism / SignIn", () => {
  const USERNAME_LABEL = "Username";
  const PASSWORD_LABEL = "Password";

  const defaultSubmitFn = vitest.fn();

  it("should render username and password inputs", () => {
    const { getByLabelText } = render(<SignIn onSubmit={defaultSubmitFn} />);

    expect(getByLabelText(USERNAME_LABEL)).toBeInTheDocument();
    expect(getByLabelText(PASSWORD_LABEL)).toBeInTheDocument();
  });

  it("should render submit button", () => {
    const { container } = render(<SignIn onSubmit={defaultSubmitFn} />);

    expect(container.querySelector("button")).toBeInTheDocument();
  });

  it("should emit username and password on submit", () => {
    const USERNAME = "user";
    const PASSWORD = "pass";
    const handleSubmit = vitest.fn();

    const { getByLabelText, getByText } = render(
      <SignIn onSubmit={handleSubmit} />,
    );

    fireEvent.change(getByLabelText(USERNAME_LABEL), {
      target: { value: USERNAME },
    });
    fireEvent.change(getByLabelText(PASSWORD_LABEL), {
      target: { value: PASSWORD },
    });

    getByText("Submit").click();

    expect(handleSubmit).toHaveBeenCalledWith({
      username: USERNAME,
      password: PASSWORD,
    });
  });

  it("should render error message if provided", () => {
    const ERROR_MESSAGE = "Error message";
    const { getByRole } = render(
      <SignIn onSubmit={defaultSubmitFn} error={ERROR_MESSAGE} />,
    );

    const alert = getByRole("alert");

    expect(alert).toBeInTheDocument();
    expect(alert.innerText).toBe(ERROR_MESSAGE);
  });

  it("should render loading message if provided", () => {
    const { getByRole } = render(<SignIn onSubmit={defaultSubmitFn} loading />);

    const alert = getByRole("status");

    expect(alert).toBeInTheDocument();
    expect(alert.innerText).toBe("Loading...");
  });

  it("should render success message if provided", () => {
    const { getByRole } = render(<SignIn onSubmit={defaultSubmitFn} success />);

    const alert = getByRole("alert");
    expect(alert).toBeInTheDocument();
    expect(alert.innerText).toBe("Success");
  });
});
