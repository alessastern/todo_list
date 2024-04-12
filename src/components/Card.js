import "../styles.css";
import List from "./List";

function Card(props) {
  const todos = props.todos;
  const id = props.id;
  const current = props.current;
  const setTodos = props.setTodos;
  const active = props.active;
  const counter = active.length;

  const addTodo = (todos, text) => {
    const newTodo = {
      id: Math.random(),
      text: text,
      status: "not_done",
    };
    setTodos([...todos, newTodo]);
  };

  const handleEnter = (todos, e, text) => {
    if (e.key === "Enter") {
      addTodo(todos, text);
      document.getElementById("input").value = "";
    }
  };

  return (
    <>
      <div className="active-card">
        <input
          id="input"
          type="text"
          placeholder="what needs to be done?"
          className="input"
          onKeyDown={(e) => {
            console.log(active);
            handleEnter(todos, e, e.target.value);
          }}
        />
        {todos && <List todos={todos} id={id} setTodos={setTodos} />}
        <div className="footer">
          <div className="counter">
            {`${counter} ${counter === 1 ? "item left" : "items left"}`}
          </div>
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
          <div
            className="clear"
            onClick={() =>
              setTodos(todos.filter((todo) => todo.status === "not_done"))
            }
          >
            Clear completed
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
