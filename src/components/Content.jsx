import { useDispatch } from "react-redux";
import React from "react";
import { useSelector } from "react-redux";
import { eraseContent } from "../slices/listContent";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
export default function Content() {
  const dispatch = useDispatch();
  const content = useSelector((state) => state.content);
  const params = useParams();
  return (
    <>
      <ul className="listItem">
        {content
          .filter((element) => element.listId === params.itemId)
          .map((content, index) => {
            return (
              <div
                key={content.index}
                className="listItem d-flex justify-content-center border mt-3"
              >
                <input type="checkbox"></input>

                <li className="px-3 pt-2 m-0 list-group-item">
                  {content.name}
                </li>

                <button
                  className="btn"
                  type="button"
                  onClick={() => dispatch(eraseContent(content.id))}
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
