import './ThemeSelector.css';
import React from 'react';

function ThemeSelector({ currentTheme, toggleTheme }) {
  return (
    <div className='theme_choice'>
      <label>
        <input
          id='theme'
          type="checkbox"
          checked={currentTheme === 'dark'}
          onChange={toggleTheme}
        />
        Dark Theme
      </label>
    </div>
  );
}

export default ThemeSelector;