"use client";
import { SignInForm } from "@/components/SignInForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in page",
};

export default function Signin() {
  return <SignInForm />;
}
