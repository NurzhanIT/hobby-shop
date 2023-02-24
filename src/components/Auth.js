import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authUser } from "../helpers/user";
const Login = () => {
  let nav = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <div className="login">
      <div className="login_inner">
        <div className="login_title">Авторизация</div>
        <label for="email">Email</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          id="email"
          type="email"
          placeholder="Введите почту"
        />

        <label for="password">Password</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          id="password"
          type="password"
          placeholder="введите пароль"
        />
        <div className="submission">
          <div
            onClick={() => {
              authUser(email, password);
              nav("/");
            }}
            className="submit_btn"
          >
            Войти
          </div>
          <div
            onClick={() => {
              nav("/login/");
            }}
            className="submit_btn"
          >
            Нет аккаунта?
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
