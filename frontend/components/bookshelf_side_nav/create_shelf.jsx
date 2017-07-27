import React from 'react';

class CreateShelf extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shelfName: "",
      errors: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const shelf = this.state.shelfName;
    if (this.props.shelfNames.includes(shelf)) {
      this.setState({errors: "Can't Create Duplicate Shelves"});
      this.setState({shelfName: ""});
    } else {
      this.props.createBookshelf(this.props.currentUserId, shelf).then(
        () => this.setState({
          shelfName: "",
          errors: ""
        })
      );
    }
  }

  render() {
    return (
      <div>

        {this.state.errors}

        <form className="create-shelf-form" onSubmit={ this.handleSubmit }>

          <label>Shelf Name:
            <input
              className="input"
              ref="shelfName"
              value={ this.state.shelfName }
              placeholder="new shelf name"
              onChange={ this.update('shelfName') }
              />
          </label>

          <button className="shelf-create-button">Create Shelf</button>
        </form>
      </div>
    );
  }
}

export default CreateShelf;
