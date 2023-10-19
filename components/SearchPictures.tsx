"use client";
import Image from "next/image";
import { IconButton, Input } from "@material-tailwind/react";
import { FormEventHandler, useState } from "react";
import Search from "/assets/search.svg";
import { usePosts } from "@/store/store";
import { shallow } from "zustand/shallow";

export const SearchPictures = () => {
  const [search, setSearch, getPicturesBySearch] = usePosts(
    (state) => [state.search, state.setSearch, state.getPicturesBySearch],
    shallow
  );

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    await getPicturesBySearch();
  };
  return (
    <form onSubmit={handleSubmit} className="flex justify-center mr-4 mt-2">
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
      <IconButton variant="gradient" type="submit" className="ml-[-8px]">
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
