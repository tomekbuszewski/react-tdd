import { API_URL } from "@config/consts.ts";
import { http, HttpResponse } from "msw";

const signIn = http.post(`${API_URL}/auth/sign-in`, async ({ request }) => {
  const { password } = (await request.json()) as { password: string };

  if (password.includes("wrong")) {
    return new HttpResponse("Sign in failed", { status: 401 });
  }

  return new HttpResponse("Sign in successful", { status: 200 });
});

export const signin = [signIn];
