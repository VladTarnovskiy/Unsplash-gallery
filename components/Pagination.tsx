"use client";
import { IconButton, Typography } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { usePosts } from "@/store/store";
import { shallow } from "zustand/shallow";

export function Pagination() {
  const [page, setPage, getPicturesBySearch, totalPages] = usePosts(
    (state) => [
      state.page,
      state.setPage,
      state.getPicturesBySearch,
      state.totalPages,
    ],
    shallow
  );

  const next = async () => {
    if (page === 10) return;

    setPage(page + 1);
    await getPicturesBySearch();
  };

  const prev = async () => {
    if (page === 1) return;

    setPage(page - 1);
    await getPicturesBySearch();
  };

  return (
    <div className="flex items-center gap-8">
      <IconButton
        size="sm"
        variant="outlined"
        onClick={prev}
        disabled={page === 1}
      >
        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
      </IconButton>
      <Typography color="gray" className="font-normal">
        Page <strong className="text-gray-900">{page}</strong> of{" "}
        <strong className="text-gray-900">{totalPages}</strong>
      </Typography>
      <IconButton
        size="sm"
        variant="outlined"
        onClick={next}
        disabled={page === totalPages}
      >
        <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
      </IconButton>
    </div>
  );
}
