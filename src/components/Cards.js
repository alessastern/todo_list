import { useEffect, useState } from "react";
import "../styles.css";
import Card from "./Card";

function Cards() {
  const [current, setCurrent] = useState("All");

  const [todos, setTodos] = useState([
    { id: 1, text: "finish css", status: "done" },
    { id: 2, text: "finish logic", status: "not_done" },
    { id: 3, text: "finish readme", status: "not_done" },
  ]);

  return (
    <div className="card-wrapper">
      <Card
        todos={todos}
        setTodos={setTodos}
        id="All"
        current={current}
        handler={setCurrent}
      />

      <Card
        todos={todos}
        setTodos={setTodos}
        id="Active"
        current={current}
        handler={setCurrent}
      />

      <Card
        todos={todos}
        setTodos={setTodos}
        id="Completed"
        current={current}
        handler={setCurrent}
      />
    </div>
  );
}

export default Cards;
