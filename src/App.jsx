import { useState } from "react";
import imgSrc1 from "./assets/delete.png";
import imgSrc2 from "./assets/pen.png";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setnewTodo] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  function addTodo(e) {
    e.preventDefault();
    if (newTodo.trim() !== "") {
      if (editIndex !== null) {
        const updatedTodos = [...todos];
        updatedTodos[editIndex] = newTodo;
        setTodos(updatedTodos);
        setEditIndex(null);
      } else {
        setTodos([...todos, newTodo]);
      }
      setnewTodo("");
    }
  }
  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const editTodo = (index) => {
    setnewTodo(todos[index]);
    setEditIndex(index);
  };
  return (
    <>
      <div>
        <div className="border-4 border-double border-white rounded-lg w-96 mt-16 flex flex-col justify-center items-center">
          <h1 className="text-lg text-white">Todo list</h1>
          <form onSubmit={addTodo}>
            <input
              type="text"
              placeholder="what to do add task ?"
              value={newTodo}
              className="w-60 flex-row p-2 rounded-l-lg border-none focus:outline-dotted"
              onChange={(e) => setnewTodo(e.target.value)}
            />
            <button
              type="submit"
              className="p-2 bg-orange-500 mb-5 mt-4 rounded-r-lg"
            >
              add task
            </button>
          </form>
        </div>
        <div>
          <ul>
            {todos.map((todo, index) => (
              <li
                key={index}
                className="border-4 border-double border-white rounded-lg w-96 mt-2 p-1"
              >
                <div className="flex justify-between">
                  {todo}
                  <div className="flex">
                    <button>
                      <img
                        src={imgSrc2}
                        alt="delete"
                        className="mr-1"
                        onClick={() => editTodo(index)}
                      />
                    </button>
                    <button>
                      <img
                        src={imgSrc1}
                        alt="delete"
                        className=""
                        onClick={() => removeTodo(index)}
                      />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
