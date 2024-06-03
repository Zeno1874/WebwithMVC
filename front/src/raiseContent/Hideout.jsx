import './Hideout.css';
import ItemDisplay from "../ItemDisplay";
import { hideoutData } from './HamsterItems'; 

function Hideout () {

    return (
        <section className='hideout'>
            <h2>Hideout</h2>
            <p>
            Hamster hides are an essential part of any good hamster enclosure.  In the wild, hamsters will build complicated burrows with chambers for sleeping, storing food, bathroom, hang out time and so on!   
            </p>

            <h3>The hamsters in your homes will use a hides for various purposes including:</h3>
            <ul>
                <li>storing their food stash</li>
                <li>a place to snack comfortably</li>
                <li>a place to sleep</li>
                <li>a place to nap (many hamsters have different nap spots as opposed to sleeping spots!)</li>
                <li>a potty area</li>
                <li>a ceramic hide can be a place to cool down</li>
                <li>a cozy hide with lots of bedding can be a place to keep warm</li>
                <li>a cozy hide with lots of bedding can be a place to keep warm</li>
                <li>a hide in a sand bath gives them a place to bathe or sometimes just hang</li>
            </ul>
            <h3>Some hideouts:</h3>
            <ItemDisplay itemList = {hideoutData}/>
        </section>
    );

}

export default Hideout;