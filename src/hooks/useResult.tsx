import Chat from "../components/Chat";

export const useResult = (result: any) => {
  const getFinallyRelation = () => {
    return "`배유정씨가 일해줄 곳`";
  };

  const getChatting = () => {
    return (
      <>
        <main className="w-full flex flex-col gap-2">
          <span className="ml-auto font-semibold">{result.my.name}</span>
          <Chat author="me">
            <img
              className="transition-all w-32 duration-300 ease-in-out group-hover:scale-110"
              src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Beaming%20Face%20with%20Smiling%20Eyes.png"
              alt="Beaming Face with Smiling Eyes"
            />
          </Chat>
          <Chat author="me">`배유정씨가 일해줄 곳`</Chat>
        </main>
        <main className="w-full flex flex-col gap-2">
          <span className="mr-auto font-semibold">{result.you.name}</span>
          <Chat author="you">
            <img
              className="transition-all w-32 duration-300 ease-in-out group-hover:scale-110"
              src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Grinning%20Face%20with%20Big%20Eyes.png"
              alt="Grinning Face with Big Eyes"
            />
          </Chat>
          <Chat author="you">`배유정씨가 일해줄 곳`</Chat>
        </main>
      </>
    );
  };

  const getKoreanRelation = (relation: string) => {
    switch (relation) {
      case "lover":
        return "알콩달콩 애인";
      case "some":
        return "썸타는 사이";
      case "friend":
        return "친구";
      case "business":
        return "비즈니스";
      default:
        return relation;
    }
  };

  const getConclusion = () => {
    return "`배유정씨가 일해줄 곳`";
  };

  return { getFinallyRelation, getChatting, getKoreanRelation, getConclusion };
};
