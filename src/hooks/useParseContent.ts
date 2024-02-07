import { useAtom } from "jotai";
import { context } from "../context";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import "dayjs/locale/ko";
dayjs.extend(utc);

export const useParseContent = () => {
  const navigate = useNavigate();
  const [, setInfo] = useAtom(context);

  const parseContent = async (file: File) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      const content = reader.result;
      if (content && typeof content === "string") {
        const contentArray = content.split("\n");
        const { length } = contentArray;
        const contents = contentArray.slice(6, length);

        const result = contents
          .filter((text: string) => text !== "\r")
          .map((originalText: string) => {
            const sample = originalText.replaceAll("\r", "");
            let [date, detail] = sample.split(", ");
            if (!detail) return null;
            const [sender, content] = detail.split(" : ");
            console.log(date);
            if (date.includes("오후")) date += " PM";
            else if (date.includes("오전")) date += " AM";

            const pd = date
              .replace("년 ", "-")
              .replace("월 ", "-")
              .replace("일 ", "")
              .replace("오후", "")
              .replace("오전", "");

            console.log(pd);
            const parsedDate = dayjs.utc(pd, "YYYY-M-D h:mm A").format();
            if (!content) return null;
            return {
              sender,
              content,
              date: new Date(parsedDate).toUTCString(),
            };
          })
          .filter((content) => content != null);

        const clean = result.filter((r) => r != null);

        setInfo((prev) => ({
          ...prev,
          contents: clean as any,
        }));
        navigate("/analysis");
      }
    });
    reader.readAsText(file);
  };

  return { parseContent };
};
