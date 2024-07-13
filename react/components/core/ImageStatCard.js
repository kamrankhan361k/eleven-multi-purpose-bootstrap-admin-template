import {
  Card,
  CardBody,
  Carousel,
  CarouselIndicators,
  CarouselItem,
  Col,
  Row
} from "reactstrap";

import PropTypes from "prop-types";
import { useState } from "react";

const ImageStatCard = ({ images, imageHeight, stats }) => {
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
                key={index}
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

ImageStatCard.propTypes = {
  images: PropTypes.array.isRequired,
  imageHeight: PropTypes.number.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      value: PropTypes.number
    })
  ).isRequired
};

export default ImageStatCard;
