import React, { useEffect, useState } from 'react';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';

const ToggleMood = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.querySelector('html').setAttribute('data-theme', theme);
  }, [theme]);

  const handleToggle = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <>
      <button className='text-3xl' onClick={handleToggle}>
        {theme === 'dark' ? <BsFillMoonFill /> : <BsFillSunFill />}
      </button>
    </>
  );
};

export default ToggleMood;
