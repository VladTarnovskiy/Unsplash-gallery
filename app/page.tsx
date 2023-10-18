import { CardDefault } from "@/components/Card";
import { FilterPictures } from "@/components/FilterPictures";
import { SearchPictures } from "@/components/SearchPictures";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="search-container w-full flex justify-around">
        <SearchPictures />
        <FilterPictures />
      </div>
      <div className="pics-container">
        <CardDefault />
      </div>
    </div>
  );
}
