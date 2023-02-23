import { useEffect, useState } from "react";
import Loading from "./Loading";
const ItemsList = () => {
  const [filter, setFilter] = useState("");
  const [search, setSearc] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {}, []);
  return (
    <div className="page">
      <input
        onChange={(e) => setFilter(e.target.value)}
        type="text"
        placeholder="Введите запрос"
        value={filter}
      />
    </div>
  );
};
export default ItemsList;
