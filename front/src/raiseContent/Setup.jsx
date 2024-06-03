import './Setup.css';
import IMG_6416 from '../picture/IMG_6416.JPG';
import Sbox from '../picture/Sbox.jpg';
import Lbox from '../picture/Lbox.jpg';
import Button from '../Button';

function Setup () {
    return (
        <article className="setups">
            <h2>Necessary Setups</h2>
            <ol>
                <li>Prepare a large habitat with a solid bottom and a well-ventilated and escape-proof top.</li>
                <li>Line the habitat with at least 2-3 inches of hamster bedding or recycled-paper.</li>
                <li>Sprinkle in a few bedding materials from your hamster's old habitat.</li>
                <li>Ensure to include a hideout for your hamster to retreat to.</li>
                <li>Have a water bottle and a food bowl (heavy enough not to be tipped over).</li>
                <li>Fill the habitat with treats and toys (a wheel or tunnels for exercise and chew toys).</li>
            </ol>

            <section className='detailed-instruction'>
                <h3>Some professional hamster YouTubers: </h3>
                <Button href='https://www.youtube.com/@VictoriaRaechel' className='external-link-go'>
                    @VictoriaRaechel
                </Button>
                <Button href='https://www.youtube.com/@MunchiesPlace' className='external-link-go'>
                    @MunchiesPlace
                </Button> 
                <Button href='https://www.youtube.com/@SomethingAnimal' className='external-link-go'>
                    @SomethingAnimal
                </Button>
            </section>

            <section className='demo-house'>
                <h3>Some examples of the habitat settings:</h3>
                <img src={IMG_6416} alt='setup-store'/>
                <img src={Sbox} alt='setup-small'/>
                <img src={Lbox} alt='setup-large'/>
            </section>
            
            <h2>Why</h2>
            <ul>
                <li>
                    <strong>A large habitat - </strong> 
                    Hamsters are very active animals. In the wild, they can travel for miles each night so they need a very large living space, no matter how small they are! 
                </li>
                <li>
                    <strong>At least 2-3 inches of bedding - </strong>
                    As we mentioned in Behavior part, Hamsters are natural diggers. Providing bedding as much as possible allows them to engage in their instinctual digging behavior, which is essential for mental stimulation, exercise, and creating burrows for nesting and hiding.
                </li>
                <li>
                    <strong>Bedding from old habitat - </strong>
                    Bedding from their old habitat carries familiar scents that can help reduce stress during the transition to a new environment. This familiarity provides a sense of security and comfort for the hamster.
                </li>
                <li>
                    <strong>Hideout </strong>
                    A hideout provides hamsters with a secure and private space to retreat to when they feel threatened or stressed, mimicking their natural instinct to seek refuge in burrows and tunnels. This promotes their sense of security and overall well-being in captivity.
                </li>
                <li>
                    <strong>A water bottle - </strong>
                    Hamsters are quite vulnerable to dehydration and will not survive for more than a day or two without water. They can become significantly dehydrated after just a few hours of moderate to heavy activity.
                </li>
                <li>
                    <strong>A wheel - </strong>
                    Similar to the first point, hamsters can travel for miles each night in the wild. However, when domesticated, we cannot provide such a large area. By using a wheel, they can run and burn off excess energy, which is essential for maintaining muscle tone, cardiovascular health, and overall well-being.
                </li>
            </ul>
        </article>

    );

}

export default Setup;