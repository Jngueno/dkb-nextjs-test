import React, { useRef, useState } from "react";
import { Movie } from "../typings";
import Thumbnail from "./Thumbnail";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";

interface Props {
  title: string;
  categorie: Movie[];
}

function Row({ title, categorie }: Props) {
  const rowRef = useRef<HTMLDivElement>(null);
  const [isMoved, setIsMoved] = useState(false);

  const handleClick = (direction: string) => {
    setIsMoved(true);
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;

      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };
  return (
    <div className="mt-10">
      <h1 className="pl-2">{title}</h1>
      <div className="group relative md:-ml-2">
        <ChevronLeftIcon
          className={`text-white absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 ${
            !isMoved && "hidden"
          }`}
          onClick={() => handleClick("left")}
        />
        <div
          className="last:pr-2 sm:space-x-2 ml-2  sm:grid md:grid-cols-2 lg:flex lg:overflow-x-scroll scrollbar-hide "
          ref={rowRef}
        >
          {categorie.map((movie) => (
            <Thumbnail movie={movie} key={movie.id} />
          ))}
        </div>
        <ChevronRightIcon
          className="text-white absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
}

export default Row;
