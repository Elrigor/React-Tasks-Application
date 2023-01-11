import { useState } from "react";

function TaskForm({ createTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    createTask(title, description);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Escribe tu título"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        placeholder="Escribe tu descripción"
        onChange={(e) => setDescription(e.target.value)}
      />      
      <button>Guardar</button>
    </form>
  );
}

export default TaskForm;
