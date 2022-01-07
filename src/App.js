import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => {
    setToDo(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]); //현재 todos 배열에 새로운 todo 추가.
    setToDo("");
  };

  return (
    <div>
      <h1>Task: {toDos.length}</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={toDo}
          onChange={onChange}
          placeholder="What's your today's plan?"
        />
        <br />
        <button>Add</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
