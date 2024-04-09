import { useState } from "react";
import "../styles.css";

function Card() {
  const [current, setCurrent] = useState("All");
  const [todos, setTodos] = useState([
    { text: "finish css", status: "done" },
    { text: "finish logic", status: "not_done" },
    { text: "finish readme", status: "not_done" },
  ]);

  return (
    <>
      <div className="card-wrapper">
        <div className="card-active">
          <input placeholder="what needs to be done?" className="input" />
          <div className="list">
            {todos &&
              todos.map((todo) => {
                return (
                  <div className="todo">
                    <div className="status">{todo.status}</div>
                    <div className="text">{todo.text}</div>
                  </div>
                );
              })}
          </div>
          <div className="footer">
            <div className="counter"> x left</div>
            <div className="switch">
              <a
                className={current === "All" && "active"}
                onClick={() => setCurrent("All")}
              >
                All
              </a>
              <a
                className={current === "Active" && "active"}
                onClick={() => setCurrent("Active")}
              >
                Active
              </a>
              <a
                className={current === "Completed" && "active"}
                onClick={() => setCurrent("Completed")}
              >
                Completed
              </a>
            </div>
            <div className="clear">Clear completed</div>
          </div>
        </div>

        <div className="card-notactive-1">card</div>
        <div className="card-notactive-2">card</div>
      </div>
    </>
  );
}

export default Card;
