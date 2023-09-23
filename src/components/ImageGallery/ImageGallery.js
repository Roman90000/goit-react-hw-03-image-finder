import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images }) => {
  return (
    <ul>
      {images.map(image => {
        return <ImageGalleryItem key={image.id} />;
      })}
    </ul>
  );
};
