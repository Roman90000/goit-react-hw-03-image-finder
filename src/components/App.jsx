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
    const { inputValue, page } = this.state;

    if (prevState.inputValue !== inputValue || prevState.page !== page) {
      getImages(inputValue, page).then(({ hits }) => {
        if (!hits.length) {
          alert('gjgjh');
          return;
        }
        this.setState(prevState => ({
          images: [...prevState.images, ...hits],
        }));
      });
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
