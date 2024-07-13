import Img from "react-image";
import PropTypes from "prop-types";

const bootstrapColors = [
  "primary",
  "success",
  "warning",
  "info",
  "secondary",
  "dark",
  "danger"
];

const Avatar = ({ src, alt = "image", size = 32, status, style }) => {
  const circle = status && (
    <span
      className={`text-${status} border-white status`}
      style={{ width: size / 3, height: size / 3 }}
    ></span>
  );

  const iconSize = size ? size + "px" : "32px";

  return (
    <span
      className="position-relative d-flex rounded-circle"
      style={{ width: iconSize, height: iconSize, ...style }}
    >
      <Img
        src={src}
        alt={alt}
        width={iconSize}
        height={iconSize}
        className="rounded-circle"
        unloader={
          <span
            className={`d-flex align-items-center justify-content-center w-100 h-100 bg-${
              bootstrapColors[
                Math.floor(Math.random() * bootstrapColors.length)
              ]
            } text-light rounded-circle`}
          >
            {alt.charAt(0)}
          </span>
        }
      />
      {status && circle}
    </span>
  );
};

Avatar.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  size: PropTypes.number.isRequired,
  status: PropTypes.string,
  style: PropTypes.string
};

export default Avatar;
