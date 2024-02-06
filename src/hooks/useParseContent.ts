export const useParseContent = () => {
  const parseContent = (file: File) => {
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
            const [date, detail] = sample.split(", ");
            if (!detail) return null;
            const [author, content] = detail.split(" : ");
            return { author, content, date };
          })
          .filter((content) => content != null);
        return result;
      }
    });
    reader.readAsText(file);
    return [];
  };

  return { parseContent };
};
