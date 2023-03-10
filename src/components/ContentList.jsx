import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import React from "react";
import { addContent, eraseContent } from "../slices/listContent";
import { useParams } from "react-router-dom";
function ContentList() {
  const dispatch = useDispatch();
  const params = useParams();
  console.log(params);
  const [content, setContent] = React.useState();
  return (
    <div className="container">
      <h1>Listas</h1>
      <form action="" className="d-flex text-center col-12">
        <input
          className="form-control w-100"
          type="text"
          onChange={(event) => {
            setContent(event.target.value);
          }}
        />
        <button
          type="button"
          className="btn bg-light border"
          onClick={() =>
            dispatch(
              addContent({ id: nanoid(), name: content, listId: params.itemId })
            )
          }
        >
          +
        </button>
      </form>
    </div>
  );
}
export default ContentList;
