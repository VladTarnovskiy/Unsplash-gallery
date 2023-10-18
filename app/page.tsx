"use client";
import { FilterPictures } from "@/components/FilterPictures";
import { Pagination } from "@/components/Pagination";
import { Pictures } from "@/components/Pictures";
import { SearchPictures } from "@/components/SearchPictures";
import { getPicturesBySearch } from "@/services/getPictures";
import { useEffect, useState } from "react";

export default function Home() {
  const [pictures, setPictures] = useState<Card[]>([]);
  const [search, setSearch] = useState<string>("space");
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState<number>(1);

  const getPicture = async () => {
    const pictures: SearchResponse = await getPicturesBySearch({
      search,
      page,
    });
    setPictures(pictures.results);
    setLoading(false);
    console.log(page);
  };

  // useEffect(() => {
  //   const initialSearch = "space";
  //   getPicturesBySearch({ search: initialSearch, page })
  //     .then((res: SearchResponse) => setPictures(res.results))
  //     .finally(() => setLoading(false));
  // }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="search-container w-full flex justify-center  mb-4">
        <SearchPictures onSearch={setSearch} getPicture={getPicture} />
        <FilterPictures />
      </div>
      {loading ? <h3>Loading...</h3> : <Pictures pictures={pictures} />}
      <div className="pagination mt-4">
        <Pagination setPage={setPage} getPicture={getPicture} />
      </div>
    </div>
  );
}
