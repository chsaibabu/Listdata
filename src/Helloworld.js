import React from "react";
import "./Helloworld.css";

export default function Helloworld() {
  const [user, setUser] = React.useState("Syed");

  const onInputChange = (e) => {
    setUser(e.target.value);
  };

  return (
    <section>
      <header>
        <input value={user} onChange={onInputChange} />
      </header>

      <main>
        <h1>Welcome to {user}</h1>
      </main>
    </section>
  );
}
