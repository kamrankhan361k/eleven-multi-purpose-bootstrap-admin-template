import { Card, CardHeader, ListGroup, ListGroupItem } from "reactstrap";

import Avatar from "./Avatar";
import PropTypes from "prop-types";

const NewsCard = ({ title, subtitle, feed }) => (
  <Card>
    <CardHeader>
      <div className="d-flex align-items-center justify-content-between">
        <span>{title}</span>
        {subtitle}
      </div>
    </CardHeader>
    <ListGroup flush>
      {feed.map((item, index) => (
        <ListGroupItem tag="a" href="#" action key={index}>
          <div className="d-flex align-items-center py-1">
            <Avatar size={48} src={item.avatar} alt={item.subject} />

            <div className="pl-3">
              <span className="d-block">{item.subject}</span>
              <small>{item.message}</small>
            </div>
          </div>
        </ListGroupItem>
      ))}
    </ListGroup>
  </Card>
);

NewsCard.propTypes = {
  feed: PropTypes.arrayOf(
    PropTypes.shape({
      from: PropTypes.string,
      avatar: PropTypes.string,
      subject: PropTypes.string,
      message: PropTypes.string
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.element
};

export default NewsCard;
