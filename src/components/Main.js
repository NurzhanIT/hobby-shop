import Routers from "./Routers";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import ItemsList from "./ItemsList";
const Main = () => {
  return (
    <div className="main">
      <div className="main_inner _container">
        <Routers />
        <Routes>
          <Route path="/" element={<ItemsList />} />
        </Routes>
      </div>
    </div>
  );
};
export default Main;
