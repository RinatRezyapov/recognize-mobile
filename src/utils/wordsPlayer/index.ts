export const getWordsFromString = (str: string) => {
  return str
    .replace(/[^\w\s]|_/g, '')
    .replace(/\s+/g, ' ')
    .toLowerCase()
    .split(' ');
};

export const selectRandomWords = (arr: string[], num: number): string[] => {
  if (arr.length <= num) return arr;

  const selected = new Set<string>();

  while (selected.size < num) {
    const index = Math.floor(Math.random() * arr.length);
    selected.add(arr[index]);
  }

  return Array.from(selected);
};
