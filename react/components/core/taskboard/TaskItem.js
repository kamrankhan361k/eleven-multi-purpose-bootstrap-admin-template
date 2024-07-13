import { Carousel, CarouselIndicators, CarouselItem } from "reactstrap";

import { useState } from "react";

const TaskItem = ({ task, provided }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === task.images.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === 0 ? task.images.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  return (
    <div
      className={`app-taskboard-task ${task.color ? task.color : ""}`}
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
    >
      <div className="p-2">
        <p className="mb-0">{task.title}</p>
        <small className={`text-muted d-block ${task.images ? "mb-2" : ""}`}>
          {task.description}
        </small>

        {task.images && (
          <div className="cover" style={{ height: 150 }}>
            <Carousel
              activeIndex={activeIndex}
              next={next}
              previous={previous}
              className="overflow-hidden"
            >
              {task.images.map((image, index) => (
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
                      height: 150
                    }}
                  />
                </CarouselItem>
              ))}
              <CarouselIndicators
                items={task.images}
                activeIndex={activeIndex}
                onClickHandler={goToIndex}
              />
            </Carousel>
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskItem;
