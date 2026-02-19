import React, { useState, useTransition } from "react";
import { useFetch } from "./useFetch";
import { EnumMethod } from "./types";
import { Comments } from "./Comments";
import { filterBySearch } from "./filterBySearch";

export const Mike = () => {
  const [search, setSearch] = useState("");
  // const [isPending, startTransition] = useTransition();
  const { data, isLoading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/comments",
    EnumMethod.GET,
  );

  const handleSearch = (
    e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => {
    // startTransition(() => {
    //   // Помечаем, как не срочный
    //   setSearch(e.target.value);
    // });
    setSearch(e.target.value);
  };

  return (
    <div>
      Mike
      <input onChange={handleSearch} type="text" />
      {/* {isPending && <h1>Загрузка...</h1>} */}
      <Comments comments={filterBySearch(data, search)} />
    </div>
  );
};
