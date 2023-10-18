"use client";
import { usePosts } from "@/store/store";
import { CardDefault } from "./Card";
import { shallow } from "zustand/shallow";
import { useEffect } from "react";
import { CustomSpinner } from "./Spinner";

export const Pictures = () => {
  const [pictures, loading, getPicturesBySearch] = usePosts(
    (state) => [state.pictures, state.loading, state.getPicturesBySearch],
    shallow
  );

  useEffect(() => {
    getPicturesBySearch();
  }, [getPicturesBySearch]);

  return (
    <ul className="pictures-container w-full">
      {!pictures.length && !loading && "Nothing found."}
      {loading ? (
        <CustomSpinner />
      ) : (
        <>
          {pictures.map((picture: Card) => (
            <CardDefault key={picture.id} picture={picture} />
          ))}
        </>
      )}
    </ul>
  );
};
