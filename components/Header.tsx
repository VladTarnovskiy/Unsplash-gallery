import Image from "next/image";
import Logo from "/assets/unsplash.svg";

export const Header = () => {
  return (
    <header className="flex h-16 items-center justify-start">
      <div className="flex-shrink-0">
        <Image
          className="h-16 w-16"
          src={Logo}
          width={100}
          height={100}
          alt="Unsplash"
        />
      </div>
      <h1 className="text-4xl">Unsplash API</h1>
    </header>
  );
};
