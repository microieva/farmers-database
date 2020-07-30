import React from 'react';
import PropTypes from 'prop-types'

const SearchBar = ({ searchWord, searchList }) => {
  return (
    <div className='container'>
      <div className='card-title'>
        <h4>Search Members</h4>
      </div>
      <form >
        <div>
          <input
            type="text"
            className="inputs"
            placeholder="Search By Name..." 
            name="searchWord"  
            value={searchWord}
            onChange={e => {searchList(e.target.value)}} 
            />
          </div>
          <button
            onClick={(e)=> {
              e.preventDefault()
              searchList("")
            }}
            >Full List
          </button> 
        </form>
      </div>
  )
}

SearchBar.propTypes = {
  searchWord: PropTypes.string,
  searchList: PropTypes.func.isRequired
}

export default SearchBar