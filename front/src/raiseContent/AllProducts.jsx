import React, { useState } from 'react';
import './AllProducts.css';
import ItemDisplay from "../ItemDisplay";
import { beddingData, hideoutData, foodData, toyData, otherData } from './HamsterItems'; 

function AllProducts () {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const filterItemsByCategory = (category) => {
        if (category === 'all') {
            return [...beddingData, ...hideoutData, ...foodData, ...toyData, ...otherData];
        } else {
            return [...beddingData, ...hideoutData, ...foodData, ...toyData, ...otherData].filter(item => {
                return Array.isArray(item.category) ? item.category.includes(category) : item.category === category;
            });
        }
    };

    const filteredItems = filterItemsByCategory(selectedCategory);

    return (
        <div className="all_products">
            <div className="filter">
                <select value={selectedCategory} onChange={(e) => handleCategoryChange(e.target.value)}>
                    <option value="all">All Categories</option>
                    <option value="bedding">Bedding</option>
                    <option value="hideout">Hideout</option>
                    <option value="food">Food</option>
                    <option value="toy">Toys</option>
                    <option value="wheel">Wheel</option>
                    <option value="bath">Bath</option>
                    <option value="'potty">Potty</option>
                    <option value="tool">Tool</option>                   
                </select>
            </div>
            <ItemDisplay itemList={filteredItems}/>
        </div>
    );
    
}

export default AllProducts;

/* return (
        <div className="all_products">
            <ItemDisplay itemList = {beddingData}/>
            <ItemDisplay itemList = {hideoutData}/>
            <ItemDisplay itemList = {foodData}/>
            <ItemDisplay itemList = {toyData}/>
            <ItemDisplay itemList = {otherData}/>
        </div>
    );
 */