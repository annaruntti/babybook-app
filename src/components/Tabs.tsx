import { TabButton } from "./TabButton";
import { data } from "../tabs";
import { useState } from "react";

type Tab = {
  id: string;
  name: string;
  icon: string;
  isActive: boolean;
  path: string;
};

export const Tabs = () => {
  const [tabs, setTabs] = useState<Tab[]>(data);

  const handleTabActive = (id: string) => {
    const updateTabs = tabs.map((tab) => {
      return {
        ...tab,
        isActive: tab.id === id,
      };
    });
    setTabs(updateTabs);
  };
  return (
    <div className="flex tabs">
      {tabs.map((tab) => (
        <TabButton
          key={tab.id}
          tab={tab}
          handleTabActive={handleTabActive}
        ></TabButton>
      ))}
    </div>
  );
};
