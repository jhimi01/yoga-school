import React, { useEffect, useState } from 'react';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';

const ToggleMood = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const htmlElement = document.querySelector('html');
    if (htmlElement) {
      htmlElement.setAttribute('data-theme', theme);
    }
  }, [theme]);

  const handleToggle = () => {
    setTheme(theme === 'light' ? 'black' : 'light');
  };

  return (
    <>
      <button className='text-3xl' onClick={handleToggle}>
        {theme === 'black' ? <BsFillMoonFill /> : <BsFillSunFill />}
      </button>
    </>
  );
};

export default ToggleMood;
