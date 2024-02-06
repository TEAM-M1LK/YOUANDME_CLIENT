import classNames from "classnames";
import React, { HTMLAttributes } from "react";

interface ChatProps extends HTMLAttributes<HTMLDivElement> {
  author: string;
}

const Chat = ({ author, children, className }: ChatProps) => {
  return (
    <div
      className={classNames(
        "w-fit py-3 px-5 max-w-[70%] text-white font-normal break-words ",
        author === "me"
          ? "bg-[#FF61BF] round-me ml-auto"
          : "bg-[#6E33F4] round-you mr-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Chat;
