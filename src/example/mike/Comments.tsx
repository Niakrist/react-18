import React, { useDeferredValue } from "react";
import type { IComment } from "./types";

export const Comments = ({ comments }: { comments: IComment[] }) => {
  // Принимаем значени
  const deferredValue = useDeferredValue(comments);

  // Самодельный флаг для заглушки
  const isSlate = comments !== deferredValue;

  return (
    <>
      {isSlate ? (
        <h3>redering</h3>
      ) : (
        <ul>
          {deferredValue.map((comment) => (
            <li key={comment.id}>
              <h3>{comment.name}</h3>
              <p>{comment.body}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
