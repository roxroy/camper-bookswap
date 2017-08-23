const authService = require("./authService");

const setHandlers = () => {
  $('#APP_login').on('submit', (event) => {
    if (event) event.preventDefault();
    console.log('setAuthHandlers', event.target);
    let user = {username: 'ad', password: 'asd'};
    
    authService.submitLogin(user)
    .then(loginData => {
      console.log('onSubmit', loginData);
      if (loginData.success) {
      } else {
        const errors = {};
        errors.username = loginData.info.message;
      }
    })
    .catch(e => {
      console.log('onSubmit error', e);
    }); 
  
  }); 
}


module.exports = {
  setHandlers,
}
