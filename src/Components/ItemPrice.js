import { createContext, useEffect, useState } from "react";

export const Items = createContext({
  item: "",
  handleRemoveFromCart: () => {},
  changeCart: false,
});

const ItemPrice = ({ children }) => {
  const [item, setItem] = useState([]);
  const API_URL = "http://localhost:3000/db.json";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        const result = await response.json();
        setItem(result.products);
      } catch (err) {
        console.log(err);
      }
    };
    (async () => await fetchData())();
  }, []);

  const [num, setNum] = useState([
    { num: 1 },
    { num: 2 },
    { num: 3 },
    { num: 4 },
    { num: 5 },
    { num: 6 },
    { num: 7 },
    { num: 8 },
    { num: 9 },
    { num: 10 },
  ]);
  let [quantityPrice, setQuantityPrice] = useState(0);

  const handleQuantity = (e, price) => {
    setQuantityPrice(e * price);
  };

  const value = {
    item,
    num,
    handleQuantity,
    quantityPrice,
  };
  return <Items.Provider value={value}>{children}</Items.Provider>;
};

export default ItemPrice;
