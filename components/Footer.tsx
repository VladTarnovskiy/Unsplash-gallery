import Image from "next/image";
import GithubLogo from "@/public/github.svg";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="w-full m-auto flex justify-center pt-8">
      <div className="w-fit mr-2">Created by &copy;Vlad Tarnovskiy</div>
      <Link href="https://github.com/VladTarnovskiy">
        <Image src={GithubLogo} width={20} height={20} alt="Unsplash" />
      </Link>
    </footer>
  );
};
