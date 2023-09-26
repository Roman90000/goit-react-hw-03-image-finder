import { Component } from 'react';
import PropTypes from 'prop-types';

export class ImageGalleryItem extends Component {
  render() {
    const { image, openModal } = this.props;
    return (
      <li key={image.id} onClick={() => openModal(image)}>
        <img src={image.webformatURL} alt={image.tags} />
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
};
