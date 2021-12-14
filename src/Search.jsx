import React from 'react'
import './Search.css'
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

function Search() {
    return (
        <div className="search">
            
            <div className="search__box">
                <div className="search__icon">
                    <SearchIcon />
                </div>

                <InputBase
                    placeholder="Buscar en Twitter"
                    className="search__input"
                    inputProps={{ 'aria-label': 'search' }}
                />
            </div>

        </div>


    )
}

export default Search