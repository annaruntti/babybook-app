import BasicInfoForm from "../components/BasicInfoForm";

export const Information = () => (
  <div>
    <h1 className="text-3xl font-bold text-center mb-4">
      Paljon onnea vauvasta!
    </h1>
    <h2 className="font-bold text-center mb-6">
      Tervetuloa käyttämään BabyBookkia. Aloita käyttäminen lisäämällä lapsesi
      perustiedot.
    </h2>
    <BasicInfoForm />
  </div>
);
