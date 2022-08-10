import { BrowserRouter as Router, Link } from "react-router-dom";

export const LandingPage = () => (
  <div>
    <h1 className="text-3xl font-bold text-center mb-4">
      Tervetuloa Babybookkiin!
    </h1>
    <h2 className="font-bold text-center mb-6">
      Aloita luomalla käyttäjätunnus tai kirjautumalla sisään.
    </h2>
    <button className="register-btn w-full shadow-md" aria-label="Luo tunnus">
      Luo tunnus
    </button>
    <Link to={"/login"}>
      <button
        className="login-btn w-full shadow-md"
        aria-label="Kirjaudu sisään"
      >
        Kirjaudu sisään
      </button>
    </Link>
  </div>
);
