import { ReactNode } from "react";

type TContainerProps = {
  children: ReactNode;
};
const Container = ({ children }: TContainerProps) => {
  return (
    <div className=" w-full max-w-7xl mx-auto  md:px-10 px-4 mb-10">
      {children}
    </div>
  );
};

export default Container;
