"use client";
import Image from "next/image";
import LogoImg from "@/public/unsplash.svg";
import Link from "next/link";
import { Button } from "@material-tailwind/react";
import { signOut, useSession } from "next-auth/react";

export const Header = () => {
  const session = useSession();

  return (
    <header className="flex h-16 items-center justify-between px-2">
      <div className="flex justify-start items-center">
        <div className="mb-1">
          <Link href="https://unsplash.com">
            <Image
              className="h-16 w-16"
              src={LogoImg}
              width={100}
              height={100}
              alt="Unsplash"
            />
          </Link>
        </div>
        <h1 className="text-2xl font-medium hidden sm:block">Unsplash</h1>
      </div>
      <div>
        {session?.data && (
          <Button
            color="gray"
            size="sm"
            onClick={() => signOut({ callbackUrl: "/signin" })}
          >
            Sign out
          </Button>
        )}
      </div>
    </header>
  );
};
