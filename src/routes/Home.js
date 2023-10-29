import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToDo, deleteToDo } from "../store";
import { Link } from "react-router-dom";

const Home = () => {
  const [text, setText] = useState("");
  const toDos = useSelector((state) => state);
  const dispatch = useDispatch();

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addToDo(text));
    setText("");
  };

  const onBtnClick = (e) => {
    const id = parseInt(e.target.parentNode.id);
    dispatch(deleteToDo(id));
  };

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <>
            <li key={toDo.id} id={toDo.id}>
              <Link to={`/${toDo.id}`}>{toDo.text}</Link>
              <button onClick={onBtnClick}>DEL</button>
            </li>
          </>
        ))}
      </ul>
    </>
  );
};

export default Home;
