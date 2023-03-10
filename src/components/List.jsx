import { useDispatch } from "react-redux";
import React from "react";
import { useSelector } from "react-redux";
import { eraseItem } from "../slices/listItems";
import { Link } from "react-router-dom";
import MovieModal from "./Modal";

export default function Listado() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);

  return (
    <div className="container p-0">
      <ul className="listItem p-0">
        {items.map((item, index) => {
          return (
            <div
              key={item.index}
              className="list d-flex justify-content-evenly  bg-white mt-3   col-12 w-100 p-0 py-5"
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
      <MovieModal />
    </div>
  );
}
