require('dotenv').load();
let books = require('google-books-search');

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
    books.search(title, options, (error, results, apiResponse) => {
      console.log('search done', error, results);
      if ( ! error ) {
        return resolve({success:true, results});
      } else {
        return resolve({success:false, error});
      }
    });
  });
}

module.exports = {
  search,
}