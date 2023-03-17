import { createContext } from "react";

type TabsContextProps = {
  selected: boolean;
  onClick?: () => void;
};

export const TabsContext = createContext<TabsContextProps>({
  selected: false,
});
