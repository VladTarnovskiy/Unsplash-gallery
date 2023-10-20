import { FilterPictures } from "@/components/FilterPictures";
import { Pagination } from "@/components/Pagination";
import { Pictures } from "@/components/Pictures";
import { SearchPictures } from "@/components/SearchPictures";
import { SortPicturesManual } from "@/components/SortPicturesManual";
import { SortPicturesWithApi } from "@/components/SortPicturesWithApi";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-1 md:p-10">
      <div className="search-container w-full flex flex-wrap justify-center mb-6 items-center">
        <SortPicturesManual />
        <SortPicturesWithApi />
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
