import PropTypes from 'prop-types';
import { ButtonEl } from './Button.styled';

export const Button = ({ onClick }) => {
  return (
    <div>
      <ButtonEl type="button" onClick={onClick}>
        <span>Search</span>
      </ButtonEl>
    </div>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
