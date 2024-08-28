import { render } from "@testing-library/react";

import Input from "./Input";

describe("UI / molecule / Input", () => {
  const LABEL = "Label";
  const TEST_CLS = "test-class";

  it("should render properly", () => {
    const { container } = render(<Input label={LABEL} />);

    expect(container.querySelector("input")).toBeInTheDocument();
    expect(container.querySelector("label")).toBeInTheDocument();
  });

  it("should allow passing properties to input", () => {
    const { container } = render(<Input label={LABEL} className={TEST_CLS} />);

    expect(container.querySelector("input")).toHaveClass(TEST_CLS);
  });

  it("should allow passing properties to label", () => {
    const { container } = render(
      <Input label={LABEL} labelClassName={TEST_CLS} />,
    );

    expect(container.querySelector("label")).toHaveClass(TEST_CLS);
  });
});
