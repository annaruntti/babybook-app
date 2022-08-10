function LoginForm() {
  return (
    <form className="pt-4" id="LoginForm" onSubmit={() => null}>
      <div>
        <label className="mb-2" htmlFor="email">
          Sähköpostiosoite
        </label>
      </div>
      <div className="mb-4">
        <input
          className="w-full text-input"
          type="email"
          name="email"
          id="email"
        />
      </div>
      <div>
        <label className="mb-2" htmlFor="password">
          Salasana
        </label>
      </div>
      <div className="mb-4">
        <input
          className="w-full text-input"
          type="password"
          name="password"
          id="password"
        />
      </div>
      <button
        className="submit-btn w-full shadow-md"
        type="submit"
        aria-label="Kirjaudu sisään"
      >
        Kirjaudu sisään
      </button>
    </form>
  );
}

export default LoginForm;
