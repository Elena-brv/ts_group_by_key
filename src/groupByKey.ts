interface Item {
  [key: string]: any;
}

interface NewItem {
  [key: string]: Item[];
}

export function groupByKey(items: Item[], field: keyof Item): object {
  const result: NewItem = {};

  items.forEach((item: Item) => {
    if (!(item[field] in result)) {
      result[item[field]] = [];
    }

    result[item[field]].push(item);
  });

  return result;
}
