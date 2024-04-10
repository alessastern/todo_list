function List(props) {
  const todos = props.todos;
  const id = props.id;
  const active = todos.filter((todo) => todo.status === "not_done");
  const completed = todos.filter((todo) => todo.status === "done");

  return (
    <>
      <div className="list">
        {id === "All" &&
          todos.map((todo) => {
            return (
              <div className="todo">
                <div className="status">{todo.status}</div>
                <div className="text">{todo.text}</div>
              </div>
            );
          })}
        {id === "Active" &&
          active.map((todo) => {
            return (
              <div className="todo">
                <div className="status">{todo.status}</div>
                <div className="text">{todo.text}</div>
              </div>
            );
          })}
        {id === "Completed" &&
          completed.map((todo) => {
            return (
              <div className="todo">
                <div className="status">{todo.status}</div>
                <div className="text">{todo.text}</div>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default List;
