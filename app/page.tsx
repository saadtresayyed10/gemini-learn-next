import { Send } from "lucide-react";

const HomePage = () => {
  return (
    <div className="flex items-center flex-col w-full min-h-screen lg:gap-y-10 p-20">
      {RenderForm()}
      {RenderMessage()}
    </div>
  );
};

const RenderForm = () => {
  return (
    <form className="w-full h-full flex flex-row gap-2 items-center">
      <input
        type="text"
        placeholder="Ask me something..."
        className="border-b border-dashed outline-none w-full px-2 py-4 text-purple-700 placeholder:text-purple-300 focus:placeholder-transparent"
      />
      <button
        type="submit"
        className="flex flex-row rounded-full shadow-md border"
      >
        <Send className="stroke-stone-500 p-3 h-10 w-10" />
      </button>
    </form>
  );
};

const RenderMessage = () => {
  return <div></div>;
};

export default HomePage;
