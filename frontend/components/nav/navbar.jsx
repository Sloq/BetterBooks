import React from 'react';
import { Link } from 'react-router-dom';

// const sessionLinks = () => (
//   <nav className="login-signup">
//     <Link to="/login">Login</Link>
//     <Link to="/signup">Sign up</Link>
//   </nav>
// );
//
// const personalGreeting = (currentUser, logout) => (
// 	<hgroup className="header-group">
//     <h2 className="header-name">Hi, {currentUser.username}!</h2>
//     <button className="header-button" onClick={logout}>Log Out</button>
// 	</hgroup>
// );
//
// const Greeting = ({ currentUser, logout }) => (
//   currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
// );

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  logoElement() {
    return (
      <div>
        <Link to={`/`}>
          <img className='nav-logo' src="http://res.cloudinary.com/cloudmccloud/image/upload/v1500498258/BetterBooks/koala_kygmbi.png" alt="Well Read Koala"/>
        </Link>
      </div>
    );
  }

  bookshelfElement() {
    const { currentUser } = this.props;
    if (this.props.currentUser) {
      return (
        <div className='nav-panel'>
          <Link to={`/bookshelf/${currentUser.id}`}>
            Bookshelf
          </Link>
        </div>
      );
    }
  }

  // browseElement() {
  //   return (
  //     <div>
  //       <Link to={`/bookshelf/${currentUser.id}`}>
  //         Bookshelf
  //       </Link>
  //     </div>
  //   );
  // }

  searchBar() {
    return (
      <div>
        <input className='nav-search' type="text" name="search" placeholder="Search.."/>
      </div>
    );
  }

  userIconOrLogin() {
    const user = this.props.currentUser;
    if (user) {
      return (
        <div className='user-nav-icon'>
          <img src={user.profile_pic} alt="user profile pic"/>
        </div>
      );
    } else {
      return (
        <div>
          <Link to="/login">Login</Link>
        </div>
      );
    }
  }

  signOutOrSignUp() {
    const logout = this.props.logout;
    const user = this.props.currentUser;
    if (user) {
      return (
        <div>
          <button className="nav-logout" onClick={logout}>Log Out</button>
        </div>
      );
    } else {
      return (
        <div>
          <Link to="/signup">Sign up</Link>
        </div>
      );
    }
  }

  render() {
    console.log(this.props);
    console.log(this.props.currentUser);
    console.log(this.props);
    return (
      <nav className='main-nav'>
        <div className='left-navbar'>
          {this.logoElement()}
          {this.bookshelfElement()}
        </div>
        <div className='right-navbar'>
          {this.searchBar()}
          {this.userIconOrLogin()}
          {this.signOutOrSignUp()}
        </div>
      </nav>
    );
  }
}

export default Navbar;
