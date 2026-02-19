import type { IComment } from "./types";

export const filterBySearch = (data: IComment[], searchTerm: string) => {
  return data.filter((item) =>
    item.name
      .concat(item.body)
      .toLocaleLowerCase()
      .includes(searchTerm.toLocaleLowerCase()),
  );
};
