import React, { useMemo } from "react";
import debounce from "lodash.debounce";

const SearchBar = ({ query, setQuery, onSearch }) => {
    // Memoize the debounced function only once
    const debouncedOnChange = useMemo(
        () =>
            debounce((value) => {
                setQuery(value);
            }, 500),
        [setQuery] // Dependency array for useMemo to recalculate only if setQuery changes
    );

    // Cleanup debounce on component unmount
    React.useEffect(() => {
        return () => {
            debouncedOnChange.cancel();
        };
    }, [debouncedOnChange]);

    return (
        <div>
            <h2>Book Finder</h2>
        <div className="search-bar">
            <input
                type="text"
                defaultValue={query}
                onChange={(e) => debouncedOnChange(e.target.value)}
                placeholder="Search for a book..."
            />
            <button onClick={onSearch}>Search</button>
        </div>
        </div>
    );
};

export default SearchBar;