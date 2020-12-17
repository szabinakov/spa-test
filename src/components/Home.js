import React from "react";
import Login from "./Login.js";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      hello from home
      <Link to="/login">Login</Link>
    </div>
  );
}
