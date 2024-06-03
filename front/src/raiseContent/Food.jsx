import './Food.css';
import ItemDisplay from "../ItemDisplay";
import { foodData } from './HamsterItems'; 

function Food() {

    return (
        <section className='food'>
            <h2>What do hamsters eat?</h2>
            <ul>
                <li><strong>Pelleted Food - </strong>80% of their food or ¾ of their bowl, refreshed daily</li>
                <li><strong>Vegetables - </strong>15% of their food, including leafy greens every day</li>
                <li><strong>Fruits - </strong>5% of their food twice a week. This might include options like bananas or blueberries</li>
                <li><strong>Treats - </strong>5% of their food can be grasses/hay</li>
                <li><strong>Water - </strong>A water bottle and/or bowl of fresh, clean water should be available at all times and refreshed daily</li>
                <li><strong>Chews - </strong> They can gnaw to keep their teeth at a manageable length.</li>
            </ul>
            <ItemDisplay itemList = {foodData}/>
        </section>
    );
}

export default Food;
