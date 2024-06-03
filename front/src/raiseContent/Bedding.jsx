import './Bedding.css';
import ItemDisplay from "../ItemDisplay";
import { beddingData } from './HamsterItems'; 

function Bedding () {

    return (
        <section className='bedding'>
            <h2>Safe Bedding Options</h2>
            <ul>
                <li><strong>Paper-based bedding - </strong>widely-used option and can be used on its own or with other types mixed in.</li>
                <li><strong>Aspen, spruce or hemp bedding - </strong>similar to sawdust/wood shavings but made from hardwood and dust free. However, they aren't great at supporting burrows, so you'll need to add a paper-based bedding for extra stability.</li>
                <li><strong>Toilet paper - </strong>unscented, and the cheaper the better because thick toilet paper can cause gut blockages if eaten.</li>
                <li><strong>Soft hay - </strong>a great addition to any of the beddings above, and will help add extra structure and stability to your hamster's burrows.</li>
                <li><strong>Soil - </strong>to add texture and a natural feel to your hamster's home, organic, fertilizer and chemical free soil bought from a good pet shop and marketed as suitable for reptiles would be idea.</li>
            </ul>
            <h3>Beddings that sold in pet shops</h3>
            <ItemDisplay itemList={beddingData}/>
        </section>
    )
}

export default Bedding;