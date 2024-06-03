import GlobalNav from './GlobalNav';
import './Header.css';

function Header({ setPage, pageTitle }) {  
    
    const handleSkipToFooter = () => {
        document.getElementById('footer').scrollIntoView({ behavior: 'smooth' });
    };
    
    return (
        <header className="header">
            <h1 className="header__logo"> 🐹 </h1>
            <h1 className="header__title">
                {pageTitle}
            </h1>
            <GlobalNav className="header-nav" setPage={setPage}/>  
            <a href="footer" onClick={handleSkipToFooter} className="skipline">Go for Subscribtion</a>         
        </header>
    );


}
  
export default Header;