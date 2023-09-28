import { Button } from './Button/Button';
import { Searchbar } from './Searchbar/Searchbar';
import { getImages } from '../Api/Api';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { CustomModal } from './Modal/Modal';
const { Component } = require('react');

export class App extends Component {
  state = {
    inputValue: '',
    images: [],
    page: 1,
    isLoading: false,
    isError: '',
    modalIsOpen: false,
    webformatURL: '',
    tags: '',
    isLoadMore: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { inputValue, page } = this.state;

    if (prevState.inputValue !== inputValue || prevState.page !== page) {
      this.setState({
        isLoading: true,
      });
      getImages(inputValue, page)
        .then(({ hits, totalHits }) => {
          if (!hits.length) {
            alert('No pictures');
            return;
          }
          this.setState(prevState => ({
            images: [...prevState.images, ...hits],
            isLoadMore: page < Math.ceil(totalHits / 12),
          }));
        })
        .catch(error => {
          this.setState({ isError: error.images });
        })
        .finally(() => {
          this.setState({ isLoading: false });
        });
    }
  }

  formSubmit = inputValue => {
    this.setState({ inputValue, images: [], page: 1 });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  openModal = ({ webformatURL, tags }) => {
    this.setState(prevState => ({
      modalIsOpen: !prevState.modalIsOpen,
      webformatURL,
      tags,
    }));
  };

  closeModal = () => {
    this.setState({
      modalIsOpen: false,
      webformatURL: '',
    });
  };

  render() {
    const { images, isLoading, modalIsOpen, webformatURL, tags, isLoadMore } =
      this.state;

    return (
      <div>
        <Searchbar onSubmit={this.formSubmit} />
        <ImageGallery images={images} openModal={this.openModal} />
        {isLoadMore && <Button onClick={this.handleLoadMore} />}
        {isLoading && <Loader />}
        {modalIsOpen && (
          <CustomModal
            closeModal={this.closeModal}
            modalIsOpen={modalIsOpen}
            image={webformatURL}
            tags={tags}
          />
        )}

        <ToastContainer autoClose={3000} position="top-center" />
      </div>
    );
  }
}
