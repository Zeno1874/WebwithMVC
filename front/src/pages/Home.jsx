import './Home.css';
import Panels from "../Panels";
import IMG_5936 from '../picture/IMG_5936.jpg';
import IMG_6155 from '../picture/IMG_6155.jpg';
import frances from '../picture/frances.jpg';

function Home() {
    return (
      <main>
        <section className='panel-container'>
          <Panels
            content = {
              <p className='welcome'>
                Welcome to Hamsters' World! Here you'll find everything you need to know about these delightful creatures. Delve into our categories covering Classification, Behavior, and Raising Tips to ensure you give your furry friend the best care possible. Whether you're a seasoned hamster enthusiast or a newcomer to the world of small pets, we're thrilled to have you join us on this exciting journey!    
              </p>
            }
          />

          <Panels
            image = {IMG_5936}
            image_name = 'classification'
            title = 'Scientific Classification'
            content = {
              <ul>
                <li><strong>Kingdom:</strong> Animalia</li>
                <li><strong>Phylum:</strong> Chordata</li>
                <li><strong>Subphylum:</strong> Vertebrata</li>
                <li><strong>Class:</strong> Mammalia</li>
                <li><strong>Order:</strong> Rodentia</li>
                <li><strong>Suborder:</strong> Myomorpha</li>
                <li><strong>Superfamily:</strong> Muroidea</li>
                <li><strong>Family:</strong> Cricetidae</li>
                <li><strong>Subfamily:</strong> Cricetinae</li>
                <li><strong>Genera:</strong> Allocricetulus, Cansumus, Cricetus, Cricetulus, Mesocricetus, Phodopus, and Tscherskia</li>
              </ul>
            }
          />

          <Panels
            image = {frances}
            image_name = 'history'
            title = 'Brief History'
            content = {
              <ul>
                The Syrian hamster, also known as the golden hamster, was scientifically described by George Robert Waterhouse in 1839. Originating from Syria, these hamsters have since been found in various regions worldwide, including Greece, Belgium, and northern China. Domestication for pets commenced in the 1930s, spearheaded by researchers like Israel Aharoni. This led to a surge in popularity during the 1940s and 1950s, with hamsters being widely bred and distributed. Today, they are beloved as household pets globally, valued for their friendly demeanor and low-maintenance care requirements. Through selective breeding efforts, various species and color variations have been developed. Additionally, hamsters have played a significant role in scientific research, contributing to fields such as biology and psychology.
              </ul>
            }
          />

          <Panels
            image = {IMG_6155}
            image_name = 'funfact'
            title = 'Some Fun Facts'
            content = {
              <ul>
                <li>“Hamster”, from the German word “hamstern”, means “hoard”, which is a favorite pastime of our hamster friends.</li>
                <li>They are solitary animals who should be housed singly in their habitat.</li>
                <li>They are nocturnal creatures, being most active during the night.</li>
                <li>They are born blind, and even as adults can only see a few inches in front of their nose.</li>
                <li>Their teeth never stop growing.</li>
                <li>Hamsters Are Banned in Hawaii.</li>
                <li>European Hamsters Are Critically Endangered</li>
                <li>Syrian hamsters are the largest species of hamster, growing up to 30 cm in length. Roborovski hamsters are the smallest.</li>                
              </ul>
            }
          />          
        </section>        
      </main>      
    );
}
  
export default Home;