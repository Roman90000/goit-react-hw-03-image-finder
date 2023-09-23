import { Component } from 'react';

export class ImageGalleryItem extends Component {
  render() {
    const { id, webformatURL, tags } = this.props;
    return (
      <li key={id}>
        <img src={webformatURL} alt={tags} />
      </li>
    );
  }
}
