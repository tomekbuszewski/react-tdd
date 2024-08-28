import { useState } from "react";
import { API_URL } from "@config/consts.ts";
import { SignIn as View } from "@ui/organisms";

function useSignIn() {
  const [state, setState] = useState<
    undefined | "loading" | "error" | "success"
  >();

  async function signIn({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) {
    setState("loading");

    try {
      const request = await fetch(`${API_URL}/auth/sign-in`, {
        method: "POST",
        body: JSON.stringify({ username, password }),
      });

      if (!request.ok) {
        setState("error");
        return;
      }

      setState("success");
    } catch {
      setState("error");
    }
  }

  return { state, signIn };
}

export default function SignIn() {
  const { state, signIn } = useSignIn();

  return (
    <View
      onSubmit={signIn}
      error={state === "error" ? "Error logging in" : undefined}
      loading={state === "loading"}
      success={state === "success"}
    />
  );
}
