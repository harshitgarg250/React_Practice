import { useState } from "react";
function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handlleLoginBtn(e) {
    e.preventDefault();
    if (!email) {
    setError("Email is required");
    return;
  }

  if (!password) {
    setError("Password is required");
    return;
  }

  setError("");
  console.log("Login successful");
  }
  return (
    <div>
         <form onSubmit={handlleLoginBtn}>
      <h2>Email : </h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <h2>Password :</h2>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
     
        <button type="submit">Login</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
}
export default LoginForm;
