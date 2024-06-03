import React, { useState } from 'react';
import './Raise.css';
import Setup from "../raiseContent/Setup";
import Bedding from "../raiseContent/Bedding";
import Food from "../raiseContent/Food";
import Hideout from "../raiseContent/Hideout";
import Toy from "../raiseContent/Toy";
import Tool from "../raiseContent/Tool";
import AllProducts from "../raiseContent/AllProducts";
import Button from '../Button';

function Raise() {
    const [selectedItem, setSelectedItem] = useState();
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const renderContent = () => {
        switch (selectedItem) {
            case 'setup':
                return <Setup/>;
            case 'bedding':
                return <Bedding/>;
            case 'hideout':
                return <Hideout/>;
            case 'food':
                return <Food/>;
            case 'toys':
                return <Toy/>;
            case 'tool':
                return <Tool/>;
            case 'all':
                return <AllProducts/>
            default:
                return (
                    <>
                        <Setup />
                        <Bedding />
                        <Hideout />
                        <Food />
                        <Toy />
                        <Tool />
                    </>
                );
        }
    };

    return (
        <div className="raise-container">
            <nav className="side-navbar">
                <Button className="dropdown-toggle" onClick={toggleDropdown}>Menu</Button>
                <ul className={`side-menu ${showDropdown ? 'show' : ''}`}>
                    <li onClick={() => setSelectedItem('setup')}>Setup</li>
                    <li onClick={() => setSelectedItem('bedding')}>Bedding</li>
                    <li onClick={() => setSelectedItem('hideout')}>Hideout</li>
                    <li onClick={() => setSelectedItem('food')}>Food</li>                        <li onClick={() => setSelectedItem('toys')}>Toys</li>
                    <li onClick={() => setSelectedItem('tool')}>Tools</li>
                    <li onClick={() => setSelectedItem('all')}>All Products</li>
                </ul>          
            </nav>

            <main className="raise-main">
                {renderContent()}
            </main>
        </div>
    );
}

export default Raise;