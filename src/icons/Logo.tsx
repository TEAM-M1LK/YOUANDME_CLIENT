import classNames from "classnames";
import React from "react";

const Logo = ({ className }: { className?: string }) => {
  return (
    <img
      className={classNames(
        "transition-all duration-300 ease-in-out group-hover:scale-110",
        className
      )}
      src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Pink%20Heart.png"
      alt="Pink Heart"
    />
  );
};

export default Logo;
