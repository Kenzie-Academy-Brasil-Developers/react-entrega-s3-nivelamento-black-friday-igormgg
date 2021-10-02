import "./reset.css";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { ToastContainer } from "react-toastify";
import { useState } from "react";
import Product from "./Components/Product";
import Cart from "./Components/Cart";

function App() {
  const [useProduct] = useState([
    { id: 1, name: "Smart TV LED 50", price: 1999.0 },
    { id: 2, name: "PlayStation 5", price: 12000.0 },
    { id: 3, name: "Notebook Acer Nitro 5", price: 5109.72 },
    { id: 4, name: "Headset s fio Logitech G935", price: 1359.0 },
    { id: 5, name: "Tablet Samsung Galaxy Tab S7", price: 4844.05 },
    { id: 6, name: "Cadeira Gamer Cruiser Preta FORTREK", price: 1215.16 },
  ]);

  const [cart, setCart] = useState([]);

  const [showProduct, setShowProduct] = useState({});

  const [discount, setDiscount] = useState(0);

  const [flag, setFlag] = useState(false);

  const [anotherFlag, setAnotherFlag] = useState(false);

  return (
    <div className="App">
      <header className="App-header">Exercício Black Friday</header>
      <main>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />

        <Product
          useProduct={useProduct}
          cart={cart}
          setCart={setCart}
          showProduct={showProduct}
          setShowProduct={setShowProduct}
          discount={discount}
          setDiscount={setDiscount}
          flag={flag}
          setFlag={setFlag}
          setAnotherFlag={setAnotherFlag}
        />
        <Cart cart={cart} discount={discount} anotherFlag={anotherFlag} />
      </main>
    </div>
  );
}

export default App;
