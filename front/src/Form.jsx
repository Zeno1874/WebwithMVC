import React, { useState } from 'react';
import './Form.css';
import Button from "./Button";
import Modal from './Modal';

function Form() {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [subscribeSuccess, setSubscribeSuccess] = useState(false);

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateEmail(email)) {
          setEmailError('Please enter a valid email address');
          return;
        }
        // Send subscription data to the backend
        try {
            const response = await fetch('/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email })
            });

            if (response.ok) {
                setEmail('');
                setSubscribeSuccess(true);
            } else {
                setEmailError('Subscription failed. Please try again.');
            }
        } catch (error) {
            setEmailError('An error occurred. Please try again.');
        }
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        if (emailError) {
            setEmailError(''); 
        }
    };

    return (
        <>
            <form action="/submit" method="post" onSubmit={handleSubmit}>
                <div className='subscribe_area'>
                    <label htmlFor="email">Subscribe for hamsters: </label>
                    <input 
                        id="email" 
                        type="text" 
                        name="user_email" 
                        placeholder="Email Address" 
                        value={email}
                        onChange={handleEmailChange} 
                        autoComplete="on"
                        required
                    />  
                    {emailError && <div className="error">{emailError}</div>}          
                </div>
                <Button type="submit">Subscribe</Button>
            </form>
            <Modal 
                isOpen={subscribeSuccess} 
                onClose={() => setSubscribeSuccess(false)} 
                message = 'Subscription Successful!'
            />
        </>
    ); 
}

export default Form;