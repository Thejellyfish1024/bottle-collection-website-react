import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addToLs, getStoredCart, removeFromLs } from "../utilities/storage";
import Cart from "../Cart/Cart";

const Bottles = () => {
    const [bottles, setBottles] = useState([]);

    const [cart, setCart] = useState([]);

    useEffect(() =>{
        fetch('bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    },[])
    useEffect(() => {
        if(bottles.length){
            const cartItemFromLs = getStoredCart();
            // console.log(cartItemFromLs);
            let showCartArr = [];
            for (const id of cartItemFromLs){
                const showCart = bottles.find(bottle => bottle.id === id)
                showCartArr.push(showCart);
            }
            // console.log(showCartArr);
            setCart(showCartArr);
        }
    },[bottles])

    const handleCart = (bottle) =>{
        // console.log(bottle);
        const newCart = [...cart,bottle];
        setCart(newCart);
        addToLs(bottle.id);
    }
    const handleRemoveCart = (id) =>{
        removeFromLs(id)
        // 
        const remainingCartItems = cart.filter(bottle => bottle.id !== id)
        setCart(remainingCartItems);
    }
    return (
        <div>
            <h3>Available Bottles : {bottles.length}</h3>
            <Cart cart={cart} handleRemoveCart={handleRemoveCart}></Cart>
            <div className="bottles">
            {
                bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle} handleCart={handleCart} ></Bottle>)
            }
            </div>
        </div>
    );
};

export default Bottles;