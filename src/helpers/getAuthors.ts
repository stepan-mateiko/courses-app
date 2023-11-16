import { mockedAuthorsList } from "../constants.ts";

export const getAuthor = (id: string): string | null => {
  const author = mockedAuthorsList.find((author) => author.id === id);
  return author ? author.name : null;
};
