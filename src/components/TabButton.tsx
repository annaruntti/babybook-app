import React from "react";

type Tab = {
  id: string;
  name: string;
  icon: string;
  isActive: boolean;
};

type TabProps = {
  tab: Tab;
  handleTabActive: (id: string) => void;
};

export const TabButton = ({ tab: { name, icon, isActive } }: TabProps) => (
  <div className="p-2">
    <div className="items-center">
      <button
        className={`rounded-full bg-orange-400 shadow-md ${
          isActive ? "tabBtnActive" : "tabBtn"
        }`}
        aria-label={name}
        onClick={() => isActive}
        onChange={() => null}
      >
        <svg className="w-6 h-6 ml-auto mr-auto dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={icon}></path></svg>
      </button>
    </div>
    <div>
      <span>{name}</span>
    </div>
  </div>
);
