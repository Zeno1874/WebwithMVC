import './Footer.css';
import Form from './Form';

function Footer() {
    return (
      <footer className='footer'>
        <section className='subscribe_form'>
          <Form/>
        </section>    
        <h4>© 2024 Xinyi Xu's Final Project for INFO 6150</h4>
      </footer> 
    );
}
  
export default Footer;