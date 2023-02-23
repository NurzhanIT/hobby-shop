import { NavLink } from "react-router-dom";

const RouteElemenet = ({ route }) => {
  return (
    <div className="route_element">
      <NavLink to={route.route} activeClassName="active-link">
        <div className="route_inner">{route.name}</div>
      </NavLink>
    </div>
  );
};
export default RouteElemenet;
