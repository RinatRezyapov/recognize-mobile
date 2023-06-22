export const parseCursor = (cursor: string): {type: string; _id: string} => {
  const arr = Buffer.from(cursor, 'base64').toString('utf-8').split(':');
  if (arr.length !== 2) throw new Error(`Error parsing cursor ${cursor}`);
  return {type: arr[0], _id: arr[1]};
};
