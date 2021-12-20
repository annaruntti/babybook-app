import React from "react";

type Tab = {
  id: string;
  name: string;
  isActive: boolean;
};

type TabProps = {
  tab: Tab;
  handleTabActive: (id: string) => void;
};

export const TabButton = ({ tab: { name, isActive } }: TabProps) => (
  <div className="p-2">
    <div>
      <button
        className={`rounded-full bg-orange-400 shadow-md ${
          isActive ? "tabBtnActive" : "tabBtn"
        }`}
        aria-label={name}
        onClick={() => isActive}
        onChange={() => null}
      >
        +
      </button>
    </div>
    <div>
      <span>{name}</span>
    </div>
  </div>
);
