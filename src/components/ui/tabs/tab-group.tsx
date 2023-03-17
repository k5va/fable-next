import React, { Children, PropsWithChildren, useState } from "react";
import { TabsContext } from "./context/tabs-context";

const DEFAULT_SELECTED_TAB = 0;

type TabGroupProps = PropsWithChildren;

export const TabGroup = ({ children }: TabGroupProps): JSX.Element => {
  const [selectedTab, setSelectedTab] = useState(DEFAULT_SELECTED_TAB);

  return (
    <div
      className="
        flex flex-wrap content-start gap-4 font-normal
        small:flex-col small:flex-nowrap"
    >
      {Children.map(children, (tab, i) => {
        return (
          <TabsContext.Provider
            value={{
              selected: selectedTab === i,
              onClick: () => setSelectedTab(i),
            }}
          >
            {tab}
          </TabsContext.Provider>
        );
      })}
    </div>
  );
};
