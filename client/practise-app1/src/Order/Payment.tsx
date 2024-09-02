import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import imgvisa from "../assets/icons8-visa-logo-32.png"; 
import imgmaster from "../assets/icons8-mastercard-32.png"; 
import imgrupay from "../assets/icons8-rupay-logo-32.png"; 
import imgamericanex from "../assets/icons8-american-express-32.png"; 

import './Payment.css'

export const Payment: React.FC = () => {
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [input3, setInput3] = useState('');
    const [cardNumber, setCardNumber] = useState<string>('');
    const navigate = useNavigate()


    const handleCardNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const input = event.target.value;
        const sanitizedInput = input.replace(/\D/g, '');
        setCardNumber(sanitizedInput);
      };

      const renderCardType = () => {
        const visaRegex = /^4/;
        const rupayRegex = /^6/;
        const masterRegex = /^2/ && /^5/;
        const americanExpressRegex = /^3/; 

        
        if (visaRegex.test(cardNumber)) {
          return <img className='card-img' src={imgvisa}/>;
        } else if (rupayRegex.test(cardNumber)) {
            return <img className='card-img' src={imgrupay}/>;
        }
        else if (masterRegex.test(cardNumber)) {
            return <img className='card-img' src={imgmaster}/>;
        } else if (americanExpressRegex.test(cardNumber)) {
            return <img className='card-img' src={imgamericanex}/>;
        }else {
          return null;
        }
      };
    
    const handleClick = () => {
        if (input1.trim() === '' || input2.trim() === ''|| input3.trim() === '' || cardNumber.trim() === '' ) {
            alert('Please fill in all fields');
        } else {
            alert('order placed sucessfully');
            navigate("/survey");
        }
        
    };

    return (
        <div className='main-container'>
            <div className='payment-card'>
                <h1 className='payment-header'>Complete your payment</h1>
                <form className='payment-form'>
                <input
                    className='name-field'
                    type="text"
                    value={input1}
                    onChange={(e) => setInput1(e.target.value)}
                    placeholder="Name"
                />
                <br /><br />
                <input
                    className='address-field'
                    type="text"
                    value={input2}
                    onChange={(e) => setInput2(e.target.value)}
                    placeholder="Address"
                />
                <br /><br />
                <input
                    className='phoneno-field'
                    type="text"
                    value={input3}
                    onChange={(e) => setInput3(e.target.value)}
                    placeholder="Phone no"
                />
                <br /><br />
                <input
                    className='cardno-field'
                    type="text"
                    value={cardNumber}
                    onChange={handleCardNumberChange}
                    placeholder="Card no"/>{renderCardType()} <br /><br />
                <button className='pay-btn' onClick={handleClick}>Pay</button>
                </form>
            </div>
        </div>
    );
};


