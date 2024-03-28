"use client";

import { useFormStatus } from "react-dom";
// import { Button } from './button'
import { ReactNode } from "react";

export function SubmitButton({ children }: { children: ReactNode }) {
  const { pending } = useFormStatus();
  // console.log(pending);

  return (
    <button type="submit" disabled={pending}>
      {children} {pending && "loading"}
    </button>
  );
}
