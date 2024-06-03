import './Tool.css';
import ItemDisplay from "../ItemDisplay";
import { otherData } from './HamsterItems'; 

function Tool () {

    return (
        <section className='tool'>
            <h2>Tools</h2>
            <ItemDisplay itemList = {otherData}/>
        </section>
    );
}

export default Tool;