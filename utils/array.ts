import { SortType } from "~/interfaces";

export const sortArrayOfObject = <T extends any>(
  target: T[],
  key: keyof T,
  type: SortType,
): T[] => {
  let sortedArray: any[] = [];

  for (let index = 0; index < target.length; index++) {
    const element = target[index];
    sortedArray.push([element, target[index][key]]);
  }

  sortedArray.sort(function (a: any, b: any) {
    return type === 'Ascending' ? b[1] - a[1]: a[1] - b[1];
  });

  return sortedArray.map((sortedItem) => sortedItem[0]);
};
