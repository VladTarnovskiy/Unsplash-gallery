"use client";
import Image from "next/image";
import { getPicturesBySearch } from "@/services/getPictures";
import { IconButton, Input } from "@material-tailwind/react";
import { FormEventHandler, useState } from "react";
import Search from "/assets/search.svg";

type Props = {
  onSearch: (value: string) => void;
  getPicture: () => void;
};

export const SearchPictures = ({ onSearch, getPicture }: Props) => {
  const [search, setSearch] = useState("space");

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    onSearch(search);
    getPicture();
  };
  return (
    <form onSubmit={handleSubmit} className="flex justify-center mr-10">
      <div>
        <Input
          label="Search"
          crossOrigin={undefined}
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
      <IconButton variant="gradient" type="submit">
        <Image
          className="h-6 w-6"
          src={Search}
          width={20}
          height={20}
          alt="Search"
        />
      </IconButton>
    </form>
  );
};
