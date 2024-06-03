import Cards from "../Cards";
import './Classification.css';
import IMG_5938 from '../picture/IMG_5938.jpg';
import IMG_6381 from '../picture/IMG_6381.jpg';
import kanashi from '../picture/kanashi.jpg';
import IMG_6395 from '../picture/IMG_6395.jpg';
import IMG_0619 from '../picture/IMG_0619.jpg';
import katherine from '../picture/katherine.jpg';
import Button from "../Button";

function Classification() {
    return (
        <main>
            <section className="text-intro">
                <p>
                    Hamster has 24 species. The most common hamsters found as pets are shown below:        
                </p>
            </section>

            <div className="card_container">
                <Cards
                    title = 'Guinea pig (Cavia porcellus)'
                    image = {katherine}
                    image_name = 'Cavia-porcellus'
                    content = 'The Guinea pig (Cavia porcellus), also known as a cavy, is a beloved small mammal originating from the Andes region of South America, particularly Peru, Ecuador, and Bolivia. Renowned for its gentle disposition, social nature, and unmistakably adorable appearance, Guinea pigs have been cherished as popular pets for centuries. Characterized by their rounded bodies, short legs, and distinct vocalizations, these rodents come in a variety of coat colors and patterns, adding to their charm and appeal. Known for their sociability, Guinea pigs thrive in the company of their own kind, forming close bonds within groups. With their endearing personalities and relatively straightforward care requirements, Guinea pigs continue to be cherished companions for families and individuals alike, bringing joy and companionship to households around the world.'
                />
                <Cards
                    title = 'Chinese hamster (Cricetulus griseus)'
                    image = {IMG_6381}
                    image_name = 'Cricetulus-griseus'
                    content = "The Chinese hamster (Cricetulus griseus) is a captivating small rodent native to the deserts and steppes of northern China and Mongolia. Characterized by its distinctive gray-brown fur and elongated body, this species has gained popularity both as a laboratory animal for scientific research and as an endearing pet in some regions. Renowned for its gentle temperament and relatively docile nature, the Chinese hamster is often favored by those seeking a smaller and less demanding companion compared to larger hamster species. With its curious demeanor and adaptability to various environments, the Chinese hamster continues to captivate the interest of enthusiasts and researchers alike."
                />
                <Cards
                    title = 'Syrian golden hamster (Mesocricetus auratus)'
                    image = {IMG_5938}
                    image_name = 'Mesocricetus-auratus'
                    content = "The Syrian golden hamster (Mesocricetus auratus) is a beloved small mammal cherished for its adorable appearance and gentle disposition. Originating from the arid regions of Syria and neighboring countries, these charismatic rodents have become popular pets worldwide due to their manageable size, low maintenance requirements, and endearing personalities. Renowned for their golden fur, which varies in shades from pale cream to deep amber, Syrian hamsters are solitary creatures in the wild, but they form strong bonds with their human caregivers in captivity. With their inquisitive nature and playful antics, these charming rodents have earned a special place in the hearts of pet enthusiasts everywhere."
                />
                <Cards
                    title = "Campbell's or dwarf hamster (Phodopus campbelli)"
                    image = {kanashi}
                    image_name = 'Phodopus-campbelli'
                    content = "Campbell's dwarf hamster (Phodopus campbelli), also known simply as the dwarf hamster, is a charming and diminutive rodent originating from the steppes and semi-arid regions of Central Asia, particularly in areas of Russia, Mongolia, and China. Recognized for its small size, typically around 3 to 4 inches in length, and its diverse coat colors, which range from agouti and gray to sapphire and albino, the Campbell's dwarf hamster has become a popular choice among pet enthusiasts worldwide. Known for its social nature and compatibility with same-sex companions, these hamsters are often kept in pairs or small groups, fostering lively interactions and forming tight-knit bonds with their human caregivers. With their endearing personalities and relatively low maintenance requirements, Campbell's dwarf hamsters continue to captivate the hearts of both seasoned pet owners and newcomers to the world of small animal companionship."
                />
                <Cards
                    title = 'Djungarian or winter-white Russian dwarf hamster (Phodopus sungorus)'
                    image = {IMG_6395}
                    image_name = 'Phodopus-sungorus'
                    content = "The Djungarian or winter-white Russian dwarf hamster (Phodopus sungorus) is a captivating small rodent originating from the grasslands and deserts of Siberia and Kazakhstan. Known for its compact size and striking coat colors that shift from gray-brown in summer to snowy white in winter, these endearing creatures have captured the hearts of pet enthusiasts around the globe. Renowned for their sociable nature and compatibility with same-sex companions, Djungarian hamsters thrive in pairs or small groups, fostering lively interactions and forming close bonds with their human caregivers. With their playful demeanor and relatively low maintenance requirements, Djungarian hamsters continue to enchant both seasoned pet owners and newcomers to the world of small animal companionship."
                />
                <Cards
                    title = 'Roborovski hamster (Phodopus roborovskii)'
                    image = {IMG_0619}
                    image_name = 'Phodopus-roborovskii'
                    content = 'The Roborovski hamster (Phodopus roborovskii), often affectionately called the "Robo", is a delightful small rodent native to the deserts of Central Asia, particularly found in parts of China, Mongolia, and Russia. Renowned for its tiny size and distinctive sandy-brown coat, this species has gained popularity as an endearing pet choice for enthusiasts worldwide. Known for their energetic and inquisitive nature, Roborovski hamsters are particularly active, spending much of their time exploring their surroundings and engaging in playful behaviors. While they are small and quick, they are also notably friendly and can form strong bonds with their human caretakers. With their charming personality and relatively low maintenance needs, the Roborovski hamster continues to captivate the hearts of pet lovers everywhere.'
                />               
            </div>

            <section className='external-link'>
                If you'd like to learn detailed classification, <br/>let's
                <Button href='https://en.wikipedia.org/wiki/Hamster#Classification' className='external-link-go'>
                    Head Over to Wikipedia
                </Button>
                to learn more.
            </section>
        </main>              
    );
}
  
export default Classification; 