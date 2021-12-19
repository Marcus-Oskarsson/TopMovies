import React, { useEffect, useRef } from 'react';

const SearchBar = ({ setSearchText, searchText }) => {
    const onsearch = (e) => {
        setSearchText(e.target.value);
    };
    const inputElement = useRef(null);

    useEffect(() => {
        if (inputElement.current) {
            inputElement.current.focus();
        }
    }, []);

    return (
        <input
            className='search-field'
            placeholder='Search'
            type='text'
            onChange={onsearch}
            value={searchText}
            ref={inputElement}
        />
    );
};

export default SearchBar;
