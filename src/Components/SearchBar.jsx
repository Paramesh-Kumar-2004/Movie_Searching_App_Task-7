import React, { useContext } from 'react';
import { MoviesContext } from './ContextAPI';

const SearchBar = () => {
    const { searchParams, setSearchParams } = useContext(MoviesContext);

    function handleSearchParams(e) {
        setSearchParams(`s=${e.target.value.trim().replaceAll(" ", "+")}`);
    }

    return (
        <div>
            <input
                type="text"
                value={searchParams ? searchParams.replace("s=", "").replaceAll("+", " ") : ""}
                onChange={handleSearchParams}
                className="border-4 border-sky-500 p-2"
                placeholder="Search For A Movie..."
            />
        </div>
    );
};

export default SearchBar;