import React from "react";

function FormPartOne() {
  return (
    <form id="FormPartOne" onSubmit={() => null}>
      <p className="mb-2">Maija syntyi 1.5.2021. Ensimmäiset päivämme alkoivat näin:</p>
      <div>
        <label htmlFor="firstday">Ensimmäisten päivien tapahtumia</label>
      </div>
      <div>
        <textarea className="w-full" name="firstdays" id="firstdays" />
      </div>
      <button
        className="rounded-md bg-violet-700 text-white p-2 w-full shadow-md"
        type="submit"
        aria-label="Tallenna ja jatka"
      >
        Tallenna ja jatka
      </button>
    </form>
  );
}

export default FormPartOne;
