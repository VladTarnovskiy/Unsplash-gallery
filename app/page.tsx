import { FilterPictures } from "@/components/FilterPictures";
import { Pagination } from "@/components/Pagination";
import { Pictures } from "@/components/Pictures";
import { SearchPictures } from "@/components/SearchPictures";
import { SortPictures } from "@/components/SortPictures";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-16">
      <div className="search-container w-full flex justify-center  mb-4">
        <SortPictures />
        <SearchPictures />
        <FilterPictures />
      </div>
      <Pictures />
      <div className="pagination mt-4">
        <Pagination />
      </div>
    </div>
  );
}
