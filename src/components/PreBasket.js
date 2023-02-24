import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createBasket, updateBasket } from "../helpers/basket";
import { useDispatch } from "react-redux";
import { getBasket } from "../helpers/basket";
const PreBasket = ({ itemsId }) => {
  const basket = useSelector((user) => user.user.basket);
  const dispatch = useDispatch();
  let nav = useNavigate();
  return (
    <div
      onClick={() => {
        if (!basket.items) {
          createBasket(itemsId);
        } else {
          console.log("else");
          for (let i = 0; i < basket.items.length; i++) {
            for (let j = 0; j < itemsId.length; j++) {
              if (i === j) {
                let index = itemsId.indexOf(j);
                itemsId.splice(index, 1);
                console.log("deleted");
              }
            }
          }
          let merged = basket.items.concat(itemsId);
          console.log("merged");
          updateBasket(merged);
        }
        dispatch(getBasket());
        nav("/account/");
      }}
      class="order_button"
    >
      <p>{`Добавить выбранные ${itemsId.length} товаров в корзину`}</p>
      <div class="arrow">
        <span></span>
      </div>
    </div>
  );
};
export default PreBasket;
