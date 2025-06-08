import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const items = [
  { id: '1', content: 'Task One' },
  { id: '2', content: 'Task Two' },
];

export default function KanbanPage() {
  return (
    <div>
      <h2>🗂 Kanban Board</h2>
      <DragDropContext onDragEnd={() => {}}>
        <Droppable droppableId="kanban">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {items.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided) => (
                    <div
                      {...provided.dragHandleProps}
                      {...provided.draggableProps}
                      ref={provided.innerRef}
                      style={{
                        backgroundColor: 'var(--card)',
                        margin: '1rem 0',
                        padding: '1rem',
                        borderRadius: '8px',
                        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                      }}
                    >
                      {item.content}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}
