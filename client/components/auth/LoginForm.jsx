import React from 'react';
import TextInput from '../common/TextInput';
import PasswordInput from '../common/PasswordInput';
import authService from './authService';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { login, login_success } from '../../actions/auth';
//import { getAllRsvps } from '../../actions/search';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        username: '',
        password: ''
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

  validate({username, password}) {
    const errors = {};

    if (username.length<1) errors.username = 'User Name is required';
    if (password.length<1) errors.password = 'Password is required';

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
          this.props.onLogin(user.username, user.password);
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
    const {username, password} = this.state.user;

    return (
      <div className="container signup">
        <h4>Login</h4>
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s12">
                <TextInput 
                  icon="account_circle" 
                  htmlId="signup-form-username"
                  name="username"
                  onChange={this.onChange}
                  label="UserName"
                  value={username}
                  error={errors.username}
                  required />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <PasswordInput
                  icon="vpn_key" 
                  htmlId="signup-form-password"
                  name="password"
                  value={password}
                  onChange={this.onChange}
                  error={errors.password} />
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
    onLogin: (username, password) => {
      dispatch(login(username, password));
      dispatch(login_success());
      //dispatch(getAllRsvps());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
