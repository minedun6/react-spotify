import { SearchIcon, XIcon } from "@heroicons/react/outline";
import { useState } from "react";

function SearchInput() {
  let [query, setQuery] = useState("");

  function handleChange(e) {
    setQuery(e.target.value)
  }

  function handleClick(e) {
      setQuery("")
  }

  return (
    <div className="flex-grow min-w-0">
      <div className="flex items-center">
        <div className="relative" style={{ flex: "0 1 360px" }}>
          <form role={"search"}>
            <input
              type="text"
              className="w-full border-0 rounded-[500px] h-[40px] py-1.5 px-12 text-ellipsis placeholder-gray-400 text-sm leading-4 tracking-wide"
              placeholder="Artists, titres ou podcasts"
              maxLength={800}
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
              value={query}
              onChange={handleChange}
            />
          </form>
          <div className="absolute top-0 bottom-0 flex items-center pointer-events-none left-3 right-3">
            <span className="text-[#121212] flex-1">
              <SearchIcon className="block w-6 h-6" />
            </span>
            {query.length > 0 && (
              <button onClick={handleClick} className="bg-transparent border-0 text-[#121212] p-0 pointer-events-auto">
                <XIcon className="block w-6 h-6 fill-current" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchInput;
