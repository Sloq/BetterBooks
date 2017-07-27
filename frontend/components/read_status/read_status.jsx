import React from 'react';
import { withRouter } from 'react-router';


class ReadStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      readStatus: "",
      shelf: ""
    };
    this.updateStatus = this.updateStatus.bind(this);
    this.updateShelfStatus = this.updateShelfStatus.bind(this);
    this.addToShelf = this.addToShelf.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  componentDidMount() {
    this.props.requestBookShelving(this.props.match.params.BookId);
    this.props.requestAllBookshelves(this.props.currentUserId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.BookId !== nextProps.match.params.BookId) {
      this.props.requestBookShelving(nextProps.match.params.BookId);
    }
  }

  updateStatus(e) {
    this.setState({readStatus: e.target.value});
  }

  updateShelfStatus(e) {
    this.setState({shelf: e.target.value});
  }

  handleCreate(e) {
    e.preventDefault();
    this.props.createShelving(this.props.match.params.BookId, "NO_ID", this.state.readStatus);
  }

  handleUpdate(e) {
    e.preventDefault();
    // const post = Object.assign({}, this.state);
    this.props.updateShelving(this.props.match.params.BookId, this.state.readStatus);
  }

  addToShelf(e) {
    e.preventDefault();
    // const post = Object.assign({}, this.state);
    this.props.createShelving(this.props.match.params.BookId, this.state.shelf, this.props.readStatus);
  }

  changeReadStatusDropdown() {
    if (this.props.readStatus) {
      return (
        <form className="status-form"   >
          <select name="readStatus" onChange={this.updateStatus}>
            <option selected disabled>Choose Read Status</option>
            <option value="Read" >Read</option>
            <option value="Currently Reading">Currently Reading</option>
            <option value="Want to Read">Want to Read</option>
          </select>
          <button onClick={ this.handleUpdate }>Update Read Status</button>
        </form>
      );
    } else {
      return (
        <form className="status-form"   >
          <select name="readStatus" onChange={this.updateStatus}>
            <option selected disabled>Choose Read Status</option>
            <option value="Read" >Read</option>
            <option value="Currently Reading">Currently Reading</option>
            <option value="Want to Read">Want to Read</option>
          </select>
          <button onClick={ this.handleCreate }>Add to your books</button>
        </form>
      );
    }
  }

  currentShelves() {
    if (this.props.shelvesIn) {
    return (
      this.props.shelvesIn.map(shelf => (
        <li key={shelf}>{shelf}</li>
      ))
    );} else {
      return (
        <li></li>
      );
    }
  }

  shelfDropOptions() {
    // let difference = this.props.shelfNames.filter(x => this.props.shelvesIn.indexOf(x) === -1);
    return (
      this.props.shelfNames.map(name => (
        <option value={Object.keys(name)[0]}>{Object.values(name)[0]}</option>
      ))
    );
  }

  addToShelfDropdown() {
    if (this.props.readStatus) {
      return (
        <form className="status-form"   >
          <select name="readStatus" onChange={this.updateShelfStatus}>
            {this.shelfDropOptions()}
          </select>
          <button onClick={ this.addToShelf }>Add to Shelf</button>
        </form>
      );
    } else {
      return (<div></div>);
    }
  }

  render() {
    console.log(this.props.state);
    return (
      <div className="read-status-book-show">
        {this.props.readStatus}
        <div>
          {this.changeReadStatusDropdown()}
        </div>

        <ul>
          Current Shelves:
          {this.currentShelves()}
        </ul>

        <div>
          {this.addToShelfDropdown()}
        </div>

      </div>
    );
  }
}

export default withRouter(ReadStatus);
