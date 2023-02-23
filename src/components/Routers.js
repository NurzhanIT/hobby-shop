import { routes } from "../data/data";
import RouteElemenet from "./RouteElement";
const Routers = () => {
  return (
    <div className="routers">
      {routes &&
        routes.map((route_i) => (
          <RouteElemenet route={route_i} key={route_i.id} />
        ))}
    </div>
  );
};
export default Routers;
