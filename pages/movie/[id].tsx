import React from "react";
import { fetchAPI, baseUrl } from "../../utils/fetchAPI";
import { Result } from "../../typings";

interface Props {
  result: Result;
}

function movieDetail({ result }: Props) {
  const { movies } = result;

  function range(rating: number) {
    const r = [];
    for (let i = 0; i < rating; i++) {
      r.push("⭐");
    }
    return r;
  }
  return (
    <>
      {movies.length == 0 ? (
        <div className="mt-4">
          <div>
            <p className="text-2xl font-bold mb-4 text-center">
              Sorry no movie correspond to you search
            </p>

            <p className="text-sm p-2 bg-white rounded-sm text-center">
              Belong is the search term, it correspond to the{" "}
              <strong>title</strong> of movie
            </p>
            <div className="flex flex-wrap p-10">
              {[
                "The Dark Knight",
                "Pulp Fiction",
                "Schindler's List",
                "Spider-Man: Into the Spider-Verse",
                "Avengers: Infinity War",
                "Raiders of the Lost Ark",
                "Batman Begins",
                "Good Will Hunting",
                "Coco",
                "Taxi Driver",
                "The Imitation Game",
                "The Lives of Others",
                "A Clockwork Orange",
                "Inglourious Basterds",
                "No Country for Old Men",
                "Room",
                "Indiana Jones and the Last Crusade",
                "Scarface",
                "The Sixth Sense",
                "The King's Speech",
              ].map((title) => (
                <p
                  key={title}
                  className="m-2 p-2 bg-slate-300 font-semibold rounded-md"
                >
                  {title}
                </p>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-5 mb-10 md:flex md:space-x-4 md:p-10 md:mb-0">
          <div className="p-2 md:w-[300px] md:h-[500px]">
            <img
              src={movies[0].backdrop || movies[0].poster}
              className="min-w-full h-80 object-cover md:max-w-[300px] md:h-[400px] block"
              alt="movie image"
            />
          </div>

          <div className="p-2 font-medium">
            <div className="mb-2 flex justify-between">
              <h2>
                {movies[0].title} ({movies[0].imdb_rating})
              </h2>
              <div>{range(movies[0].imdb_rating)}</div>
            </div>
            <p className="mb-0">
              {movies[0].released_on?.slice(0, 4)} | {movies[0].length} |{" "}
              {movies[0].director}
            </p>
            <p className="mt-0">cast: {movies[0].cast?.join(",")}</p>
            <p className="mt-2">
              Movie Description &nbsp; {movies[0].overview}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default movieDetail;

export async function getServerSideProps({ params: { id } }) {
  const result = await fetchAPI(`${baseUrl}?q=${id}`);

  return {
    props: {
      result,
    },
  };
}
