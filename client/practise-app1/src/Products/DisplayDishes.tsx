import React, { useState } from 'react';
import { totalAmountState } from "../Store/totalState";
import { useRecoilState } from "recoil";
import { useNavigate } from 'react-router-dom';
import './DisplayDishes.css';
import cartlogo from '../assets/icons8-shopping-bag-32.png'

let cart: { name: string; price: number }[] = [];
let totalBill = 0;

interface splDish {
    name: string;
    description: string;
    price: number;
}

interface Props {
    splDishes: splDish[];
}

export const DisplayDishes: React.FC<Props> = ({ splDishes }) => {
    const [messages, setMessages] = useState<string[]>([]);
    const [itemCounts, setItemCounts] = useState<{ [key: string]: number }>({});
    const [,setTotalAmount] = useRecoilState(totalAmountState)
    const navigate  = useNavigate();


    const handleAddToCart = (name: string, price: number) => {
        cart.push({ name, price });
        totalBill += price;
        setMessages(prevMessages => [...prevMessages, `Added ${name} to cart.`]);
        setItemCounts(prevCounts => ({...prevCounts,[name]: (prevCounts[name] || 0) + 1 
        }));
    const calculatedTotalAmount = totalBill;
    setTotalAmount(calculatedTotalAmount);
    };
    const handelCheckout = () => {
        const amount = totalBill;
        navigate("/cart",{state:{amount}})
        
    }
    return (
        <div className='main-container'>
            <div className="displaydishes-card">
            <button className='checkout-btn' onClick={handelCheckout}><img src={cartlogo} /></button>
            <h3 className='title-header'>Todays special!!</h3>
            <div className='display-added-dish'>
                {messages.map((message,index) => (
                    <p key={index}>{message}</p>
                ))}
            </div>
            {splDishes.map((dish, index) => (
                <div className='display-dishes' key={index}>
                    <div className="card-type-dishes">
                        <h4 className='dd-name'>{dish.name}</h4>
                        <p className='dd-description'>{dish.description}</p>
                        <p className='dd-price'>Price: {dish.price}₨</p>
                        <button className='addtocart-btn' onClick={() => handleAddToCart(dish.name, dish.price)}>Add to Cart</button>
                        <p className='quanity-text'>Item added {itemCounts[dish.name] || 0}x</p> 
                    </div>
                </div>
            ))}
            </div>     
        </div>
    );
};
