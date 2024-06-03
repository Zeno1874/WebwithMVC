import { useState } from 'react';
import './GlobalNav.css';

const menu = [
    {
        name: "Home",
        path: "#/", 
    },
    {
        name: "Classification",
        path: "#/classification",
    }, 
    {
        name: "Behavior",
        path: "#/behavior",
    },
    {
        name: "How to Raise",
        path: "#/raise",
    },
];
  
function GlobalNav({ className, setPage }) {
    const [showMenu, setShowMenu] = useState(false);

    function toggleMenu() {
        setShowMenu(!showMenu);
    }
    
    function changePage(e) {
        e.preventDefault();
        console.log(e.target.hash);
        window.history.pushState(null, '', e.target.hash);
        setPage(e.target.hash);
        setShowMenu(false);
    }

    const list = menu.map( item => {
        return (
            <li key={item.name} className="global-nav__item">
                <a className="global-nav__link" href={item.path} onClick={changePage}>
                    {item.name}
                </a> 
            </li>
        ); 
    });
    return (
        <nav className={`global-nav ${className}`}>
            <div className="menu-toggle" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            <ul className={`global-nav__list ${showMenu ? 'show' : ''}`}>
                { list }
            </ul> 
        </nav>
    );
}

export default GlobalNav;