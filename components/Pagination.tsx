import React, { useState } from "react";
import { IconButton, Typography } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

interface Props {
  setPage: (value: number) => void;
  getPicture: () => Promise<void>;
}

export function Pagination({ setPage, getPicture }: Props) {
  const [active, setActive] = useState(1);

  const next = async () => {
    if (active === 10) return;

    setActive(active + 1);
    setPage(active);
    await getPicture();
  };

  const prev = async () => {
    if (active === 1) return;

    setActive(active - 1);
    setPage(active);
    await getPicture();
  };

  return (
    <div className="flex items-center gap-8">
      <IconButton
        size="sm"
        variant="outlined"
        onClick={prev}
        disabled={active === 1}
      >
        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
      </IconButton>
      <Typography color="gray" className="font-normal">
        Page <strong className="text-gray-900">{active}</strong> of{" "}
        <strong className="text-gray-900">10</strong>
      </Typography>
      <IconButton
        size="sm"
        variant="outlined"
        onClick={next}
        disabled={active === 10}
      >
        <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
      </IconButton>
    </div>
  );
}
