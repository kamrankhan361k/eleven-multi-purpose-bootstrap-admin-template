import { DragDropContext, Droppable } from "react-beautiful-dnd";
import reorder, { reorderQuoteMap } from "./core/taskboard/reorder";

import Column from "./core/taskboard/Column";
import fetch from "../lib/fetch";
import useSWR from "swr";
import { useState } from "react";

const Taskboard = () => {
  const { data, error } = useSWR(
    `${process.env.baseUrl}api/taskboard`,
    fetch
  );
  if (error) return <div>Failed to load data</div>;
  if (!data) return <div>Loading...</div>;
  return <TaskboardInner data={data} />;
};

const TaskboardInner = ({ data }) => {
  const [columns, setColumn] = useState(data);
  const [ordered, setOrder] = useState(Object.keys(columns));

  const onDragEnd = result => {
    if (!result.destination) return;

    const source = result.source;
    const destination = result.destination;

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    if (result.type === "COLUMN") {
      const ordered = reorder(ordered, source.index, destination.index);

      setOrder(ordered);

      return;
    }

    const data = reorderQuoteMap({
      quoteMap: columns,
      source,
      destination
    });

    setColumn(data.quoteMap);
  };

  return (
    <div className="app-taskboard">
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="taskboard" type="COLUMN">
          {provided => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="h-100"
            >
              {ordered.map((key, index) => (
                <Column
                  key={key}
                  index={index}
                  title={key}
                  tasks={columns[key]}
                />
              ))}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default Taskboard;
