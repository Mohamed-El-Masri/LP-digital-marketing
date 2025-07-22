import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './SharedActions.css';

const SharedActions: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="shared-actions">
      <Link to="/" className="action-button home-button" title="العودة للرئيسية">
        <i className="fas fa-home"></i>
      </Link>
      
      {showBackToTop && (
        <button 
          className="action-button back-to-top-button" 
          onClick={scrollToTop}
          title="العودة للأعلى"
        >
          <i className="fas fa-arrow-up"></i>
        </button>
      )}
    </div>
  );
};

export default SharedActions;
