function BasicInfoForm() {
  return (
    <form id="BasicInfoForm" onSubmit={() => null}>
      <div>
        <label className="mb-2" htmlFor="name">
          Lapsen nimi
        </label>
      </div>
      <div className="mb-4">
        <input className="w-full text-input" name="name" id="name" />
      </div>
      <div>
        <label className="mb-2" htmlFor="bdate">
          Lapsen syntymäaika
        </label>
      </div>
      <div className="mb-4">
        <input className="w-full text-input" name="bdate" id="bdate" />
      </div>
      <div className="mb-4">
        <label className="mb-2" htmlFor="childimage">
          Lataa lapsestasi kuva vauvana!
        </label>
      </div>
      <div className="mb-4">
        <input
          type="file"
          accept="image/png, image/gif, image/jpeg"
          className="w-full"
          name="childimage"
          id="childimage"
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

export default BasicInfoForm;
