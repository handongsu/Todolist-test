import "List.css";
import Item from "./Item";
import { useState } from "react";

interface TodosProps {
  id: number;
  isDone: boolean;
}

const List = () => {
  const [todos, setTodos] = useState<TodosProps[]>([]);
  return (
    <div className="List">
      {todos.map((todo) => (
        <Item key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default List;
