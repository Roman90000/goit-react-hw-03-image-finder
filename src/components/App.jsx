import { ImageGallery } from './ImageGallery/ImageGallery.styled';
import { Button } from './Button/Button';
import { Searchbar } from './Searchbar/Searchbar';
import { getImages } from './Api/Api';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const { Component } = require('react');

export class App extends Component {
  state = {
    inputValue: '',
    images: [],
    page: 1,
    loading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.inputValue !== this.state.inputValue ||
      prevState.page !== this.state.page
    ) {
      const { inputValue, page } = this.state;
      const response = getImages(inputValue, page);
      console.log(response);
      this.setState({ images: response });
      // console.log(this.state);
    }
  }

  formSubmit = inputValue => {
    this.setState({ inputValue });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { images } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.formSubmit} />
        <ImageGallery images={images} />

        <Button onClick={this.handleLoadMore} />
        <ToastContainer autoClose={3000} position="top-center" />
      </div>
    );
  }
}
