"use server";
import { FieldValues } from "react-hook-form";

export const loginUser = async (userInfo: FieldValues) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKED_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userInfo),
    cache: "no-store",
  });
  const userInfoRes = await res.json();

  return userInfoRes;
};
