import React from "react";
import "./App.css";
import ProductList from "./components/productList";
import CardInfo from "./components/cartInfo";

function App() {
  return (
    <div className="App">
      <ProductList />
      <CardInfo />
    </div>
  );
}

export default App;
