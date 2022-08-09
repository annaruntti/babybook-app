import { BrowserRouter as Router, Link } from "react-router-dom";

type Tab = {
  id: string;
  name: string;
  icon: string;
  isActive: boolean;
  path: string;
};

type TabProps = {
  tab: Tab;
  handleTabActive: (id: string) => void;
};

export const TabButton = ({
  tab: { name, icon, isActive, path, id },
  handleTabActive,
}: TabProps) => (
  <div className="p-2">
    <div className="items-center">
      <Link to={path}>
        <button
          className={`rounded-full shadow-md ${
            isActive ? "tabBtnActive" : "tabBtn"
          }`}
          aria-label={name}
          onClick={() => handleTabActive(id)}
          onChange={() => null}
        >
          <svg
            className="w-6 h-6 ml-auto mr-auto dark:text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d={icon}
            ></path>
          </svg>
        </button>
      </Link>
    </div>
    <div className={` ${isActive ? "tabTextActive" : "tabText"}`}>
      <span>{name}</span>
    </div>
  </div>
);
