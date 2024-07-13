import { Button, Card } from "reactstrap";

import PropTypes from "prop-types";
import { distanceInWordsToNow } from "date-fns";

const Timeline = ({ title, timeline }) => {
  timeline.sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="app-timeline">
      {title && (
        <div className="position-relative clearfix text-sm-center mb-5">
          <Button color="primary" className="py-2 px-4">
            {timeline ? title : "Loading ..."}
          </Button>
        </div>
      )}
      {timeline &&
        timeline.map((item, index) => (
          <section key={index} className="position-relative clearfix my-5">
            <span className={`icon ${index % 2 ? "icon-odd" : "icon-even"}`} />
            <small
              className={`date text-muted ${
                index % 2 ? "date-odd" : "date-even"
              }`}
            >
              {distanceInWordsToNow(item.date)}&nbsp;ago
            </small>
            <section
              className={`content ${
                index % 2 ? "float-sm-right" : "float-sm-left"
              }`}
            >
              <Card
                className={`body shadow ${
                  index % 2 ? "float-sm-left" : "float-sm-right"
                }`}
              >
                <p className="mb-0">{item.text}</p>
              </Card>
            </section>
          </section>
        ))}
    </div>
  );
};

Timeline.propTypes = {
  title: PropTypes.string,
  timeline: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      date: PropTypes.string
    })
  )
};

export default Timeline;
