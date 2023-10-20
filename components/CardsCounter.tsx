"use client";
import { Input } from "@material-tailwind/react";
import { FormEventHandler, useState } from "react";
import { usePosts } from "@/store/store";
import { shallow } from "zustand/shallow";

export const CardsCounter = () => {
  const [search, setSearch, getPicturesBySearch] = usePosts(
    (state) => [state.search, state.setSearch, state.getPicturesBySearch],
    shallow
  );

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    await getPicturesBySearch();
  };
  return (
    <div>
      <Input
        label="Search"
        className="w-20"
        crossOrigin={undefined}
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
    </div>
  );
};
