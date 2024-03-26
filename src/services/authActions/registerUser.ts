"use server";
import { FieldValues } from "react-hook-form";

export const registerUser = async (userInfo: FieldValues) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKED_URL}/users`, {
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
