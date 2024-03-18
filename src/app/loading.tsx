const Loading = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="grid grid-cols-2 justify-center items-center gap-2 rounded-full">
        <span className="h-5 w-5 rounded-tl-full bg-primary animate-[ping_1.4s_linear_infinite]"></span>
        <span className="h-5 w-5 rounded-tr-full bg-primary animate-[ping_1.8s_linear_infinite]"></span>
        <span className="h-5 w-5 rounded-bl-full bg-primary animate-[ping_2.2s_linear_infinite]"></span>
        <span className="h-5 w-5 rounded-br-full bg-primary animate-[ping_2.6s_linear_infinite]"></span>
      </div>
    </div>
  );
};

export default Loading;
