import React, { useDeferredValue, useMemo, useState } from "react";
import { defaultItems } from "./defaultItems";

export const ConcurrentModeDeferredValue = () => {
  const [value, setValue] = useState("");
  const [items] = useState(defaultItems);
  const deferredValue = useDeferredValue(value);

  const filterItems = useMemo(() => {
    return items.filter((item) =>
      item.name.toLocaleLowerCase().includes(deferredValue),
    );
  }, [items, deferredValue]);

  const onChangeValue = (
    e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => {
    setValue(e.target.value);
  };

  return (
    <>
      <input type="text" value={value} onChange={onChangeValue} />

      <div>
        {filterItems.map((item) => (
          <div key={item.id}>
            <div>id = {item.id}</div>
            <div>item = {item.name}</div>
          </div>
        ))}
      </div>
    </>
  );
};
