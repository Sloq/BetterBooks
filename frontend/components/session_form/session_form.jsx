import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
      profile_pic: 'default_pic_url'
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    console.log(user);
    console.log(this.state);
    this.props.processForm({user});
  }

  handleClick(e) {
    e.preventDefault();
    const user = {
      username: "Guest",
      password: "guest123456"
    };
    console.log(user);
    console.log(this.state);
    this.props.processForm({user});
  }

  navLink() {
    if (this.props.formType === 'login') {
      return <Link to="/signup">Sign Up</Link>;
    } else {
      return <Link to="/login">Log In</Link>;
    }
  }

  emailField() {
    if (this.props.formType === 'signup') {
      return (
          <label>Email
            <input type="text"
            value={this.state.email}
            onChange={this.update('email')}
            className="login-input"
            />;
          </label>
          )
    }
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <br/>
          Please {this.props.formType} or {this.navLink()}
          {this.renderErrors()}
          <div className="login-form">
            <br/>
            <label>Username
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
              />
            </label>
            {this.emailField()}
            <label>Password
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            </label>
            <br/>
            <button
              className="log-in-button">
              {this.props.formType === "signup" ? "sign up" : "Log In"}
            </button>
            <button
              className="log-in-button"
              onClick={ this.handleClick }>
              Guest Sign In
          </button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
