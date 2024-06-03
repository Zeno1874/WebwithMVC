import { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Home from './pages/Home';
import Classification from './pages/Classification';
import Behavior from './pages/Behavior';
import Raise from './pages/Raise';
import ThemeSelector from './ThemeSelector';
import './ThemeSelector.css';

function App() {
  const [page, setPage] = useState('#/');
  const [theme, setTheme] = useState('light');

  const pageTitles = {
    '#/': "Welcome to Hamsters' World!",
    '#/classification': 'Types of Hamsters',
    '#/behavior': 'Hamster Behavior',
    '#/raise': 'How to Raise a hamster'
  };

  useEffect( () => {
    function handlePageLoad() {
      setPage(document.location.hash);  
    }

    handlePageLoad()
    console.log('adding listener');
    window.addEventListener('popstate', handlePageLoad);

    return () => {
      window.removeEventListener('popstate', handlePageLoad);
    }
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`app ${theme === 'light' ? 'light-theme' : 'dark-theme'}`}>
      <ThemeSelector currentTheme={theme} toggleTheme={toggleTheme} />
      
      <Header setPage={setPage} pageTitle={pageTitles[page]}/> 
      { page === '#/' && <Home/> }
      { page === '#/classification' && <Classification/> }
      { page === '#/behavior' && <Behavior/> }
      { page === '#/raise' && <Raise/> }     
      <Footer id="footer"/>
    </div>
  )
};

export default App;