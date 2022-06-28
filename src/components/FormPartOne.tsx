function FormPartOne() {
  return (
    <form id="FormPartOne" onSubmit={() => null}>
      <p className="mb-2">
        Maija syntyi 1.5.2021. Ensimmäiset päivämme alkoivat näin:
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
