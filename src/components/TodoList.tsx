import React, { useEffect } from "react";
import "./todolist.scss";
type todoListType = {
  list: string[];
  handleDelete: (index: number) => void;
};
export default function TodoList(props: todoListType) {
  return (
    <div className="todolist">
      {props.list.map((todo, index) => (
        <div key={index}>
          <p>{todo}</p>
          <span onClick={() => props.handleDelete(index)}>delete</span>
        </div>
      ))}
    </div>
  );
}
