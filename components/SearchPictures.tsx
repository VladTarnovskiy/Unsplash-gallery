"use client";
import Image from "next/image";
import { getPicturesBySearch } from "@/services/getPictures";
import { IconButton, Input } from "@material-tailwind/react";
import { FormEventHandler, useState } from "react";
import Search from "/assets/search.svg";

export const SearchPictures = () => {
  const [search, setSearch] = useState("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    const posts = await getPicturesBySearch(search);
    console.log(posts);
    // onSearch(posts);
  };
  return (
    <form onSubmit={handleSubmit} className="flex justify-center">
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
