import { Items } from "./Components/ItemPrice";
import { useContext } from "react";
function App() {
  const { item, num, handleQuantity, quantityPrice } = useContext(Items);
  return (
    <div className="App">
      {item.length > 0 ? (
        <>
          <div className="image">
            <img
              src="https://s3no.cashify.in/cashify/store/product//767e2cc9aabe431182284132fb1fb059-box.jpg?p=es5sq&s=es"
              alt="pic"
            />

            <div className="detail">
              <div>
                <h1>{item[0].title}</h1>
                <h3>Brand: {item[0].brand}</h3>
                <p className="des">{item[0].description}</p>

                <h6>Category: {item[0].category}</h6>
              </div>
              <div>
                <select
                  onChange={(e) =>
                    handleQuantity(e.target.value, item[0].price)
                  }
                >
                  {num.map((val, index) => {
                    return <option key={index}>{val.num}</option>;
                  })}
                </select>
                <h3 className="price">
                  <span>&#x24;</span>
                  {item[0].price.toFixed(2)}
                </h3>{" "}
                <br />
                <h1 className="underh1">Remove</h1>
              </div>
            </div>
          </div>
          <hr />
          <div className="pricing">
            <h6>SUBTOTAL</h6>
            <p>
              <span>&#x24;</span>
              {quantityPrice === 0 ? item[0].price.toFixed(2) : quantityPrice.toFixed(2)}
            </p>
            <h6>SHIPPING</h6>
            <p>FREE</p>
          </div>
          <hr />
          <div className="pricing">
            <h6>TOTAL</h6>
            <p>
              <span>&#x24;</span>
              {quantityPrice === 0 ? item[0].price.toFixed(2) : quantityPrice.toFixed(2)} <br />
              <span className="under">Get Daily Cash with Nespola Card</span>
            </p>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
