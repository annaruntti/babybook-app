import LoginForm from "../components/LoginForm";
import { useState } from "react";

function Login() {
  const adminuser = {
    email: "admin@admin.com",
    password: "admin123",
  };

  const [user, setUser] = useState({ name: "", email: "" });

  const [error, setError] = useState("");

  const Login = (Details: any) => {
    console.log(Details);
  };

  const Logout = () => {
    console.log("Logout");
  };

  return (
    <div>
      {user.email != "" ? (
        <div>
          <h1 className="text-3xl font-bold text-center mb-4">
            Hei, <span>{user.name}</span>!
          </h1>
          <h2 className="font-bold text-center mb-6">
            Haluatko kirjautua ulos?.
          </h2>
          <button
            className="register-btn w-full shadow-md"
            aria-label="Kirjaudu ulos"
          >
            Kirjaudu ulos
          </button>
        </div>
      ) : (
        <div>
          <h1 className="text-3xl font-bold text-center mb-4">
            Kirjaudu sisään
          </h1>
          <LoginForm />
        </div>
      )}
    </div>
  );
}

export default Login;
