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
    
  const [num, setNum] = useState([]);
  let [quantityPrice, setQuantityPrice] = useState(0);

    const handleQuantity = (e, price) => {
        let listItem = [];
        let len = item.length > 0 ? item[0].stock : 1
        for (let i = 1; i <= len; i++){
            listItem = [...quantityPrice]
            listItem.push({ num: i })
            setQuantityPrice(listItem)
        }
        console.log(quantityPrice)
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
