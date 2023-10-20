"use client";
import { RegistrationForm } from "@/components/RegistrationForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Sign up page",
};

export default function Signup() {
  return <RegistrationForm />;
}
