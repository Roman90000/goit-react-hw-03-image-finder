import Modal from 'react-modal';
import PropTypes from 'prop-types';
Modal.setAppElement('#modal_root');

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

export const CustomModal = ({
  modalIsOpen,
  onRequestClose,
  image,
  tags,
  closeModal,
}) => {
  return (
    <Modal
      style={customStyles}
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
    >
      <img src={image} alt={tags} />
    </Modal>
  );
};

CustomModal.propTypes = {
  image: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};
