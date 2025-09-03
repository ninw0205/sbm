"use server";

import { signIn, signOut } from "@/lib/auth";

export const login = async (formData: FormData) => {
  const email = formData.get("email");
  const password = formData.get("password");

  if (!email || !password) {
    alert("Email and Password is required!");
    return;
  }

  const sign = await signIn("credentials", {
    email,
    password,
    redirect: false,
  });
  console.log("🚀 sign:", sign); // error, ok, status, …
};

export const logout = async () => {
  await signOut({ redirectTo: "/" });
};
