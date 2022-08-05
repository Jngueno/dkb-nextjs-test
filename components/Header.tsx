import React, { useState } from "react";
import { SearchIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useRouter } from "next/router";

function Header() {
  const [search, setSearch] = useState<string>("");
  const router = useRouter();

  const handleSearch = () => {
    if (!search) {
      alert("Please enter a movie title");
    } else {
      const path = router.pathname;
      const { query } = router;

      if (path.includes("movie")) {
        delete query.id;
        query.id = search;
        router.push({ pathname: path, query });
      } else {
        router.push({ pathname: `${path}movie/${search}` });
      }
    }
    setSearch("");
  };
  return (
    <div className="flex justify-between items-end p-4 border-b-2 border-b-slate-600">
      <Link href="/">
        <span className="cursor-pointer hover:font-medium">
          WOOKIE
          <br />
          MOVIES
        </span>
      </Link>

      <div className="flex items-center space-x-1">
        <SearchIcon
          className="h-6 rotate-90 cursor-pointer hover:text-slate-400"
          onClick={handleSearch}
        />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Enter movie title"
          className="bg-gray-200 h-5 pl-2 focus:outline-none border border-l-2 border-r-2 border-slate-600 border-l-gray-400 border-r-gray-400"
        />
      </div>
    </div>
  );
}

export default Header;
