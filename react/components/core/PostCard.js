import {
  Card,
  CardBody,
  Carousel,
  CarouselIndicators,
  CarouselItem
} from "reactstrap";

import PropTypes from "prop-types";
import { useState } from "react";

const PostCard = ({ title, subtitle, text, images, imageHeight }) => {
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
        <div className="title p-4">
          <h6 className="mb-0 text-white">{title}</h6>
          <small className="mb-0 text-white-50">{subtitle}</small>
        </div>
      </div>

      <CardBody>
        <div className="post-content">{text}</div>
      </CardBody>
    </Card>
  );
};

PostCard.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  text: PropTypes.string.isRequired,
  images: PropTypes.array.isRequired,
  imageHeight: PropTypes.number.isRequired
};

export default PostCard;
