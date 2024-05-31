import { useState } from "react";
import "./App.css";
import List from "./components/List";

function App() {
  const [text, setText] = useState<string>("");

  const InputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onsubmit = () => {};

  return (
    <div className="App">
      <div>
        <input
          type="text"
          placeholder="todolist 작성"
          onChange={InputChangeHandler}
          value={text}
        />
        <button onSubmit={onsubmit}>추가</button>
      </div>
      <List />
    </div>
  );
}

export default App;
