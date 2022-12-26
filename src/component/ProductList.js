import React from 'react';
import Product from './Product.js'

export default function ProductList(props){     // this is props way another one is destructure the object i.e {product} 
    // to use props just write (props) and this props object will contain all arguments you pass thorugh calling function and you can use them in 
    // form of object 

    // this props can't be change as they can only be read and used because React follows pure function concept in which if we pass anything inside 
    // the function that doesn't change inside it's value 

    return (                    
        // this is conditional rendering 
        props.productList.length > 0 ?
        props.productList.map((product,i)=>{ // product object and its index is passed as key
            return <Product product={product} key={i} incrementQuantity={props.incrementQuantity} index={i} decrementQuantity={props.decrementQuantity} removeItem={props.removeItem}/>    // this key is to differnciate the objects in props uniquely identify
        })
        : <h1 className='text-center'>No Product In the list Add some and have fun </h1>
    )
}