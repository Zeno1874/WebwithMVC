import './Behavior.css';
import Panels from "../Panels";
import IMG_6407 from '../picture/IMG_6407.jpg';
import IMG_6408 from '../picture/IMG_6408.jpg';
import IMG_6412 from '../picture/IMG_6412.jpg';
import IMG_2121 from '../picture/IMG_2121.jpg';

function Behavior() {
    return (
        <section className='panel-container'>
            <Panels
                image = {IMG_6412}
                image_name = 'nocturnality'
                title = 'Activity Patterns and Thermoregulation'
                content = {
                    <ul>
                        Hamsters are known for their nocturnal or crepuscular behavior, being active mainly at night or during dawn and dusk. While some argue they are purely nocturnal, others suggest their underground lifestyle during the day makes them primarily crepuscular. Although activity levels may vary among species, all hamsters are generally considered crepuscular.
                        <br/>
                        In the wild, Syrian hamsters can hibernate, reducing their metabolic rate to conserve energy during winter. Hibernation typically lasts 2-3 days, although it can extend to a week. However, pet Syrian hamsters do not hibernate.
                    </ul>
                }
            />
            
            <Panels
                image = {IMG_6407}
                image_name = 'hoarding'
                title = 'Food Hoarding'
                content = {
                    <ul>
                        Food hoarding is a typical behavioral trait observed in hamsters. They utilize their expansive cheek pouches to transport food to subterranean storage areas. As these pouches fill up, their heads can appear to double or even triple in size. Interestingly, hamsters naturally lose weight during autumn in preparation for winter, a phenomenon observed even in domesticated pets, likely linked to heightened physical activity.
                    </ul>
                }
            />

            <Panels
                image = {IMG_6408}
                image_name = 'fight'
                title = 'Social Behavior and Communication'
                content = {
                    <ul>
                        Typically, hamsters prefer solitary living arrangements to avoid stress and potentially lethal conflicts when housed together. While dwarf hamster species might tolerate siblings or unrelated hamsters of the same gender introduced early in life, this isn't always successful. Hamsters rely on body language for communication, conveying messages to each other and their owners. This includes emitting specific scents through scent glands and exhibiting various body language cues to express their emotions.
                    </ul>
                }
            />

            <Panels
                image = {IMG_2121}
                image_name = 'burrow'
                title = 'Burrowing Behavior'
                content = {
                    <ul>
                        Hamsters, natural diggers, construct burrows with multiple entrances, interconnected galleries, and chambers for nesting and food storage. They use their legs, snouts, and teeth for digging. Burrows provide temperature regulation and predator protection. Syrian hamsters dig burrows about 70 cm deep with a steep entrance, nesting chamber, hoarding chamber, and a urination branch. Even laboratory hamsters retain this behavior, digging vigorously with suitable substrate. 
                        <br/>
                        Additionally, wild hamsters may utilize tunnels created by other animals; for example, the Djungarian hamster utilizes paths and burrows of pikas.
                    </ul>
                }
            />
        </section>
    );
}

export default Behavior;