import PropTypes from "prop-types";
import React from "react";

function SectionTitle({ tag: Tag, children, ...props }) {
  return (
    <Tag
      id={children.replace(/\s/g, "-").replace(/[^a-zA-Z0-9-_]/g, "")}
      {...props}
    >
      {children}
    </Tag>
  );
}

SectionTitle.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.string.isRequired
};

SectionTitle.defaultProps = {
  tag: "h5"
};

export default SectionTitle;
