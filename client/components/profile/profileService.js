  const submitForm = (user, path) => {
    const body = JSON.stringify(user);
       return new Promise(function(resolve, reject) {  
        fetch(path,
          {
            method: 'POST', credentials: 'include',
            body: body,
            headers: { 'Content-Type': 'application/json' }
          })
          .then(response => {
            if (!response.ok) {
              reject(response.json());
            }
            return response.json();
          })
          .then(json => {
            return  resolve(json);
          })
          .catch(e => {
            return reject(new Error(e.statusText))
          })
    });
  }

  const submitProfile = user => {
    return submitForm(user, '/profile');
  }

  module.exports = {
    submitProfile,
  }