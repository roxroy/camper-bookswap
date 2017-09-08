import React from 'react';
import TextInput from '../common/TextInput';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';

class ProfileForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        username: '',
        city: ''
      },
      errors: {},
      submitted: false,
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange = (event) => {
    const user = this.state.user;
    user[event.target.name] = event.target.value;
    this.setState({user});
  }

  validate({username, city}) {
    const errors = {};

    if (username.length<1) errors.username = 'User Name is required';
    if (city.length<1) errors.city = 'Password is required';

    this.setState({errors});
    const formIsValid = Object.getOwnPropertyNames(errors).length === 0;
    return formIsValid;
  }

  onSubmit = (event) => {
    if (event) event.preventDefault();
    const {user} = this.state;
    const formIsValid = this.validate(user);
    if (formIsValid) {
      //this.props.onSubmit(user);
      authService.submitLogin(user)
      .then(loginData => {
        console.log('onSubmit', loginData);
        if (loginData.success) {
          this.setState({submitted: true});
          Materialize.toast('You are login!', 1500);
          this.props.onLogin(user.username, user.city);
          browserHistory.push('/');
        } else {
          const errors = {};
          errors.username = loginData.info.message;
          this.setState({errors});
        }
      })
      .catch(e => {
        console.log('onSubmit', e);
      });    
    }
  }

  render() {
    const {errors, submitted} = this.state;
    const {username, city} = this.state.user;

    return (
      <div className="container">
        <h4>Login</h4>
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s12">
                <TextInput 
                  icon="account_circle" 
                  htmlId="profile`-form-username"
                  name="username"
                  label="UserName"
                  value={username}
                  error={errors.username}
                  required />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                 <TextInput 
                  icon="account_circle" 
                  htmlId="profile`-form-city"
                  name="city"
                  onChange={this.onChange}
                  label="City"
                  value={city}
                  error={errors.city}
                 />
             </div>
            </div>
            <div className="row">
             <div className="input-field col s12">
              <button className="btn btn-block btn-lg waves-effect" type="submit" onClick={this.onSubmit}>Login To Your Account</button>
             </div>
            </div>          
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isLoggedIn: state.auth.isLoggedIn
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: (username, city) => {
      dispatch(login(username, city));
      dispatch(login_success());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm);
