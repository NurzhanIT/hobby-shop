import { useEffect, useState } from "react";
import Loading from "./Loading";
import { BiSearchAlt } from "react-icons/bi";
import { getItemsList } from "../helpers/item";
import { useDispatch, useSelector } from "react-redux";
import ItemView from "./ItemView";
import { checkUser } from "../helpers/user";
import PreBasket from "./PreBasket";
import { getBasket } from "../helpers/basket";
const ItemsList = () => {
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [itemsId, setItemsId] = useState([]);
  const dispatch = useDispatch();

  const items = useSelector((items) => items.items.items);
  useEffect(() => {
    setIsLoading(true);
    dispatch(getItemsList(filter));
    console.log("items", items);
    checkUser(dispatch);
    dispatch(getBasket());
    setIsLoading(false);
  }, [search]);

  return (
    <div className="page">
      <div className="page_inner">
        <div className="input_search">
          <input
            onChange={(e) => setFilter(e.target.value)}
            type="text"
            placeholder="Введите запрос поиска"
            value={filter}
          />
          <div
            onClick={() => setSearch((prev) => !prev)}
            className="search_btn"
            style={{ color: "#c4374c" }}
          >
            <BiSearchAlt />
          </div>
        </div>
        {itemsId.length > 0 && <PreBasket itemsId={itemsId} />}
        <div className="items">
          {isLoading ? (
            <Loading />
          ) : (
            items.map((item) => (
              <ItemView
                setItemsId={setItemsId}
                itemsId={itemsId}
                item={item}
                key={item.id}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};
export default ItemsList;
