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
  <button aria-label={name} onClick={() => isActive} onChange={() => null}>
    {name}
  </button>
);
