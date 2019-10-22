import React, { useState } from "react";
import Register from "../Register/Register";
import Login from "../Login/Login";

function Home() {
  const [Token, setToken] = useState("");

  return (
    <div>
      <h1>Welcome to MUD </h1>
    </div>
  );
}

export default Home;
