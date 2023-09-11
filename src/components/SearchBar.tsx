import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

interface Props {
    onSearch: (searchTerm: string) => void;
}

const SearchBar: React.FC<Props> = ({ onSearch }) => {
  return (
    <div className="p-4">
      <div className="relative">
        <input
          type="text"
          placeholder="Search for movies..."
          className="w-full p-2 pl-10 rounded-md border border-gray-300"
          onChange={e => onSearch(e.target.value)}
        />
        <FontAwesomeIcon
          icon={faSearch}
          className="absolute text-gray-500 left-3 top-3"
        />
      </div>
    </div>
  );
};

export default SearchBar;
