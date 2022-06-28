import { TabButton } from "./TabButton";
import { data } from "../tabs";
import { useState } from "react";

type Tab = {
  id: string;
  name: string;
  icon: string;
  isActive: boolean;
};

export const Tabs = () => {
  const [tabs, setTabs] = useState<Tab[]>(data);

  const handleTabActive = (id: string) => {
    const updateTabs = tabs.map(tab => {
      if (tab.id === id) {
        return {
          ...tab,
          isActive: !tab.isActive,
        };
      }
      return tab;
    });
    setTabs(updateTabs);
  };
  return (
    <div className="flex">
      {data.map(tab => (
        <TabButton
          key={tab.id}
          tab={tab}
          handleTabActive={handleTabActive}
        ></TabButton>
      ))}
    </div>
  );
};
