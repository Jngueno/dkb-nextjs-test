import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Movie } from "../typings";

interface Props {
  movie: Movie;
}
function Thumbnail({ movie }: Props) {
  return (
    <Link href={`/movie/${movie.title}`} passHref>
      <div className="m-2 h-60 min-w-[180px] cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 md:h-48 md:min-w-[260px]">
        <Image
          layout="fill"
          src={movie.backdrop || movie.poster}
          className="rounded-sm object-cover md:rounded"
        />
      </div>
    </Link>
  );
}

export default Thumbnail;
