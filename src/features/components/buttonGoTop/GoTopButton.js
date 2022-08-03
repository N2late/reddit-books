import './goTopButton.css';
import React, { useEffect, useState } from 'react';

const GoTopButton = () => {
  const [showGoTop, setShowGoTop] = useState(false);

  const handleVisibleButton = () => {
    setShowGoTop(window.pageYOffset > 50);
  };

  const handleScrollUp = () => {
    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleVisibleButton);
  }, []);

  return (
    <div className={showGoTop ? '' : 'goTopHidden'} onClick={handleScrollUp}>
      <button type={'button'} className="goTop">
        <span className="goTopIcon">Top</span>
      </button>
    </div>
  );
};

export default GoTopButton;
