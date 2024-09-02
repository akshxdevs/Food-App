import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DishSearchList } from "../Products/DishSearchList";
import { DisplayDishes } from "../Products/DisplayDishes";
import home from "../assets/icons8-home-logo-32.png";

export const Menu = () => {
    interface splDish {
        name: string;
        description: string;
        price: number;
    }

    const [username, setUsername] = useState<string>();

    useEffect(() => {
        const storedUsername = localStorage.getItem("username");
        if (storedUsername) {
            setUsername(storedUsername);
        }
    }, []);



    const tsDishes: splDish[] = [
        { name: 'Briyani', description: 'hyderabhadi briyani', price: 200 },
        { name: 'Parotta', description: 'bun parotta', price: 50 },
        { name: 'schawarma', description: 'Mexican', price: 90 },
        { name: 'chapthi', description: 'rotti', price: 30 },
        { name: 'Fried rice', description: 'mailai chicken', price: 150 }
    ];

    return (
        <div>
            <Link to='/'><img src={home}/></Link><h2>Menu</h2>
            <h4>Welcome👋{username}</h4>
            <DishSearchList />
            <DisplayDishes splDishes={tsDishes} />
        </div>
    );
};
