import classNames from "classnames";
import React, { PropsWithChildren, useContext } from "react";
import { TabsContext } from "./context/tabs-context";

type TabProps = PropsWithChildren<{
  label: string;
}>;

export const Tab = ({ label, children }: TabProps): JSX.Element => {
  const { selected, onClick } = useContext(TabsContext);

  return (
    <>
      <label
        className={classNames(
          "cursor-pointer text-xl transition hover:-translate-y-[1px] hover:scale-110",
          {
            "opacity-30": !selected,
          }
        )}
      >
        <input
          className="hidden"
          type="radio"
          name="info"
          onClick={onClick}
          defaultChecked={selected}
        />
        {label}
      </label>
      <p
        className={classNames("order-1 small:order-none", {
          hidden: !selected,
        })}
      >
        {children}
      </p>
    </>
  );
};
