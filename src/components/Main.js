import Routers from "./Routers";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import ItemsList from "./ItemsList";
import AuthLogin from "../pages/AuthLogin";
import Auth from "./Auth";
import Login from "./Login";
import Account from "./Account";
const Main = () => {
  return (
    <div className="main">
      <div className="main_inner _container">
        <Routers />
        <Routes>
          <Route exact path="/" element={<ItemsList />} />
          <Route exact path="auth/" element={<Auth />} />
          <Route exact path="login/" element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route exact path="/account/" element={<Account />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
};
export default Main;
