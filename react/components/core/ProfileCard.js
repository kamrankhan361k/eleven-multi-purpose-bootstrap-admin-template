import {
  Button,
  Card,
  CardBody,
  Carousel,
  CarouselIndicators,
  CarouselItem,
  Col,
  Row
} from "reactstrap";

import AnimatedIcon from "./AnimatedIcon";
import Avatar from "./Avatar";
import Chat from "../../public/animated-icons/speech/speech.json";
import PropTypes from "prop-types";
import { useState } from "react";

const ProfileCard = ({
  name,
  avatar,
  imageHeight,
  location,
  stats,
  images,
  callHandler,
  messageHandler
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  return (
    <Card>
      <div className="cover" style={{ height: imageHeight }}>
        <Carousel
          activeIndex={activeIndex}
          next={next}
          previous={previous}
          className="rounded-top overflow-hidden"
        >
          {images.map((image, index) => (
            <CarouselItem
              onExiting={() => setAnimating(true)}
              onExited={() => setAnimating(false)}
              key={index}
            >
              <div
                className="image"
                style={{
                  backgroundImage: `url(${image})`,
                  height: imageHeight
                }}
              />
            </CarouselItem>
          ))}
          <CarouselIndicators
            items={images}
            activeIndex={activeIndex}
            onClickHandler={goToIndex}
          />
        </Carousel>
        <div className="content text-center p-4">
          <Row className="mb-4 justify-content-around align-items.center">
            <div className="profile-card-picture">
              <Button onClick={messageHandler} className="message">
                <AnimatedIcon animationData={Chat} size={16} />
              </Button>

              <Avatar alt={name} src={avatar} size={100} />
            </div>
          </Row>
          <h6 className="mb-0 text-white">
            {name} - <small className="text-white">{location}</small>
          </h6>
        </div>
      </div>
      <CardBody>
        <Row>
          {stats.map((stat, index) => (
            <Col className="text-center" key={index}>
              <h5 className="mb-0">{stat.value}</h5>
              <small>{stat.title}</small>
            </Col>
          ))}
        </Row>
      </CardBody>
    </Card>
  );
};

ProfileCard.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  images: PropTypes.array.isRequired,
  imageHeight: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      value: PropTypes.number
    })
  ).isRequired
};

export default ProfileCard;
