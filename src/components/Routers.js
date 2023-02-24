import { routes } from "../data/data";
import RouteElemenet from "./RouteElement";
const Routers = () => {
  return (
    <div className="routers">
      <div className="routers_inner">
        {routes &&
          routes.map((route_i) => (
            <RouteElemenet route={route_i} key={route_i.id} />
          ))}
      </div>
    </div>
  );
};
export default Routers;
