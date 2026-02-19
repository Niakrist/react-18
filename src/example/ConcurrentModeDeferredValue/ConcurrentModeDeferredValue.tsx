import React, { useDeferredValue, useMemo, useState } from "react";
import { defaultItems } from "./defaultItems";

// useDeferredValue позволяет отложить обновление значения (и, соответственно, части интерфейса, которая от этого значения зависит),
// чтобы более важные обновления обрабатывались с большим приоритетом.
// useDeferredValue решает
// есть поле поиска и огромный список, который фильтруется при каждом нажатии клавиши.
// Без оптимизации интерфейс будет "тормозить", потому что React занят перерисовкой списка и не успевает обрабатывать ввод текста.

export const DeferredValue = () => {
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
