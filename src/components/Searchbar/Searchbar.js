import { Component } from 'react';
import { toast } from 'react-toastify';

export class Searchbar extends Component {
  state = {
    valueImput: '',
  };

  inputChange = event => {
    this.setState({
      valueImput: event.currentTarget.value.toLowerCase().trim(),
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.valueImput.trim() === '') {
      return toast.warn('Строка не должна быть пустой!!!');
    }
    this.props.onSubmit(this.state.valueImput);

    this.setState({
      valueImput: '',
    });
  };

  render() {
    return (
      <header>
        <form onSubmit={this.handleSubmit}>
          <button type="submit">
            <span>Search</span>
          </button>

          <input
            value={this.state.valueImput}
            onChange={this.inputChange}
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
