require('dotenv').load();
let googleBooks = require('google-books-search');
let books = require('./mockData').books;

let options = {
    key: process.env.GOOGLE_API_KEY,
    field: 'title',
    offset: 0,
    limit: 10,
    type: 'books',
    order: 'relevance',
    lang: 'en'
};

const search = (title) => {
  return new Promise(function(resolve, reject) {
    googleBooks.search(title, options, (error, results, apiResponse) => {
      console.log('search done', error, results);
      if ( ! error ) {
        return resolve({success:true, results});
      } else {
        return resolve({success:false, error});
      }
    });
  });
}

const mockSearch = (title) => {
  return new Promise(function(resolve, reject) {
    return  resolve(books);
  });
}

module.exports = {
  search,
  mockSearch,
}