import { useState } from "react";
import { Dish, dishes } from "../List/Dishes";
import { useRecoilState } from "recoil";
import { toatalDisplayState } from "../Store/totalDisplayState";



export const DishSearchList = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredDishes, setFilteredDishes] = useState<Dish[]>([]);
    const [addToCart, setAddToCart] = useState<string[]>([]);
    const [total, setTotal] = useState<number>(0);
    const [,setTotalDisplayAmount] = useRecoilState(toatalDisplayState);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const searchTerm = event.target.value.toLowerCase();
        setSearchTerm(searchTerm);

        if (searchTerm === '') {
            setFilteredDishes([]);
        } else {
            const filtered = dishes.filter(dish =>
                dish.name.toLowerCase().includes(searchTerm)
            );
            setFilteredDishes(filtered);
        }
    };

    const checkout = (name: string, price: number) => {
        setAddToCart(prevAddToCart => ([...prevAddToCart, `${name} Added to cart`]));
        const newTotal = total + price; 
        setTotal(newTotal);
        setTotalDisplayAmount(newTotal); 
        
    }
    

    return (
        <div>
            <h3>Search your favorite dishes..</h3>
            <input
                type="text"
                placeholder="Search dishes..."
                value={searchTerm}
                onChange={handleSearchChange}
            />
            <ul>
                {filteredDishes.map((dish,index) => (
                    <li key={index}> 
                        <strong>{dish.name}</strong> - {dish.category} - {dish.price}₨
                        <button onClick={() => {
                            checkout(dish.name,dish.price);
                        }}>Add cart</button>
                    </li>
                ))}
            </ul>
            {filteredDishes.length === 0 && searchTerm && (
                <p>No results found for "{searchTerm}"</p>
            )}
            {addToCart.map((item, index) => (
                <p key={index}>{item}</p>
            ))}
            
        </div>
    );
}
