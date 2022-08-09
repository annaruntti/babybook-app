import { useState } from "react";
import { childBasicData } from "../childBasicData";

type Child = {
  id: string;
  name: string;
  bDate: string;
};

function FormPartOne() {
  const child = useState<Child[]>(childBasicData);
  return (
    <form id="FormPartOne" onSubmit={() => null}>
      <p className="mb-2">
        Matti syntyi 1.5.2021. Ensimmäiset päivämme alkoivat näin:
      </p>
      <div>
        <label className="sr-only" htmlFor="firstday">
          Ensimmäisten päivien tapahtumia
        </label>
      </div>
      <div>
        <textarea
          className="w-full text-area"
          name="firstdays"
          id="firstdays"
        />
      </div>
      <button
        className="submit-btn w-full shadow-md"
        type="submit"
        aria-label="Tallenna ja jatka"
      >
        Tallenna ja jatka
      </button>
    </form>
  );
}

export default FormPartOne;
