import React from 'react';

const  SearchListItem = (props) => {
  const book = props.book;
  const bookName = book.title.length >= 20 
    ? book.title.substring(0, 20)+ '...'
    : book.title;

  return (
    <div className="col s12 m4">
      <div className="card book-card" data-bookid={book.id}>
        <div className="card-image">
          <img src={book.thumbnail}/>
        </div>
        <div className="card-content">
          <span className="card-title">
          <a href={book.link} target="_blank">{bookName}</a></span>
          <div><span>Author:</span> {book.authors[0]}</div>
          <div><span>Publisher:</span> {book.publisher}</div>
          <div><span>Published On:</span> {book.publishedDate}</div>
        </div>   
        <div className="card-action">
          <span className="waves-effect waves-light btn" >action</span>
        </div>
      </div>
    </div>
  )
}

export default SearchListItem;
