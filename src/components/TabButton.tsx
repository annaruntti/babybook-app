type Tab = {
  id: string;
  name: string;
  isActive: boolean;
};

type TabProps = {
  tab: Tab;
};

export const TabButton = ({ tab: { name, isActive } }: TabProps) => (
  <button aria-label={name} onClick={() => isActive} onChange={() => null}>
    {name}
  </button>
);
