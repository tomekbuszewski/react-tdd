import type { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLInputElement> {
  type?: string;
}

export default function Input({ type = "text", ...rest }: Props) {
  return <input type={type} {...rest} />;
}
