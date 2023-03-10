import { useDispatch } from "react-redux";
import React from "react";
import { useSelector } from "react-redux";
import { eraseItem } from "../slices/listItems";
import { Link } from "react-router-dom";

export default function Listado() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);

  return (
    <>
      <ul className="listItem">
        {items.map((item, index) => {
          return (
            <div
              key={item.index}
              className="listItem d-flex justify-content-evenly border bg-white mt-3 container p-5 col-12 border-primary border-0 border-top-1"
            >
              <input type="checkbox"></input>
              <Link to={`/${item.id}`}>
                <li className="px-3 pt-2 m-0 list-group-item">{item.title}</li>
              </Link>
              <button
                className="btn"
                type="button"
                onClick={() => dispatch(eraseItem(item.id))}
              >
                <i class="fa-solid fa-trash"></i>
              </button>
            </div>
          );
        })}
      </ul>
    </>
  );
}
