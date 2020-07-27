import React from 'react';

const SearchBar = ({ searchWord, searchMembers, getList, members }) => {

    // onClick(e){
    //     e.preventDefault();
    //     this.props.searchMembers(this.state.searchWord);
    //     this.setState({searchWord:""});
        
    // }

  return (
    <div className='container'>
      <div className='card-title'>
        <h4>Search Members</h4>
      </div>
      <form>
        <div>
          <input type="text"
            className="inputs"
            placeholder="Search By Name..."      
            onChange={e => searchMembers(e.target.value)} />
        </div>
        {/* <button
          onClick={getList(members)}>Full List
        </button>     */}
      </form>
    </div>
  )
}

export default SearchBar
