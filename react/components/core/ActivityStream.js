import Avatar from "./Avatar";
import PropTypes from "prop-types";

const ActivityStream = props => {
  const { stream } = props;
  return (
    <div className="activity">
      {stream.map((item, index) => (
        <div key={index} className="card pb-3 m-0">
          <div className="d-flex align-items-start justify-content-start">
            <div className="header">
              <span
                className="d-block mr-3 border-white rounded-circle position-relative"
                style={{ border: "4px solid" }}
              >
                <Avatar size={48} src={item.avatar} alt={item.title} />
              </span>
            </div>

            <div className="pl-3">
              <span className="d-block pb-2">
                <small className="text-muted">
                  <span>{item.subtitle}</span>
                </small>
                <span className="d-block">{item.title}</span>
              </span>
              <p>{item.body}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

ActivityStream.propTypes = {
  stream: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      avatar: PropTypes.string,
      body: PropTypes.string
    })
  ).isRequired
};

export default ActivityStream;
