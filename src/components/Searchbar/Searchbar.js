import { Component } from 'react';
import { toast } from 'react-toastify';
import {
  SearchbarEl,
  SearchFormEl,
  SearchFormBtn,
  SearchFormInput,
} from './Searchbar.styled';
import { SlGlobe } from 'react-icons/sl';

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
      <SearchbarEl>
        <SearchFormEl onSubmit={this.handleSubmit}>
          <SearchFormBtn type="submit">
            <SlGlobe />
          </SearchFormBtn>

          <SearchFormInput
            value={this.state.valueImput}
            onChange={this.inputChange}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchFormEl>
      </SearchbarEl>
    );
  }
}
