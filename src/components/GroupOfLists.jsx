import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import React from "react";
import { addItem } from "../slices/listItems";
function GroupOfLists() {
  const dispatch = useDispatch();

  const [items, setItems] = React.useState();

  return (
    <div className="container d-flex flex-column p-0">
      <h1>Lists</h1>
      <form action="" className="d-flex ">
        <input
          className="form-control "
          type="text"
          onChange={(event) => {
            setItems(event.target.value);
          }}
        />
        <button
          type="button"
          className="btn bg-light border m-0"
          onClick={() => dispatch(addItem({ id: nanoid(), title: items }))}
        >
          +
        </button>
      </form>
    </div>
  );
}
export default GroupOfLists;
