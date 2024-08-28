import type { HTMLProps } from "react";

import { Input as BaseInput, Text } from "@ui/atoms";

interface Props extends HTMLProps<HTMLInputElement> {
  label?: string;
  labelClassName?: string;
}

export default function Input({
  labelClassName,
  label,
  className,
  ...rest
}: Props) {
  const labelClassNames = [labelClassName, "block"];
  const inputClassNames = [className, "border", "rounded", "p-2"];

  if (!label) {
    console.warn(
      "[MOLECULES/INPUT] Input component should have a label. Consider using an atom instead.",
    );
  }

  return (
    <div className="mb-2">
      {label ? (
        <Text
          as="label"
          className={labelClassNames.join(" ")}
          htmlFor={rest.name}
        >
          {label}
        </Text>
      ) : null}

      <BaseInput
        className={inputClassNames.join(" ")}
        id={rest.id ?? rest.name}
        {...rest}
      />
    </div>
  );
}
