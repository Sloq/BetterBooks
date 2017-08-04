import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  logoElement() {
    return (
      <div>
        <Link to={`/`}>
          <img className='nav-logo' src="https://res.cloudinary.com/cloudmccloud/image/upload/v1500498258/BetterBooks/koala_kygmbi.png" alt="Well Read Koala"/>
        </Link>
      </div>
    );
  }

  bookshelfElement() {
    const { currentUser } = this.props;
    if (this.props.currentUser) {
      return (
        <div className='nav-panel'>
          <Link to={`/user/${currentUser.id}/bookshelf/all`}>
            My Books
          </Link>
        </div>
      );
    }
  }

  // searchBar() {
  //   return (
  //     <div className="searchbar-div">
  //
  //       <input className='nav-search' type="text" name="search" placeholder="Search..."/>
  //     </div>
  //   );
  // }
  // <Link to={`/user/${currentUser.id}`}>
  // </Link>

  userIconOrLogin() {
    const currentUser = this.props.currentUser;
    if (currentUser) {
      return (
        <div>
            <img className='user-nav-icon' src={currentUser.profile_pic} alt="user profile pic"/>
        </div>
      );
    } else {
      return (
        <div className='nav-panel-right'>
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
        <div className='nav-panel-right'>
          <Link to="/signup">Sign up</Link>
        </div>
      );
    }
  }

  // {this.searchBar()}
  render() {
    return (
      <nav className='main-nav'>
        <div className='left-navbar'>
          {this.logoElement()}
          <Link to={`/`}>
          <div className="site-name-nav">BetterBooks</div>
          </Link>
          {this.bookshelfElement()}
        </div>
        <div className='right-navbar'>
          {this.userIconOrLogin()}
          {this.signOutOrSignUp()}
        </div>
      </nav>
    );
  }
}

export default Navbar;
