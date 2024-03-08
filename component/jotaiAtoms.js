import { atom } from "jotai";

export const countAtom = atom(0);
export const userProfileAtom = atom({
  name: "John Doe",
  email: "john@example.com",
});
