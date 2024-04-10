import { useState } from "react";
import "../styles.css";
import List from "./List";

function Card(props) {
  const todos = props.todos;
  const id = props.id;
  const current = props.current;
  const setTodos = props.setTodos;
  const [text, setText] = useState("");

  const addTodo = (todos, text) => {
    todos.push([...todos], {
      id: Math.random(),
      text: text,
      status: "not_done",
    });
  };

  const handleEnter = (todos, e, text) => {
    if (e.key === "Enter") addTodo(todos, text);
  };

  return (
    <>
      <div className={current === id ? "active-card" : "card"}>
        <input
          type="text"
          placeholder="what needs to be done?"
          className="input"
          onKeyDown={(e) => {
            handleEnter(todos, e, e.target.value);
          }}
        />
        {todos && <List todos={todos} id={id} setTodos={setTodos} />}
        <div className="footer">
          <div className="counter"> x left</div>
          <div className="switch">
            <a
              className={current === "All" && "active"}
              onClick={() => props.handler("All")}
            >
              All
            </a>
            <a
              className={current === "Active" && "active"}
              onClick={() => props.handler("Active")}
            >
              Active
            </a>
            <a
              className={current === "Completed" && "active"}
              onClick={() => props.handler("Completed")}
            >
              Completed
            </a>
          </div>
          <div className="clear">Clear completed</div>
        </div>
      </div>
    </>
  );
}

export default Card;
