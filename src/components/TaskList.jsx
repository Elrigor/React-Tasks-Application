import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskCard from "./TaskCard";

function TaskList() {
  const { tasks } = useContext(TaskContext);

  if (tasks.length == 0) {
    return "No hay tareas aún";
  }
  return (
    <div>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
