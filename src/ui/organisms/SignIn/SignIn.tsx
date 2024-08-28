import type { FormEvent, FormEventHandler } from "react";

import { useRef } from "react";
import { Button, Loading, Text } from "@ui/atoms";
import { Input } from "@ui/molecules";

interface Props
  extends Omit<FormEventHandler<HTMLFieldSetElement>, "onSubmit"> {
  onSubmit: (data: {
    username: string;
    password: string;
  }) => void | Promise<void>;
  error?: string;
  loading?: boolean;
  success?: boolean;
}

export default function SignIn({
  onSubmit,
  error,
  loading,
  success,
  ...rest
}: Props) {
  const credentials = useRef({ username: "", password: "" });
  const shouldDisable = loading ?? success;

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (
      credentials.current.username !== "" &&
      credentials.current.password !== ""
    ) {
      try {
        await onSubmit(credentials.current);
      } catch (e) {
        console.error(e);
      }
    }
  }

  function handleChange(value: string) {
    return (e: FormEvent<HTMLInputElement>) => {
      credentials.current = {
        ...credentials.current,
        [value]: e.currentTarget.value,
      };
    };
  }

  return (
    <form onSubmit={handleSubmit}>
      {error && <Text role="alert">{error}</Text>}
      {loading && <Loading role="status" />}
      {success && <Text role="alert">Success</Text>}

      <fieldset {...rest}>
        <Text as="legend" className="text-xl bold mb-3">
          Sign in
        </Text>

        <Input
          label="Username"
          name="username"
          disabled={shouldDisable}
          onChange={handleChange("username")}
        />
        <Input
          label="Password"
          name="password"
          type="password"
          disabled={shouldDisable}
          onChange={handleChange("password")}
        />

        <Button type="submit" disabled={shouldDisable}>
          Submit
        </Button>
      </fieldset>
    </form>
  );
}
