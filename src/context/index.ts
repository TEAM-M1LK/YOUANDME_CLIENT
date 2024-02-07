import { atom } from "jotai";

export const defaultContext = {
  my_name: "",
  your_name: "",
  guess_relation: "",
  contents: [],
};

export const context = atom(defaultContext);

export const resultContext = atom({
  analysis_time: 0.08060812950134277,
  more_faster_replier: "",
  more_alot_chatter: "",
  my: {
    name: "우빈",
    final_relation: "friend",
    result: {
      lover: 15.07511604588794,
      some: 15.465410312448146,
      friend: 69.45947364166392,
      business: 0.0,
    },
    conversation_count: 570,
    reply_time: 2032800.0,
    reply_time_average: 3566.315789473684,
  },
  you: {
    name: "강지원",
    final_relation: "friend",
    result: {
      lover: 0.0,
      some: 15.28916090241346,
      friend: 68.93006530442024,
      business: 15.780773793166306,
    },
    conversation_count: 594,
    reply_time: 2552880.0,
    reply_time_average: 3422.222222222222,
  },
});
