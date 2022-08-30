import gsap, { Power3 } from "gsap";
import { useEffect, useRef, useState } from "react";
import "./App.scss";
import TodoList from "./components/TodoList";
type todoListType = string[];
type todoInputType = string;
function App() {
  let inputRef = useRef(null);
  let logoRef = useRef(null);
  let buttonRef = useRef(null);
  let [todoInput, setTodoInput] = useState<todoInputType>("");
  let [todoList, setTodoList] = useState<todoListType>([]);
  let handleDelete = (index: number) => {
    todoList.splice(index, 1);
    setTodoList([...todoList]);
  };
  useEffect(() => {
    gsap.to([logoRef.current, inputRef.current, buttonRef.current], {
      duration: 0.6,
      y: 20,
      opacity: 1,
      ease: Power3.easeInOut,
      stagger: 0.2,
    });
  }, []);

  return (
    <div className="app">
      <header className="header">
        <h3 ref={logoRef}>TODO.</h3>
      </header>

      <section className="todo__input">
        <input
          type="text"
          name="todoInput"
          value={todoInput}
          onChange={(e) => {
            setTodoInput(e.target.value);
          }}
          ref={inputRef}
        />
        <button
          onClick={() => {
            if (todoInput)
              setTodoList((preState) => {
                return [...preState, todoInput];
              });
            setTodoInput("");
            console.log(todoList);
          }}
          ref={buttonRef}
        >
          Add
        </button>
      </section>
      <section className="todo__list">
        <TodoList list={todoList} handleDelete={handleDelete} />
      </section>
    </div>
  );
}

export default App;
