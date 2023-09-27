import { Component } from 'react';
import PropTypes from 'prop-types';
import { GalleryItemCard, GalleryItemImage } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  render() {
    const { image, openModal } = this.props;
    return (
      // <ListItem key={image.id} onClick={() => openModal(image)}>
      <GalleryItemCard
        key={image.id}
        onClick={() =>
          openModal({ webformatURL: image.webformatURL, tags: image.tags })
        }
      >
        <GalleryItemImage src={image.webformatURL} alt={image.tags} />
      </GalleryItemCard>
    );
  }
}

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
};
