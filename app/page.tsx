"use client";

import { useChat } from "ai/react";
import { Bot, Loader2, Send, User2 } from "lucide-react";

const HomePage = () => {
  const { messages, input, handleInputChange, handleSubmit, isLoading, stop } =
    useChat({
      api: "api/genai",
    });
  return (
    <div className="flex items-center flex-col w-full min-h-screen lg:gap-y-10 p-20">
      {RenderForm()}
      {RenderMessage()}
    </div>
  );

  function RenderForm() {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e, {
            data: {
              prompt: input,
            },
          });
        }}
        className="w-full h-full flex flex-row gap-2 items-center"
      >
        <input
          value={input}
          onChange={handleInputChange}
          type="text"
          placeholder={isLoading ? "Generating..." : "Ask me something..."}
          disabled={isLoading}
          className="border-b border-dashed outline-none w-full px-2 py-4 text-purple-700 placeholder:text-purple-300 focus:placeholder-transparent disabled:bg-transparent"
        />
        <button
          type="submit"
          className="flex flex-row rounded-full shadow-md border"
        >
          {isLoading ? (
            <Loader2
              onClick={stop}
              className="stroke-stone-500 p-3 h-10 w-10 animate-spin"
            />
          ) : (
            <Send className="stroke-stone-500 p-3 h-10 w-10" />
          )}
        </button>
      </form>
    );
  }

  function RenderMessage() {
    return (
      <div className="flex flex-col-reverse w-full text-left mt-4 gap-4 whitespace-pre-wrap">
        {messages.map((m, idx) => (
          <div
            className={`p-4 shadow-md rounded-md ml-10 relative ${
              m.role === "user" ? "bg-stone-300" : ""
            }`}
          >
            {m.content}
            {m.role === "user" ? (
              <User2 className="absolute top-2 -left-10 border rounded-full p-1 shadow-lg h-8 w-8" />
            ) : (
              <Bot className="absolute top-2 -left-10 border rounded-full p-1 shadow-lg text-purple-700 h-8 w-8" />
            )}
          </div>
        ))}
      </div>
    );
  }
};

export default HomePage;
