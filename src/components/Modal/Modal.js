import Modal from 'react-modal';
import PropTypes from 'prop-types';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
// Modal.setAppElement('#root');

export const CustomModal = ({ modalIsOpen, onRequestClose, image }) => {
  return (
    <Modal
      style={customStyles}
      IsOpen={modalIsOpen}
      onRequestClose={onRequestClose}
    >
      <img src={image.webformatURL} alt={image.tags} />
    </Modal>
  );
};

Modal.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
