import not_done_icon from "../imgs/not_done.png";
import done_icon from "../imgs/done.png";

function List(props) {
  const todos = props.todos;
  const id = props.id;
  const active = todos.filter((todo) => todo.status === "not_done");
  const completed = todos.filter((todo) => todo.status === "done");
  const changeStatus = (id, todo) => {
    const updatedTodos = todos.map((todo) => {
      if (id === todo.id) {
        return todo.status === "not_done"
          ? { ...todo, status: "done" }
          : { ...todo, status: "not_done" };
      }
      return todo;
    });
    props.setTodos(updatedTodos);
  };

  const manageIcon = (status) => {
    const icon = status === "not_done" ? not_done_icon : done_icon;

    return icon;
  };

  return (
    <>
      <div className="list">
        {id === "All" &&
          todos.map((todo) => {
            return (
              <div className="todo">
                <img
                  src={manageIcon(todo.status)}
                  className="status"
                  onClick={() => changeStatus(todo.id, todo)}
                />
                <div className="text">{todo.text}</div>
              </div>
            );
          })}
        {id === "Active" &&
          active.map((todo) => {
            return (
              <div className="todo">
                <img
                  src={manageIcon(todo.status)}
                  className="status"
                  onClick={() => changeStatus(todo.id, todo)}
                />

                <div className="text">{todo.text}</div>
              </div>
            );
          })}
        {id === "Completed" &&
          completed.map((todo) => {
            return (
              <div className="todo">
                <img
                  src={manageIcon(todo.status)}
                  className="status"
                  onClick={() => changeStatus(todo.id, todo)}
                />
                <div className="text">{todo.text}</div>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default List;
