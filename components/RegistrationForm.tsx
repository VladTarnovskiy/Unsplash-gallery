"use client";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEventHandler, MouseEventHandler, useState } from "react";

export function RegistrationForm() {
  const [email, setEmail] = useState("test@test.com");
  const [password, setPassword] = useState("test1234");
  const router = useRouter();

  const handlePassword: ChangeEventHandler<HTMLInputElement> = (event) => {
    setPassword(event.target.value);
  };

  const handleEmail: ChangeEventHandler<HTMLInputElement> = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit: MouseEventHandler<HTMLButtonElement> = async (event) => {
    const res = await signIn("credentials", {
      email: email,
      password: password,
      redirect: false,
    });

    if (res && !res.error) {
      console.log(res);

      router.push("/");
    } else {
      console.log(res);
    }
  };

  return (
    <Card color="transparent" shadow={false} className="m-auto w-fit mt-12">
      <Typography variant="h4" color="blue-gray">
        Sign Up
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Nice to meet you! Enter your details.
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Email
          </Typography>
          <Input
            size="lg"
            placeholder="name@mail.com"
            onChange={handleEmail}
            value={email}
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            crossOrigin={undefined}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Password
          </Typography>
          <Input
            type="password"
            onChange={handlePassword}
            size="lg"
            value={password}
            placeholder="********"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            crossOrigin={undefined}
          />
        </div>
        <Button className="mt-6" onClick={handleSubmit} fullWidth>
          Sign Up
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Already have an account?{" "}
          <Link href="/signin" className="rounded-full underline">
            Sign In
          </Link>
        </Typography>
      </form>
    </Card>
  );
}
