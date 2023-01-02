import './App.css';
import React, { useState } from 'react';
import Navbar from './component/Navbar';
import ProductList from './component/ProductList';
import Footer from './component/Footer';
import AddItem from './component/AddItem';

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
  let [productList1, setProductList] = useState(productList);
  let [totalAmount, setTotalAmount] = useState(0);
  let [productListSize, setListSize] = useState(2);

  const incrementQuantity = (index) => {
    let newProductList = [...productList1]
    let newTotalAmount = totalAmount
    newProductList[index].quantity++;
    newTotalAmount += newProductList[index].price   // old price added to current price
    setTotalAmount(newTotalAmount)
    setProductList(newProductList);
  }

  const decrementQuantity = (index) => {
    let newProductList = [...productList1]
    let newTotalAmount = totalAmount
    // check if quantity going down to zero
    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--
      newTotalAmount -= newProductList[index].price
      setTotalAmount(newTotalAmount)
    }

    setProductList(newProductList);
  }

  const resetQuantity = () => {
    let newProductList = [...productList1]
    newProductList.map((product) => {
      product.quantity = 0
    })
    setProductList(newProductList)
    setTotalAmount(0)
  }

  const removeItem = (index) => {
    let newProductList = [...productList1]
    let newTotalAmount = totalAmount
    newTotalAmount -= newProductList[index].quantity * newProductList[index].price
    newProductList.splice(index, 1); 
    setProductList(newProductList)
    setTotalAmount(newTotalAmount)
    setListSize(--productListSize)
  }

  const addItem = (name , price) => {
    let newProductList = [...productList1]
    newProductList.push(
      {
        name:name,
        price:price,
        quantity:0
      }
    )
    setProductList(newProductList)
    setListSize(++productListSize);
  }
  let [len,setLen] = useState(0)

  const giveLength = () =>{
    // let newProductList = [...productList1]
    let newLen = len++
    setLen(newLen)
  }

  return (
    <>
      <Navbar giveLength={giveLength} listsize={productListSize}/>
      <main className='container mt-5' >
        <AddItem addItem={addItem} giveLength={giveLength}></AddItem>
        <ProductList productList={productList1} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity} removeItem={removeItem}/>
      </main>
      <Footer totalAmount={totalAmount} resetQuantity={resetQuantity} />
    </>
  );
}

export default App;
