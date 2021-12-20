import React from "react";

function FormPartOne() {
  return (
    <form id="FormPartOne" onSubmit={() => null}>
      <p>Maija syntyi 1.5.2021. Ensimmäiset päivämme alkoivat näin:</p>
      <div>
        <label htmlFor="firstday">Ensimmäisten päivien tapahtumia</label>
      </div>
      <div>
        <textarea className="w-full" name="firstdays" id="firstdays" />
      </div>
      <button type="submit" aria-label="Tallenna ja jatka">
        Tallenna ja jatka
      </button>
    </form>
  );
}

export default FormPartOne;
