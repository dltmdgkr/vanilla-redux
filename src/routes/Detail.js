import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Detail = () => {
  const param = useParams();
  const { id } = param;
  const todo = useSelector((state) => state);
  const detail = todo.find((item) => item.id === parseInt(id));

  return (
    <>
      <h1>{detail?.text}</h1>
      <h5>createdAt: {detail.id}</h5>
    </>
  );
};

export default Detail;
