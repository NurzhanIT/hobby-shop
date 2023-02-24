import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import BasketItem from "./BasketItem";
const Account = () => {
  const user = useSelector((user) => user.user.user);
  const basket = useSelector((user) => user.user.basket);
  const [basketitem, setBasketitem] = useState([]);
  const items = useSelector((items) => items.items.items);
  console.log("items", items);
  useEffect(() => {
    setBasketitem(...items);
    // for (let i = 0; i < basket.items.length; i++) {
    //   for (let j = 0; j < basketitem.length; j++) {
    //     basketitem.filter(basketitem[j].id !== basket.items[i].id);
    //   }
    // }

    console.log("basketitem sd", basketitem);
    for (let i = 0; i < basket.items.length; i++) {
      console.log(basket.items[i]);
      setBasketitem(
        ...basketitem,
        basketitem.filter((obj) => obj.id !== basket.items[i])
      );
    }

    console.log("basketitem", basketitem);
  }, [items]);
  console.log("basketitem", basketitem);
  return (
    <div className="user">
      <div className="user_inner">
        <div className="user_info">
          <div className="user-img">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZZopOHx3j8ISmnSA7AJ-YlXzsI6ulFbacuA&usqp=CAU"
              alt="user"
            />
          </div>
          <div className="user_name">{user.name}</div>
          <div className="user_email">{user.email}</div>
          <div className="user_name">
            Дата регистрации: {user.created_at.slice(0, 10)}
          </div>
        </div>
        <div className="basket">
          <div className="basket_inner">
            <div className="basket_title">Ваша корзина товаров</div>
            <div className="basket_items">
              {/* {basket.items ? (
                basket.items.map((item) => (
                  <BasketItem key={item.id} item={item} />
                ))
              ) : (
                <div>ваша корзина пустая</div>
              )} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Account;
