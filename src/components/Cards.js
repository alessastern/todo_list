import { useEffect, useState } from "react";
import "../styles.css";

function Card() {
  const [current, setCurrent] = useState("All");
  const [todos, setTodos] = useState([
    { text: "finish css", status: "done" },
    { text: "finish logic", status: "not_done" },
    { text: "finish readme", status: "not_done" },
  ]);

  useEffect(() => {}, [current]);

  return (
    <>
      <div className="card-wrapper">
        <div className="card" id="All">
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

        <div className="card" id="Active">
          <input placeholder="what needs to be done?" className="input" />
          <div className="list"></div>
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
        <div className="card" id="Completed">
          <input placeholder="what needs to be done?" className="input" />
          <div className="list"></div>
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
      </div>
      ;
    </>
  );
}

export default Card;
