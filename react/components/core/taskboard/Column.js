import { Draggable } from "react-beautiful-dnd";
import TaskList from "./TaskList";

const Column = ({ title, tasks, index }) => (
  <Draggable draggableId={title} index={index}>
    {provided => (
      <div className="app-taskboard-wrapper" key={index}>
        <div className="app-taskboard-list">
          <div className="app-taskboard-header">{title}</div>
          <div
            className="app-taskboard-cards"
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <TaskList listId={title} tasks={tasks} />
          </div>
        </div>
      </div>
    )}
  </Draggable>
);

export default Column;
