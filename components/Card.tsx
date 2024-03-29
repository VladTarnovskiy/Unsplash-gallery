"use client";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Chip,
} from "@material-tailwind/react";
import Link from "next/link";
import Image from "next/image";
import { HeartIcon } from "@heroicons/react/24/outline";
import { usePosts } from "@/store/store";
import { shallow } from "zustand/shallow";
import uniqid from "uniqid";

interface Props {
  picture: Card;
}

export function CardDefault({ picture }: Props) {
  const [setSearch, getPicturesBySearch] = usePosts(
    (state) => [state.setSearch, state.getPicturesBySearch],
    shallow
  );
  const date = picture.created_at.split("T")[0];

  return (
    <Card className="mt-6 w-96">
      <CardHeader color="blue-gray" className="relative h-56">
        <Link href={picture.links.download}>
          <div className="relative h-[224px] w-[352px]">
            <Image
              src={picture.urls.small}
              fill={true}
              alt="card-image"
              className="hover:scale-105 transition-all duration-300"
              style={{ objectFit: "cover" }}
              loading="lazy"
              sizes="100vh"
            />
          </div>
        </Link>
      </CardHeader>
      <div className="tags flex flex-wrap justify-start px-6 mt-1">
        {picture.tags.map((item) => (
          <div
            key={uniqid()}
            onClick={() => {
              setSearch(item.title.toLowerCase());
              getPicturesBySearch();
            }}
            className="hover:cursor-pointer hover:scale-105 transition-all"
          >
            <Chip
              variant="ghost"
              value={item.title}
              className="w-fit font text-[12px] p-1 m-1 "
            />
          </div>
        ))}
      </div>
      <CardBody className="pt-3">
        <Typography className="mb-1 text-sm flex justify-between">
          <span className="flex">
            <HeartIcon strokeWidth={2} className="h-5 w-5 mr-1" />
            <span>{picture.likes}</span>
          </span>
          <span>{date}</span>
        </Typography>
        <Typography variant="h5" color="blue-gray" className="mb-2 text-sm">
          {picture.alt_description}
        </Typography>
        <Typography className="text-sm">
          {picture.description ?? "No description"}
        </Typography>
      </CardBody>
    </Card>
  );
}
