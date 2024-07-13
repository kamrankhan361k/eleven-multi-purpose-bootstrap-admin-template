import { Button, Card, Col, Row } from "reactstrap";

import PropTypes from "prop-types";

const StatCard = ({
  reverse,
  fill,
  title,
  value,
  icon,
  type,
  clickHandler,
  vertical
}) => {
  let before = null,
    after = null;

  const cardIcon = (
    <Col xs="auto" className={vertical ? "p-3" : ""}>
      <Button
        style={{
          padding: "0.1rem",
          borderRadius: "50%",
          minWidth: "32px",
          minHeight: "32px"
        }}
        onClick={clickHandler}
        color={type}
      >
        {icon}
      </Button>
    </Col>
  );

  if (icon) {
    reverse ? (after = cardIcon) : (before = cardIcon);
  }

  return (
    <Card className={fill ? "bg-" + type : null} body>
      <Row
        className={
          vertical
            ? "flex-column justify-content-center text-center align-items-center"
            : "justify-content-start align-items-center"
        }
      >
        {before}
        <Col xs="auto">
          <h5
            className={`stat-widget-title mb-0 fw-400 ${
              fill ? "text-white" : null
            }`}
          >
            {value}
          </h5>
          <h6 className={`stat-widget-subtitle ${fill ? "text-white" : null}`}>
            {title}
          </h6>
        </Col>
        <span className="mr-auto" />
        {after}
      </Row>
    </Card>
  );
};

StatCard.propTypes = {
  fill: PropTypes.bool,
  title: PropTypes.string,
  value: PropTypes.string,
  icon: PropTypes.element,
  type: PropTypes.string
};

export default StatCard;
