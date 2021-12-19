import React, { useState } from 'react';
import { HiOutlineSearch } from 'react-icons/hi';
import { IoMdMenu } from 'react-icons/io';

import SearchBar from './SearchBar';

const Header = ({ setSearchText, searchText }) => {
    const [activeSearch, setActiveSearch] = useState(false);

    const toggleSearchBar = () => {
        setActiveSearch(!activeSearch);
        if (!activeSearch) {
            setSearchText('');
        }
    };

    return (
        <header>
            <h1>POPULAR MOVIES</h1>
            {activeSearch && (
                <SearchBar
                    setSearchText={setSearchText}
                    searchText={searchText}
                />
            )}
            <div className='start-icons'>
                <HiOutlineSearch
                    className='search-bar'
                    onClick={toggleSearchBar}
                />
                <IoMdMenu className='hamburger-menu' />
            </div>
        </header>
    );
};

export default Header;
