import { useState } from "react";
import "../styles.css";
import Card from "./Card";

function Cards() {
  const [current, setCurrent] = useState("All");

  const [todos, setTodos] = useState([
    { id: 1, text: "finish css", status: "done" },
    { id: 2, text: "finish logic", status: "not_done" },
    { id: 3, text: "finish readme", status: "not_done" },
  ]);

  const active = todos
    ? todos.filter((todo) => todo.status === "not_done")
    : "";

  const [completed, setCompleted] = useState(() => {
    return todos ? todos.filter((todo) => todo.status === "done") : "";
  });

  return (
    <div className="card-wrapper">
      <Card
        todos={todos}
        setTodos={setTodos}
        id={current}
        current={current}
        handler={setCurrent}
        active={active}
      />
      <div className="card-notactive1"></div>
      <div className="card-notactive2"></div>
    </div>
  );
}

export default Cards;
