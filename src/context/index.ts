import { atom } from "jotai";

export const context = atom({
  me: "",
  you: "",
  guess_relation: "",
  content: [{ author: "", content: "", date: new Date() }],
});

export const resultContext = atom({
  relation: "Friend",
  me: "Friend",
  me_name: "우빈",
  me_detail: { Love: 0, Friend: 0, Some: 0, Business: 0 },
  you: "Friend",
  you_name: "유정",
  you_detail: { Love: 0, Friend: 0, Some: 0, Business: 0 },
  me_count: 10,
  you_count: 10,
  me_speed: 1,
  you_speed: 1,
  me_top_centence: ["첫번째문장", "두번째 문장", "세번재 문장"],
  you_top_centence: ["첫번째문장", "두번째 문장", "세번재 문장"],
});
