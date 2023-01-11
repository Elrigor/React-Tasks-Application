import TaskCard from "./TaskCard";

function TaskList({ tasks }) {
  if (tasks.length == 0) {
    return "No hay tareas aún";
  }
  return (
    <div>
      {tasks.map((task) => (
        <TaskCard task={task} />
      ))}
    </div>
  );
}

export default TaskList;
