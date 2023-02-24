import { SlBasket } from "react-icons/sl";

const ItemView = ({ item, setItemsId, itemsId }) => {
  return (
    <div className="item">
      <div className="item_inner">
        <div className="item_img">
          <img src="https://cdn.f.kz/prod/2561/2560493_550.jpg" alt="" />
        </div>
        <div className="name">{item.name}</div>
        <div className="description">{item.description}</div>
        <div className="price">Цена: {item.price} ₸</div>
        <div className="category">категория: {item.category[0]}</div>
        <div
          onClick={() => {
            if (!itemsId.includes(item.id)) {
              setItemsId((prev) => [...prev, item.id]);
            }

            console.log(itemsId);
          }}
          className="add_btn"
        >
          <div className="add_btn-text">Добваить в корзину</div>
          <div className="add_btn-icon">
            <SlBasket />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ItemView;
