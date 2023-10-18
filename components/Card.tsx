"use client";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Link from "next/link";
import Image from "next/image";

interface Props {
  picture: Card;
}

export function CardDefault({ picture }: Props) {
  return (
    <Card className="mt-6 w-96">
      <CardHeader color="blue-gray" className="relative h-56">
        <Image src={picture.urls.small} fill={true} alt="card-image" />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2 text-sm">
          {picture.alt_description}
        </Typography>
        <Typography className="mb-2 text-sm">
          {picture.description ?? "No description"}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0 mt-auto">
        <Button size="sm" variant="gradient">
          <Link href={picture.links.download}>Downloads</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
