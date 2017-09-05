const search = (title) => {

  return new Promise(function(resolve, reject) {  
    const url = `/search/${title}`;
    fetch(url,
      {
        method: 'GET',
        credentials: 'include'
      })
      .then(response => {
        if (!response.ok) {
          throw new Error(`status ${response.status}`);
        }
        return response.json();
      })
      .then(json => {
        return  resolve(json);
      })
      .catch(e => {
        console.log('error search results:', e);
        return reject(new Error(e.statusText))
      })
    });
}

module.exports = {
  search,
}