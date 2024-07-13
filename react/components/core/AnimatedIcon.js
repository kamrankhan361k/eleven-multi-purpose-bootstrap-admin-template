import Lottie from "../../lib/lottie";
import PropTypes from "prop-types";

const defaultOptions = animationData => ({
  autoplay: false,
  animationData: animationData,
  rendererSettings: {
    scaleMode: "noScale"
  }
});

const AnimatedIcon = ({ animationData, size, isStopped = true }) => {
  return (
    <span className="animated-icon">
      <Lottie
        options={defaultOptions(animationData)}
        height={size}
        width={size}
        isStopped={isStopped}
      />
    </span>
  );
};

AnimatedIcon.propTypes = {
  animationData: PropTypes.object.isRequired,
  size: PropTypes.number.isRequired,
  isStopped: PropTypes.bool
};

export default AnimatedIcon;
