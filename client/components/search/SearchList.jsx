import React, {PropTypes} from 'react';
import SearchListItem from './SearchListItem';

const  SearchList = (props) => {

 const booklist = [];

 const searchText = '..term...';

  return (
      <div>
        <div className="row">
          <div className="col s12">
            <h5 className="center">{searchText}</h5>
            {booklist}
          </div>
        </div>
      </div>
    )
}

export default SearchList;