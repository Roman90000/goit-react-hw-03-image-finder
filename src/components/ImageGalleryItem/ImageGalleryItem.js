import { Component } from 'react';
import PropTypes from 'prop-types';
import { ListItem, Pic } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  render() {
    const { image, openModal } = this.props;
    return (
      <ListItem key={image.id} onClick={() => openModal(image)}>
        <Pic src={image.webformatURL} alt={image.tags} />
      </ListItem>
    );
  }
}

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
};
