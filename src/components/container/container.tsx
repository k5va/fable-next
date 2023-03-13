import React, { PropsWithChildren } from "react";

type ContainerProps = PropsWithChildren;

export const Container = ({ children }: ContainerProps): JSX.Element => {
  return (
    <div className="my-0 mx-auto h-full max-w-[1440px] py-0 px-14 medium:px-5">
      {children}
    </div>
  );
};
