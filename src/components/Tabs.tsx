import { TabButton } from "./TabButton";
import { data } from "../tabs";

export const Tabs = () => {
  return (
    <section>
      {data.map(tab => (
        <TabButton key={tab.id} tab={tab}></TabButton>
      ))}
    </section>
  );
};
