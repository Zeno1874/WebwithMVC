import './Toy.css';
import ItemDisplay from "../ItemDisplay";
import { toyData } from './HamsterItems'; 

function Toy () {

    return (
        <section className='toy'>
            <h2>Toys</h2>
            <h3>Common toys found in pet stores:</h3>
            <ItemDisplay itemList = {toyData}/>
        </section>
    );
}

export default Toy;