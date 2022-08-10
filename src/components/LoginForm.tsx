import { useState } from "react";
import { useForm } from "react-hook-form";

interface Details {
  name: string;
  email: string;
  password: string;
}

function LoginForm({}) {
  const [{ name, email, password }, setDetails] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { handleSubmit } = useForm<Details>();

  const onSubmit = handleSubmit((Details) => {
    console.log(name, email, password);
  });

  return (
    <form action="" className="pt-4" id="LoginForm" onSubmit={onSubmit}>
      <div>
        <label className="mb-2" htmlFor="name">
          Nimi
        </label>
      </div>
      <div className="mb-4">
        <input
          className="w-full text-input"
          type="name"
          name="name"
          id="name"
          value={name}
          onChange={(event) =>
            setDetails({
              name: event.target.value,
              email,
              password,
            })
          }
        />
      </div>
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
          value={email}
          onChange={(event) =>
            setDetails({
              name,
              email: event.target.value,
              password,
            })
          }
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
          value={password}
          onChange={(event) =>
            setDetails({
              name,
              email,
              password: event.target.value,
            })
          }
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
