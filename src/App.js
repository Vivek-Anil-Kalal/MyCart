import './App.css';
import React,{useState} from 'react';
import Navbar from './component/Navbar.js';
import ProductList from './component/ProductList.js';
import Footer from './component/Footer';

function App() {
  // Array of objects of products
  const productList = [
    {
      price: 9999,
      name: "Iphone 11 pro max",
      quantity: 0
    },
    {
      price: 999,
      name: "One Plus+ Nord",
      quantity: 0
    }
  ]

  // this how we create state hook 
  // using productList1 we can read the value of it and using setProductList we can set value of it 
  let [productList1,setProductList] = useState(productList) ;

  const incrementQuantity=(index) => {
    let newProductList = [...productList1] 
    newProductList[index].quantity++;
    setProductList(newProductList);
  }

  const decrementQuantity=(index) => {
    let newProductList = [...productList1] 
    newProductList[index].quantity--;
    setProductList(newProductList);
  }

  return (
    <>
      <Navbar />
      <main className='container mt-5'>
        <ProductList productList={productList1} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity}/>
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default App;
