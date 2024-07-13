import PropTypes from "prop-types";

const Divider = ({ text }) => {
  return (
    <div className="divider">
      <span className="divider-inner">
        <small>{text}</small>
      </span>
    </div>
  );
};

Divider.propTypes = {
  text: PropTypes.string
};

export default Divider;
